import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

// Bots that retrieve content to answer live user queries with citations
// (search-style retrieval). Allowing these preserves visibility in AI
// search products without contributing the content to model training.
const AI_RETRIEVAL_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Applebot-Extended",
] as const;

// Bots that crawl primarily for LLM training corpora. Disallow to opt
// out of being absorbed into future model weights while keeping search
// retrieval available via the allow-list above.
const AI_TRAINING_BOTS = [
  "GPTBot",
  "Google-Extended",
  "CCBot",
  "anthropic-ai",
  "cohere-ai",
  "Bytespider",
  "ImagesiftBot",
  "Omgilibot",
  "FacebookBot",
  "Diffbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  // Normalize host to always include www. for sitemap absolute URL,
  // matching the canonical domain referenced in hreflang and metadata.
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = base.includes("://www.")
    ? base
    : base.replace("://", "://www.");
  // Yandex's `Host` directive expects a hostname only — no scheme. The
  // previous value (`https://www…`) was malformed and silently ignored
  // by every crawler that consults it.
  const yandexHost = normalized.replace(/^https?:\/\//, "");

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_RETRIEVAL_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
      ...AI_TRAINING_BOTS.map((userAgent) => ({ userAgent, disallow: "/" })),
    ],
    sitemap: `${normalized}/sitemap.xml`,
    host: yandexHost,
  };
}
