import type { MetadataRoute } from "next";

const baseUrl = "https://zexamedia.in";

const routes = [
  "",
  "/about",
  "/services",
  "/services/performance-marketing",
  "/services/social-media-management",
  "/services/branding",
  "/services/automation",
  "/packages",
  "/case-studies",
  "/blog",
  "/blog/what-is-growth-marketing",
  "/blog/meta-ads-local-business-vizag",
  "/blog/marketing-automation-small-business",
  "/contact",
  "/free-audit",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/blog/") ? 0.6 : 0.8,
  }));
}
