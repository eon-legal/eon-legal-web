/**
 * Site configuration — single source of truth for URLs, brand, and SEO defaults.
 * Update these values before production deploy.
 */

/**
 * Normalize a site URL: strip trailing slash, force https, and force the
 * `www.` subdomain on the production host. Ensures canonical/hreflang
 * tags never drift to non-www even if `NEXT_PUBLIC_SITE_URL` is set
 * incorrectly in the deployment environment.
 */
function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.replace(/\/$/, "").replace(/^http:\/\//, "https://");
  if (trimmed === "https://eonlegalsolutions.com") {
    return "https://www.eonlegalsolutions.com";
  }
  return trimmed;
}

export const siteConfig = {
  name: "EonLegal Solutions",
  shortName: "EonLegal",
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eonlegalsolutions.com"
  ),
  locale: "es_ES",
  language: "es",
  twitterHandle: "@eonlegal",
  logo: "/logo/logo.png",
  logoInverted: "/logo/logo-inverted.png",
  authors: [
    {
      name: "EonLegal Solutions",
      url: "https://www.eonlegalsolutions.com",
    },
  ],
  keywords: {
    es: [
      "abogados extranjería",
      "arraigo social",
      "arraigo laboral",
      "arraigo familiar",
      "nacionalidad española",
      "visado de trabajo España",
      "reagrupación familiar",
      "tarjeta comunitaria",
      "residencia de larga duración",
      "canje de carnet de conducir",
      "regularización extraordinaria 2026",
      "regularización migrantes España 2026",
      "plataforma Mercurio regularización",
      "abogados extranjería A Coruña",
      "abogado arraigo A Coruña",
      "despacho extranjería Galicia",
      "regularización 2026 A Coruña",
      "abogado extranjería Coruña",
      "tramitación arraigo A Coruña",
      "abogados nacionalidad A Coruña",
      "visado trabajo A Coruña",
    ],
    en: [
      "Spanish immigration lawyers",
      "social arraigo",
      "employment-based arraigo",
      "family-based arraigo",
      "Spanish citizenship",
      "work visa Spain",
      "family reunification Spain",
      "EU family member card",
      "long-term residency Spain",
      "driver licence exchange Spain",
      "extraordinary regularization Spain 2026",
      "Spain 2026 regularization migrants",
      "immigration lawyers A Coruña",
      "immigration lawyer Galicia Spain",
      "arraigo lawyer Coruña",
      "Spanish visa A Coruña",
    ],
  },
  contact: {
    email: "contacto@eonlegalsolutions.com",
    phone: "+34 640 61 13 99",
    whatsapp: "+34 640 61 13 99",
    address: "Ronda de Outeiro 267, Bajo A",
    postalCode: "15010",
    city: "A Coruña",
    region: "Galicia",
    country: "España",
    countryCode: "ES",
  },
  rating: {
    value: 5,
    count: 18,
    bestRating: 5,
    // Schema.org `worstRating` is the lowest possible value on the scale,
    // not the lowest received review. With a 1-5 star scale this must be
    // 1 so Google's rich-results validator interprets the rating range
    // correctly.
    worstRating: 1,
    source: "Google",
    sourceUrl: "https://maps.google.com/?cid=4037852907856911343",
  },
  googleBusinessProfile: {
    cid: "4037852907856911343",
    publicUrl: "https://maps.google.com/?cid=4037852907856911343",
  },
} as const;

export type SiteConfig = typeof siteConfig;
