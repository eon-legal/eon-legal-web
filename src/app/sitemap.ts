import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { serviceSlugs } from "@/lib/data/services";
import { defaultLocale, hreflangTag, locales } from "@/lib/i18n/config";

interface RouteDefinition {
  readonly path: string;
  readonly changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  readonly priority: number;
  readonly lastModified: string;
}

const HOME_LAST_MODIFIED = "2026-04-22";
const SERVICES_LAST_MODIFIED = "2026-04-22";
const LEGAL_LAST_MODIFIED = "2026-04-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const routes: readonly RouteDefinition[] = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
      lastModified: HOME_LAST_MODIFIED,
    },
    {
      path: "/aviso-legal",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: LEGAL_LAST_MODIFIED,
    },
    {
      path: "/privacidad",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: LEGAL_LAST_MODIFIED,
    },
    {
      path: "/cookies",
      changeFrequency: "yearly",
      priority: 0.3,
      lastModified: LEGAL_LAST_MODIFIED,
    },
    ...serviceSlugs.map((service) => ({
      path: `/servicios/${service.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: SERVICES_LAST_MODIFIED,
    })),
  ];

  return routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((code) => [hreflangTag[code], `${base}/${code}${route.path}`])
    );
    languages["x-default"] = `${base}/${defaultLocale}${route.path}`;

    return locales.map((locale) => ({
      url: `${base}/${locale}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
