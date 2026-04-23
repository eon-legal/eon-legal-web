import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { serviceSlugs } from "@/lib/data/services";
import { defaultLocale, hreflangTag, locales } from "@/lib/i18n/config";

interface RouteDefinition {
  readonly path: string;
  readonly changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  readonly priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const routes: readonly RouteDefinition[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/aviso-legal", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacidad", changeFrequency: "yearly", priority: 0.3 },
    { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
    ...serviceSlugs.map((service) => ({
      path: `/servicios/${service.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes.flatMap((route) => {
    const languages = Object.fromEntries(
      locales.map((code) => [hreflangTag[code], `${base}/${code}${route.path}`])
    );
    languages["x-default"] = `${base}/${defaultLocale}${route.path}`;

    return locales.map((locale) => ({
      url: `${base}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
