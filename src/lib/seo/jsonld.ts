import { siteConfig } from "@/lib/config";

/**
 * Generate a JSON-LD script tag for structured data.
 * Use inside a Server Component (metadata or page body).
 */
export function jsonLdScript<T extends Record<string, unknown>>(
  data: T
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...data,
  });
}

// ──────────────────────────────────────────────────────────────
// Common schema builders for legal-tech landing pages
// ──────────────────────────────────────────────────────────────

export function organizationSchema() {
  return jsonLdScript({
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      // Add social profiles here when available
      // "https://twitter.com/eonlegal",
      // "https://linkedin.com/company/eon-legal",
    ],
  });
}

export function legalServiceSchema({
  description,
  providerName = siteConfig.name,
}: {
  description: string;
  providerName?: string;
}) {
  return jsonLdScript({
    "@type": "LegalService",
    name: providerName,
    description,
    url: siteConfig.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    serviceType: "Legal Technology",
  });
}

export function webPageSchema({
  title,
  description,
  url = siteConfig.url,
}: {
  title: string;
  description: string;
  url?: string;
}) {
  return jsonLdScript({
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  });
}

export function faqPageSchema(
  items: Array<{ question: string; answer: string }>
) {
  return jsonLdScript({
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}
