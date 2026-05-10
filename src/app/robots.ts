import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  // Normalize host to always include www. for sitemap absolute URL,
  // matching the canonical domain referenced in hreflang and metadata.
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = base.includes("://www.")
    ? base
    : base.replace("://", "://www.");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${normalized}/sitemap.xml`,
    host: normalized,
  };
}
