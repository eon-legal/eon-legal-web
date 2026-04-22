/**
 * Site configuration — single source of truth for URLs, brand, and SEO defaults.
 * Update these values before production deploy.
 */

export const siteConfig = {
  name: "Eon Legal",
  shortName: "Eon Legal",
  tagline:
    "Despacho especializado en extranjería, nacionalidad y residencia en España.",
  description:
    "Eon Legal ofrece asesoría jurídica integral en extranjería: arraigo social, nacionalidad española, visados, reagrupación familiar y trámites ante la DGT. Atención personalizada en A Coruña y en toda España.",
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
      name: "Eon Legal",
      url: "https://eon-legal.com",
    },
  ],
  keywords: [
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
  ],
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
    value: 4.9,
    count: 47,
    bestRating: 5,
    worstRating: 1,
    source: "Google",
    sourceUrl:
      "https://www.google.com/search?q=eon+legal+solutions+a+coruna",
  },
} as const;

export type SiteConfig = typeof siteConfig;
