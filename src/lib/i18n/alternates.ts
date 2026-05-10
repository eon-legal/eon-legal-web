/**
 * Builders for `Metadata.alternates` entries (canonical + hreflang map)
 * used by every page under `src/app/[locale]`. Centralised so the
 * `x-default` policy (always the Spanish variant) stays consistent.
 */

import { siteConfig } from "@/lib/config";
import { hreflangTag, locales, type Locale } from "@/lib/i18n/config";

const ABSOLUTE_BASE = (() => {
  const base = siteConfig.url.replace(/\/$/, "");
  return base.includes("://www.") ? base : base.replace("://", "://www.");
})();

/**
 * Build the `alternates.languages` map for a given pathname (expressed as
 * the non-localized part, e.g. `/`, `/aviso-legal`, `/servicios/residencia`).
 * The returned map always includes an `x-default` entry pointing at the
 * Spanish variant, as mandated by Google's internationalization guidelines.
 * Returns absolute www URLs so reciprocal-link auditors that don't resolve
 * relative `Metadata.alternates` against `metadataBase` see the canonical host.
 */
export function buildLanguageAlternates(
  path: string
): Record<string, string> {
  const normalized = normalize(path);
  const map: Record<string, string> = {};
  for (const code of locales) {
    map[hreflangTag[code]] = `${ABSOLUTE_BASE}/${code}${normalized}`;
  }
  map["x-default"] = `${ABSOLUTE_BASE}/es${normalized}`;
  return map;
}

/**
 * Canonical URL for a given locale + pathname. Returned as a site-relative
 * URL so Next.js can resolve it against `metadataBase`.
 */
export function canonicalFor(locale: Locale, path: string): string {
  const normalized = normalize(path);
  return `/${locale}${normalized}` || `/${locale}`;
}

function normalize(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}
