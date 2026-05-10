import { siteConfig } from "@/lib/config";
import { serviceSlugs } from "@/lib/data/services";
import { defaultLocale, hreflangTag, locales } from "@/lib/i18n/config";

export async function GET() {
  const rawBase = siteConfig.url.replace(/\/$/, "");
  const base = rawBase.includes("://www.")
    ? rawBase
    : rawBase.replace("://", "://www.");

  // Default locale lives at site root (no /${locale} prefix). Other locales
  // keep the /${locale} prefix.
  const localePathPrefix = (locale: string): string =>
    locale === defaultLocale ? "" : `/${locale}`;

  const routes = [
    { path: "", freq: "weekly", priority: 1, modified: "2026-04-25" },
    {
      path: "/aviso-legal",
      freq: "yearly",
      priority: 0.3,
      modified: "2026-04-25",
    },
    {
      path: "/privacidad",
      freq: "yearly",
      priority: 0.3,
      modified: "2026-04-25",
    },
    {
      path: "/cookies",
      freq: "yearly",
      priority: 0.3,
      modified: "2026-04-25",
    },
    ...serviceSlugs.map((s) => ({
      path: `/servicios/${s.id}`,
      freq: "monthly",
      priority: 0.8,
      modified: "2026-04-25",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .flatMap((route) =>
    locales.map((locale) => {
      const loc = `${base}${localePathPrefix(locale)}${route.path}` || `${base}/`;
      const alternates = locales
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflangTag[alt]}" href="${base}${localePathPrefix(alt)}${route.path}" />`
        )
        .join("\n");
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${localePathPrefix(defaultLocale)}${route.path}" />`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${route.modified}</lastmod>
    <changefreq>${route.freq}</changefreq>
    <priority>${route.priority}</priority>
${alternates}
${xDefault}
  </url>`;
    })
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
