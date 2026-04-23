/**
 * FAQs mostradas en la landing principal, agregadas por `Locale`.
 * Los textos deben coincidir palabra por palabra con el JSON-LD FAQPage
 * emitido en cada idioma: Google requiere coincidencia exacta para los
 * rich snippets.
 */

import type { Locale } from "@/lib/i18n/config";
import { homeFaqsEn } from "@/lib/data/faqs.en";
import { homeFaqsEs } from "@/lib/data/faqs.es";

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

const faqsByLocale: Readonly<Record<Locale, readonly FaqItem[]>> = {
  es: homeFaqsEs,
  en: homeFaqsEn,
};

export function getHomeFaqs(locale: Locale): readonly FaqItem[] {
  return faqsByLocale[locale];
}
