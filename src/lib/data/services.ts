/**
 * Catálogo de categorías de servicio mostradas en la landing principal.
 * Derivado de `docs/services.md`. Estos datos también alimentan el JSON-LD
 * (schema.org/LegalService) y deben coincidir con el contenido visible.
 *
 * La estructura se divide en dos capas: metadatos estables (`id`/`index`,
 * compartidos por todos los idiomas y usados para URLs y sitemap) y
 * contenido traducible (`LocalizedServiceContent`) definido por locale.
 */

import type { Locale } from "@/lib/i18n/config";
import { servicesContentEn } from "@/lib/data/services.en";
import { servicesContentEs } from "@/lib/data/services.es";

export type DescriptionItem =
  | string
  | { readonly h3: string; readonly text?: string };

export function flattenDescription(items: readonly DescriptionItem[]): string {
  return items
    .map((item) =>
      typeof item === "string"
        ? item
        : [item.h3, item.text].filter(Boolean).join(" ")
    )
    .join(" ");
}

export interface LocalizedServiceContent {
  readonly title: string;
  // Shorter variant for <title> tag / SERPs (≤38ch so total with brand ≤60ch).
  // Falls back to title when absent.
  readonly metaTitle?: string;
  readonly shortTitle: string;
  readonly summary: string;
  readonly metaDescription: string;
  readonly longDescription: readonly DescriptionItem[];
  readonly highlights: readonly string[];
  readonly requirements: readonly string[];
  // Optional per-service overrides — leave undefined to use shared dict strings
  readonly highlightsHeading?: string;
  readonly requirementsHeading?: string;
  readonly bodyNote?: readonly string[];
  readonly sources?: readonly { readonly label: string; readonly url: string }[];
  readonly faqs?: readonly { readonly question: string; readonly answer: string }[];
  readonly relatedServices?: readonly string[];
}

export interface ServiceCategory extends LocalizedServiceContent {
  readonly id: string;
  readonly index: string;
}

interface ServiceSlug {
  readonly id: string;
  readonly index: string;
}

export const serviceSlugs: readonly ServiceSlug[] = [
  { id: "residencia", index: "01" },
  { id: "arraigo", index: "02" },
  { id: "visados", index: "03" },
  { id: "nacionalidad", index: "04" },
  { id: "familiares-ue", index: "05" },
  { id: "dgt", index: "06" },
  { id: "regularizacion-2026", index: "07" },
] as const;

const contentByLocale: Readonly<
  Record<Locale, Readonly<Record<string, LocalizedServiceContent>>>
> = {
  es: servicesContentEs,
  en: servicesContentEn,
};

export function getServices(locale: Locale): readonly ServiceCategory[] {
  const content = contentByLocale[locale];
  return serviceSlugs.map(({ id, index }) => {
    const localized = content[id];
    if (!localized) {
      throw new Error(
        `Missing localized content for service "${id}" in locale "${locale}".`
      );
    }
    return { id, index, ...localized };
  });
}

export function getServiceById(
  id: string,
  locale: Locale
): ServiceCategory | undefined {
  const slug = serviceSlugs.find((entry) => entry.id === id);
  if (!slug) return undefined;
  const localized = contentByLocale[locale][id];
  if (!localized) return undefined;
  return { id: slug.id, index: slug.index, ...localized };
}
