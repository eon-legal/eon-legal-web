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

export function organizationSchema(): string {
  return jsonLdScript({
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      email: siteConfig.contact.email,
      availableLanguage: ["es", "en"],
      areaServed: "ES",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: siteConfig.rating.bestRating,
      worstRating: siteConfig.rating.worstRating,
    },
    sameAs: [
      // Add social profiles here when available
      // "https://twitter.com/eonlegal",
      // "https://linkedin.com/company/eon-legal",
    ],
  });
}

export function legalServiceSchema({
  name = siteConfig.name,
  description,
  url = siteConfig.url,
  serviceType = "Legal Technology",
}: {
  name?: string;
  description: string;
  url?: string;
  serviceType?: string;
}): string {
  return jsonLdScript({
    "@type": "LegalService",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    serviceType,
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
}): string {
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
): string {
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

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; url: string }>
): string {
  return jsonLdScript({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url}`,
    })),
  });
}
