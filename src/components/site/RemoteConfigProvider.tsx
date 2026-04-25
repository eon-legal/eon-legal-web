"use client"; // Mounts a useEffect that triggers the lazy SDK import.

import { useEffect } from "react";
import { getRemoteConfigInstance } from "@/lib/firebase/remote-config";

/**
 * Bootstraps Firebase Remote Config after hydration. Mounted once near the
 * root layout. Renders nothing — the SDK is fetched dynamically inside
 * `getRemoteConfigInstance` and the activated values are pushed to any
 * `useFlag` / `useFlags` subscriber via the `eon:remoteflagschange` event.
 *
 * Independent of cookie consent: flags are non-tracking configuration. If
 * Firebase is not configured the loader resolves to `null` and the
 * compile-time defaults remain in effect.
 */
export function RemoteConfigProvider(): null {
  useEffect(() => {
    void getRemoteConfigInstance();
  }, []);

  return null;
}
