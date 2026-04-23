import "server-only";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

/**
 * Lazily loads a locale dictionary. The `Dictionary` type is derived from
 * the Spanish dictionary so the English one is structurally validated at
 * build time and every key stays in sync between locales.
 */
const loaders: Readonly<Record<Locale, () => Promise<Dictionary>>> = {
  es: () => import("@/lib/i18n/dictionaries/es").then((m) => m.dictionary),
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
