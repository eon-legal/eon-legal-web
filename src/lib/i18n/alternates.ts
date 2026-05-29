/**
 * Builders for `Metadata.alternates` entries (canonical + hreflang map)
 * used by every page under `src/app/[locale]`. Centralised so the
 * `x-default` policy (always the Spanish variant) stays consistent.
 */

import { siteConfig } from "@/lib/config";
import {
  defaultLocale,
  hreflangTag,
  locales,
  type Locale,
} from "@/lib/i18n/config";

const ABSOLUTE_BASE = (() => {
  const base = siteConfig.url.replace(/\/$/, "");
  return base.includes("://www.") ? base : base.replace("://", "://www.");
})();

/**
 * Compose the public path for a given locale + non-localized path. The
 * default locale is served at the site root (no `/${locale}` prefix), so
 * its public URLs omit the locale segment. Non-default locales keep the
 * `/${locale}` prefix.
 */
function publicPath(locale: Locale, normalizedPath: string): string {
  if (locale === defaultLocale) return normalizedPath || "/";
  return `/${locale}${normalizedPath}`;
}

/**
 * Build the `alternates.languages` map for a given pathname (expressed as
 * the non-localized part, e.g. `/`, `/aviso-legal`, `/servicios/residencia`).
 * The returned map always includes an `x-default` entry pointing at the
 * default-locale variant, as mandated by Google's internationalization
 * guidelines. Returns absolute www URLs so reciprocal-link auditors that
 * don't resolve relative `Metadata.alternates` against `metadataBase` see
 * the canonical host.
 */
export function buildLanguageAlternates(
  path: string
): Record<string, string> {
  const normalized = normalize(path);
  const map: Record<string, string> = {};
  for (const code of locales) {
    map[hreflangTag[code]] = `${ABSOLUTE_BASE}${publicPath(code, normalized)}`;
  }
  map["x-default"] = `${ABSOLUTE_BASE}${publicPath(defaultLocale, normalized)}`;
  return map;
}

/**
 * Canonical URL for a given locale + pathname. Returned as a site-relative
 * URL so Next.js can resolve it against `metadataBase`. Default locale
 * canonical omits the locale segment so it matches the public root URL.
 */
export function canonicalFor(locale: Locale, path: string): string {
  return publicPath(locale, normalize(path));
}

function normalize(path: string): string {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}
