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
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
