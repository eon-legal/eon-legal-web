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
