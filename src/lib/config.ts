/**
 * Site configuration — single source of truth for URLs, brand, and SEO defaults.
 * Update these values before production deploy.
 */

export const siteConfig = {
  name: "Eon Legal",
  shortName: "Eon Legal",
  tagline:
    "Legal tech solutions that automate compliance, contracts, and corporate governance for modern businesses.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "en_US",
  twitterHandle: "@eonlegal",
  logo: "/logo/logo.png",
  logoInverted: "/logo/logo-inverted.png",
  authors: [
    {
      name: "Eon Legal Team",
      url: "https://eon-legal.com",
    },
  ],
  keywords: [
    "legal tech",
    "compliance automation",
    "contract management",
    "corporate governance",
    "legal automation",
    "business legal software",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
