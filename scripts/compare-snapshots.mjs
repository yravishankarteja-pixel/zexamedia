import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const beforePath = path.join(root, "snapshots", "before.json");
const afterPath = path.join(root, "snapshots", "after.json");

const before = JSON.parse(await readFile(beforePath, "utf8"));
const after = JSON.parse(await readFile(afterPath, "utf8"));
const frozenFields = [
  "title",
  "metaDescription",
  "canonical",
  "openGraph",
  "twitter",
  "jsonLd",
  "headings",
  "visibleText",
  "images",
];

const stable = (value) => JSON.stringify(value);
const failures = [];
const routesBefore = Object.keys(before.routes).sort();
const routesAfter = Object.keys(after.routes).sort();

if (stable(routesBefore) !== stable(routesAfter)) {
  failures.push(`Route inventory changed:\n  before: ${routesBefore.join(", ")}\n  after: ${routesAfter.join(", ")}`);
}

for (const route of routesBefore) {
  const baseline = before.routes[route];
  const current = after.routes[route];
  if (!current) continue;

  for (const field of frozenFields) {
    if (stable(baseline[field]) !== stable(current[field])) {
      failures.push(`${route}: frozen field changed: ${field}`);
    }
  }

  const currentLinks = new Set(current.internalHrefs);
  const removedLinks = baseline.internalHrefs.filter((href) => !currentLinks.has(href));
  if (removedLinks.length) {
    failures.push(`${route}: internal links removed: ${removedLinks.join(", ")}`);
  }
}

if (failures.length) {
  process.stderr.write(`SEO/content freeze comparison failed (${failures.length}):\n`);
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.exit(1);
}

process.stdout.write(
  `SEO/content freeze comparison passed for ${routesBefore.length} routes. ` +
    "Titles, metadata, canonicals, social tags, JSON-LD, headings, main text, images and existing internal links are preserved.\n",
);
