"use client"; // Firebase Remote Config Web SDK only runs in the browser.

// Single concern: typed Remote Config flag access. Both the imperative API
// (getFlag, getRemoteConfigInstance) and the React subscription primitives
// (useFlag, useFlags) live here so they share the module-level cache without
// a circular import — same convention as firebase/analytics.ts.

import type { RemoteConfig, Value } from "firebase/remote-config";
import { useSyncExternalStore } from "react";
import { getFirebaseConfig } from "./config";
import {
  defaultFlags,
  type RemoteFlagKey,
  type RemoteFlags,
} from "./remote-config-flags";

/**
 * Lazy Firebase Remote Config loader.
 *
 * The Firebase SDK and the Remote Config module are imported dynamically so
 * neither ships in the initial client bundle. Unlike Analytics, fetching
 * Remote Config is NOT gated on cookie consent: flags are configuration that
 * affects what every visitor sees, and the SDK does not collect personal
 * data. Initialization is still deferred to after hydration via
 * RemoteConfigProvider, so it never competes with LCP work.
 */
const FLAGS_EVENT = "eon:remoteflagschange";
const FETCH_INTERVAL_PROD_MS = 12 * 60 * 60 * 1000;

let remoteConfigPromise: Promise<RemoteConfig | null> | null = null;
let cachedFlags: RemoteFlags = defaultFlags;

function emitFlagsChange(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(FLAGS_EVENT));
}

function coerceValue<T>(value: Value, fallback: T): T {
  switch (typeof fallback) {
    case "boolean":
      // SAFETY: branch guarded by typeof of the default — T is boolean.
      return value.asBoolean() as T;
    case "number":
      // SAFETY: branch guarded by typeof of the default — T is number.
      return value.asNumber() as T;
    case "string":
      // SAFETY: branch guarded by typeof of the default — T is string.
      return value.asString() as T;
    default:
      return fallback;
  }
}

async function loadRemoteConfig(): Promise<RemoteConfig | null> {
  const config = getFirebaseConfig();
  if (!config) return null;
  if (typeof window === "undefined") return null;

  const [{ initializeApp, getApps }, rcModule] = await Promise.all([
    import("firebase/app"),
    import("firebase/remote-config"),
  ]);

  const supported = await rcModule.isSupported().catch(() => false);
  if (!supported) return null;

  const app = getApps().length > 0 ? getApps()[0] : initializeApp(config);
  if (!app) return null;

  const rc = rcModule.getRemoteConfig(app);
  // SAFETY: defaultFlags is a Record<string, RemoteFlagPrimitive> at
  // runtime; the SDK accepts that shape.
  rc.defaultConfig = defaultFlags as Record<string, string | number | boolean>;
  rc.settings.minimumFetchIntervalMillis =
    process.env.NODE_ENV === "production" ? FETCH_INTERVAL_PROD_MS : 0;

  try {
    await rcModule.fetchAndActivate(rc);
    const next: Record<string, unknown> = { ...defaultFlags };
    for (const key of Object.keys(defaultFlags) as RemoteFlagKey[]) {
      const fallback = defaultFlags[key];
      const value = rcModule.getValue(rc, key as string);
      next[key as string] = coerceValue(value, fallback);
    }
    // SAFETY: every key originated from defaultFlags and values were
    // coerced to the matching primitive type by coerceValue.
    cachedFlags = next as RemoteFlags;
    emitFlagsChange();
  } catch {
    // Network failure / throttling — keep cachedFlags on defaults.
  }

  return rc;
}

/**
 * Returns the cached RemoteConfig instance, kicking off the lazy load on
 * first call. Resolves to null when Firebase is not configured, the runtime
 * does not support Remote Config (e.g. SSR), or initialization fails.
 */
export function getRemoteConfigInstance(): Promise<RemoteConfig | null> {
  if (!remoteConfigPromise) {
    remoteConfigPromise = loadRemoteConfig();
  }
  return remoteConfigPromise;
}

/**
 * Reads a flag. Returns the compile-time default until the first successful
 * fetchAndActivate, then the activated remote value. Never throws.
 */
export async function getFlag<K extends RemoteFlagKey>(
  key: K
): Promise<RemoteFlags[K]> {
  await getRemoteConfigInstance();
  return cachedFlags[key];
}

/** Synchronous snapshot of every known flag (defaults until activation). */
export function getFlagsSnapshot(): RemoteFlags {
  return cachedFlags;
}

function subscribeToFlags(callback: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(FLAGS_EVENT, callback);
  return () => window.removeEventListener(FLAGS_EVENT, callback);
}

function getServerSnapshot(): RemoteFlags {
  return defaultFlags;
}

/**
 * React hook returning the live flag map; re-renders when fetchAndActivate
 * publishes new values.
 */
export function useFlags(): RemoteFlags {
  return useSyncExternalStore(
    subscribeToFlags,
    getFlagsSnapshot,
    getServerSnapshot
  );
}

export function useFlag<K extends RemoteFlagKey>(key: K): RemoteFlags[K] {
  return useFlags()[key];
}
