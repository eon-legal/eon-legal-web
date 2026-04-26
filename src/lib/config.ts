/**
 * Site configuration — single source of truth for URLs, brand, and SEO defaults.
 * Update these values before production deploy.
 */

export const siteConfig = {
  name: "EonLegal Solutions",
  shortName: "EonLegal",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "es_ES",
  language: "es",
  twitterHandle: "@eonlegal",
  logo: "/logo/logo.png",
  logoInverted: "/logo/logo-inverted.png",
  authors: [
    {
      name: "EonLegal Solutions",
      url: "https://eonlegalsolutions.com",
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
    worstRating: 5,
    source: "Google",
    sourceUrl:
      "https://www.google.com/search?q=eon+legal+solutions+a+coruna",
  },
} as const;

export type SiteConfig = typeof siteConfig;
