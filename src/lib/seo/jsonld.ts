import { siteConfig } from "@/lib/config";
import {
  hreflangTag,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";

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

/**
 * Resolves a site-relative path against the configured origin, ensuring
 * the active locale prefix is present so JSON-LD references the correct
 * per-language canonical URL.
 */
function localizedUrl(locale: Locale, path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = siteConfig.url.replace(/\/$/, "");
  const withLocale = localizePath(locale, path || "/");
  return `${base}${withLocale}`;
}

// ──────────────────────────────────────────────────────────────
// Common schema builders for legal-tech landing pages
// ──────────────────────────────────────────────────────────────

export function organizationSchema({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}): string {
  return jsonLdScript({
    "@type": "Organization",
    name: siteConfig.name,
    url: localizedUrl(locale, "/"),
    logo: `${siteConfig.url.replace(/\/$/, "")}${siteConfig.logo}`,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.3623,
      longitude: -8.4115,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      email: siteConfig.contact.email,
      availableLanguage: ["es", "en"],
      areaServed: ["ES-C", "ES-GA", "ES"],
    },
    sameAs: [
      siteConfig.googleBusinessProfile.publicUrl,
      // Add social profiles here when available
      // "https://twitter.com/eonlegal",
      // "https://linkedin.com/company/eon-legal",
    ],
  });
}

const defaultServiceType: Record<Locale, string> = {
  es: "Derecho de extranjería",
  en: "Immigration law",
};

export function legalServiceSchema({
  locale,
  name = siteConfig.name,
  description,
  url,
  serviceType,
  includeAggregateRating = false,
}: {
  locale: Locale;
  name?: string;
  description: string;
  url?: string;
  serviceType?: string;
  includeAggregateRating?: boolean;
}): string {
  const resolvedUrl = url ?? localizedUrl(locale, "/");
  const resolvedServiceType = serviceType ?? defaultServiceType[locale];
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  return jsonLdScript({
    "@type": "LegalService",
    name,
    description,
    url: resolvedUrl,
    inLanguage: hreflangTag[locale],
    image: `${baseUrl}${siteConfig.logo}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: localizedUrl(locale, "/"),
    },
    areaServed: [
      { "@type": "City", name: "A Coruña" },
      { "@type": "AdministrativeArea", name: "Galicia" },
      { "@type": "Country", name: "Spain" },
    ],
    serviceType: resolvedServiceType,
    ...(includeAggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: siteConfig.rating.value,
            reviewCount: siteConfig.rating.count,
            bestRating: siteConfig.rating.bestRating,
            worstRating: siteConfig.rating.worstRating,
          },
        }
      : {}),
  });
}

export function webPageSchema({
  locale,
  title,
  description,
  url,
  dateModified,
}: {
  locale: Locale;
  title: string;
  description: string;
  url?: string;
  dateModified?: string;
}): string {
  const resolvedUrl = url ?? localizedUrl(locale, "/");
  return jsonLdScript({
    "@type": "WebPage",
    name: title,
    description,
    url: resolvedUrl,
    inLanguage: hreflangTag[locale],
    ...(dateModified ? { dateModified } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  });
}

export function faqPageSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
  locale: Locale
): string {
  return jsonLdScript({
    "@type": "FAQPage",
    inLanguage: hreflangTag[locale],
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

export function specialAnnouncementSchema({
  locale,
  name,
  text,
  url,
  datePosted,
  expires,
}: {
  locale: Locale;
  name: string;
  text: string;
  url: string;
  datePosted: string;
  expires: string;
}): string {
  return jsonLdScript({
    "@type": "SpecialAnnouncement",
    name,
    text,
    url,
    inLanguage: hreflangTag[locale],
    datePosted,
    expires,
    category: "https://www.wikidata.org/wiki/Q17629376",
    announcementLocation: {
      "@type": "Country",
      name: "Spain",
    },
  });
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; url: string }>,
  locale: Locale
): string {
  return jsonLdScript({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: localizedUrl(locale, item.url),
    })),
  });
}

export function personSchema({
  locale,
  name,
  jobTitle,
  description,
  knowsAbout,
}: {
  locale: Locale;
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout: readonly string[];
}): string {
  return jsonLdScript({
    "@type": "Person",
    name,
    jobTitle,
    description,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
      url: localizedUrl(locale, "/"),
    },
    knowsAbout: [...knowsAbout],
    knowsLanguage: ["es", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
    },
  });
}

export function localBusinessSchema({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}): string {
  return jsonLdScript({
    "@type": ["LegalService", "LocalBusiness"],
    name: siteConfig.name,
    description,
    url: localizedUrl(locale, "/"),
    inLanguage: hreflangTag[locale],
    image: `${siteConfig.url.replace(/\/$/, "")}${siteConfig.logo}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      postalCode: siteConfig.contact.postalCode,
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.region,
      addressCountry: siteConfig.contact.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.3623,
      longitude: -8.4115,
    },
    hasMap: siteConfig.googleBusinessProfile.publicUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      {
        "@type": "City",
        name: "A Coruña",
      },
      {
        "@type": "AdministrativeArea",
        name: "Galicia",
      },
      {
        "@type": "Country",
        name: "Spain",
      },
    ],
    serviceType: locale === "es" ? "Derecho de extranjería" : "Immigration law",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: siteConfig.rating.bestRating,
      worstRating: siteConfig.rating.worstRating,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: localizedUrl(locale, "/"),
    },
    sameAs: [siteConfig.googleBusinessProfile.publicUrl],
  });
}
