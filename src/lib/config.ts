/**
 * Site configuration — single source of truth for URLs, brand, and SEO defaults.
 * Update these values before production deploy.
 */

export const siteConfig = {
  name: "EonLegal Solutions",
  shortName: "EonLegal",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://eonlegalsolutions.com",
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
    worstRating: 5,
    source: "Google",
    sourceUrl: "https://maps.google.com/?cid=4037852907856911343",
  },
  googleBusinessProfile: {
    cid: "4037852907856911343",
    publicUrl: "https://maps.google.com/?cid=4037852907856911343",
  },
} as const;

export type SiteConfig = typeof siteConfig;
