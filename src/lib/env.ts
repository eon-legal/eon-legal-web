import { z } from "zod";

/**
 * Runtime validation for environment variables.
 * Fails fast at build time if required vars are missing / invalid.
 *
 * RULE: Never import `process.env` directly in app code.
 * Always use `env.VAR_NAME` from this file.
 */

const serverEnvSchema = z.object({
  // Next.js
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  // Supabase (server-only — never expose to client)
  SUPABASE_URL: z.string().url().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
});

const clientEnvSchema = z.object({
  // Supabase (safe for client)
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),

  // Firebase Web SDK (safe for client — access controlled via Firebase rules)
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1).optional(),
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string().min(1).optional(),
});

// Validate server-side env
const _serverEnv = serverEnvSchema.safeParse(process.env);
if (!_serverEnv.success) {
  console.error(
    "❌ Invalid server environment variables:",
    _serverEnv.error.format()
  );
  throw new Error("Invalid server environment variables");
}

// Validate client-side env (only keys prefixed with NEXT_PUBLIC_)
const _clientEnv = clientEnvSchema.safeParse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});
if (!_clientEnv.success) {
  console.error(
    "❌ Invalid client environment variables:",
    _clientEnv.error.format()
  );
  throw new Error("Invalid client environment variables");
}

/**
 * Safe, typed environment variables.
 * Use this instead of raw `process.env` everywhere.
 */
export const env = {
  ..._serverEnv.data,
  ..._clientEnv.data,
} as const;

export type Env = typeof env;
