import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: false,
  async redirects() {
    return [
      // Force apex (no-www) to canonical www host as a 308. Vercel's
      // built-in apex redirect is a 307, which can leave the non-www
      // variant lingering in Google's index. Matching on `host` here
      // overrides the platform default with a permanent redirect that
      // preserves the request path.
      {
        source: "/:path*",
        has: [{ type: "host", value: "eonlegalsolutions.com" }],
        destination: "https://www.eonlegalsolutions.com/:path*",
        permanent: true,
      },
      // Legacy /es paths permanently redirect to root-level equivalents.
      // The default locale (Spanish) now lives at the site root, so
      // /es and /es/foo are no longer canonical.
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles runs before filesystem routes match, allowing the
      // default-locale page set under /es/* to serve at the site root
      // without exposing the /es prefix to users or crawlers.
      beforeFiles: [
        { source: "/", destination: "/es" },
        { source: "/aviso-legal", destination: "/es/aviso-legal" },
        { source: "/cookies", destination: "/es/cookies" },
        { source: "/privacidad", destination: "/es/privacidad" },
        { source: "/servicios/:slug", destination: "/es/servicios/:slug" },
        // OG/Twitter image routes live under /[locale]/, so when the
        // canonical / -> /es redirect strips the prefix from a crawler's
        // request, route the rewritten path back to the actual file.
        { source: "/opengraph-image", destination: "/es/opengraph-image" },
        { source: "/twitter-image", destination: "/es/twitter-image" },
        {
          source: "/servicios/:slug/opengraph-image",
          destination: "/es/servicios/:slug/opengraph-image",
        },
        {
          source: "/servicios/:slug/twitter-image",
          destination: "/es/servicios/:slug/twitter-image",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    // CSP is intentionally permissive for inline scripts/styles because
    // Next.js streams hydration data through inline tags that don't carry
    // a nonce in the App Router output. Tighten to `strict-dynamic` once
    // a nonce-injection middleware is in place (see PROJECT_RULES §4.4).
    const contentSecurityPolicy = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.firebaseio.com https://*.firebase.com https://www.gstatic.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://*.googleusercontent.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://*.firebaseio.com https://*.firebase.com https://firebaseinstallations.googleapis.com https://firebaseremoteconfig.googleapis.com https://identitytoolkit.googleapis.com wss://*.firebaseio.com",
      "frame-src 'self' https://www.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
