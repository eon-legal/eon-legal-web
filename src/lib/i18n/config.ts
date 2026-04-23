/**
 * i18n configuration — single source of truth for supported locales,
 * defaults, and locale-derived metadata values (html lang, OG locale, hreflang).
 */

export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/**
 * Name of the cookie used to persist the user's explicit language choice.
 * Matches the Next.js built-in convention so it interoperates with future
 * native i18n features if they are reintroduced.
 */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Pick the best supported locale given a list of `Accept-Language` preferences.
 * Returns the default locale when no match is found.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const preferences = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";");
      const q = qPart?.trim().startsWith("q=")
        ? Number.parseFloat(qPart.trim().slice(2))
        : 1;
      return { tag: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of preferences) {
    const base = tag.split("-")[0] as string;
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

/**
 * Maps a `Locale` to its canonical `lang` attribute value for <html>.
 */
export const htmlLang: Readonly<Record<Locale, string>> = {
  es: "es",
  en: "en",
};

/**
 * Maps a `Locale` to its Open Graph locale value (xx_XX).
 */
export const ogLocale: Readonly<Record<Locale, string>> = {
  es: "es_ES",
  en: "en_US",
};

/**
 * Maps a `Locale` to its BCP-47 hreflang value used in metadata alternates.
 */
export const hreflangTag: Readonly<Record<Locale, string>> = {
  es: "es-ES",
  en: "en-US",
};

/**
 * Builds a pathname prefixed with the given locale. Preserves query/hash
 * when `href` is a pathname only (the common case for internal links).
 */
export function localizePath(locale: Locale, href: string): string {
  if (href.startsWith("#") || href.startsWith("?")) return href;
  if (!href.startsWith("/")) return href;
  if (href === "/") return `/${locale}`;
  for (const candidate of locales) {
    if (href === `/${candidate}` || href.startsWith(`/${candidate}/`)) {
      return `/${locale}${href.slice(candidate.length + 1) || ""}` || `/${locale}`;
    }
  }
  return `/${locale}${href}`;
}
