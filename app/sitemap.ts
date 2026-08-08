import type { MetadataRoute } from "next";
import { globalServiceRoutes } from "@/lib/global-commercial-pages";
import { absoluteUrl } from "@/lib/site-url";

const routes = [
  "",
  "/about",
  "/services",
  "/remote-marketing-services",
  "/how-we-work",
  "/growth-system",
  ...globalServiceRoutes,
  "/performance-marketing-agency-visakhapatnam",
  "/digital-marketing-agency-visakhapatnam",
  "/google-ads-agency-visakhapatnam",
  "/meta-ads-agency-visakhapatnam",
  "/lead-generation-agency-visakhapatnam",
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
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/blog/") ? 0.6 : 0.8,
  }));
}
