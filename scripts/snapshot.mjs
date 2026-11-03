import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "app");
const baseUrl = (process.env.SNAPSHOT_BASE_URL ?? "http://127.0.0.1:3100").replace(/\/$/, "");
const label = process.argv[2] ?? "snapshot";
const outputPath = path.join(root, "snapshots", `${label}.json`);

const decodeHtml = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const normalizeText = (value) => decodeHtml(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const attributes = (tag) => {
  const result = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    result[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? "");
  }
  return result;
};

const stripImageSizing = (src) => {
  try {
    const parsed = new URL(src, baseUrl);
    if (parsed.pathname === "/_next/image") {
      const original = parsed.searchParams.get("url");
      return original ? decodeURIComponent(original) : parsed.pathname;
    }
    parsed.searchParams.delete("w");
    parsed.searchParams.delete("q");
    return parsed.origin === baseUrl ? `${parsed.pathname}${parsed.search}` : parsed.toString();
  } catch {
    return src.replace(/([?&])(w|q)=[^&]*/g, "").replace(/[?&]$/, "");
  }
};

async function discoverRoutes(directory, segments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes = [];
  if (entries.some((entry) => entry.isFile() && /^page\.(t|j)sx?$/.test(entry.name))) {
    routes.push(`/${segments.join("/")}`.replace(/\/$/, "") || "/");
  }
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
    if (entry.name.startsWith("[")) continue;
    routes.push(...(await discoverRoutes(path.join(directory, entry.name), [...segments, entry.name])));
  }
  return routes;
}

function readMeta(html) {
  const result = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    const key = attrs.name ?? attrs.property;
    if (key && attrs.content !== undefined) result[key] = attrs.content;
  }
  return result;
}

function readCanonical(html) {
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if ((attrs.rel ?? "").split(/\s+/).includes("canonical")) return attrs.href ?? null;
  }
  return null;
}

function readJsonLd(html) {
  return [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => {
      const raw = decodeHtml(match[1].trim());
      try {
        return JSON.parse(raw);
      } catch {
        return raw;
      }
    },
  );
}

function readMain(html) {
  return html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
}

function readHeadings(main) {
  return [...main.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => ({
    tag: match[1].toLowerCase(),
    text: normalizeText(match[2]),
  }));
}

function readImages(main) {
  return (main.match(/<img\b[^>]*>/gi) ?? []).map((tag) => {
    const attrs = attributes(tag);
    return { src: stripImageSizing(attrs.src ?? ""), alt: attrs.alt ?? "" };
  });
}

function readInternalLinks(main) {
  const links = new Set();
  for (const tag of main.match(/<a\b[^>]*>/gi) ?? []) {
    const href = attributes(tag).href;
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    try {
      const url = new URL(href, baseUrl);
      if (url.origin === baseUrl || url.hostname === "zexamedia.in" || url.hostname === "www.zexamedia.in") {
        links.add(`${url.pathname}${url.search}${url.hash}`);
      }
    } catch {
      if (href.startsWith("/")) links.add(href);
    }
  }
  return [...links].sort();
}

function visibleMainText(main) {
  return normalizeText(
    main
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " "),
  );
}

const routes = [...new Set(await discoverRoutes(appDir))].sort();
const snapshot = { generatedAt: new Date().toISOString(), baseUrl, routes: {} };

for (const route of routes) {
  const response = await fetch(`${baseUrl}${route}`, { redirect: "follow" });
  if (!response.ok) throw new Error(`${route}: ${response.status} ${response.statusText}`);
  const html = await response.text();
  const meta = readMeta(html);
  const main = readMain(html);
  snapshot.routes[route] = {
    title: normalizeText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""),
    metaDescription: meta.description ?? null,
    canonical: readCanonical(html),
    openGraph: Object.fromEntries(Object.entries(meta).filter(([key]) => key.startsWith("og:"))),
    twitter: Object.fromEntries(Object.entries(meta).filter(([key]) => key.startsWith("twitter:"))),
    jsonLd: readJsonLd(html),
    headings: readHeadings(main),
    visibleText: visibleMainText(main),
    images: readImages(main),
    internalHrefs: readInternalLinks(main),
  };
  process.stdout.write(`snapshotted ${route}\n`);
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
process.stdout.write(`saved ${outputPath}\n`);
