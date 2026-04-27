"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useConsent } from "@/lib/consent";
import {
  getAnalyticsInstance,
  trackPageView,
} from "@/lib/firebase/analytics";

/**
 * Client-side Analytics bootstrapper. Initializes Firebase Analytics as soon
 * as the user grants cookie consent and fires a `page_view` event on every
 * App Router pathname change (including the first load).
 *
 * Intentionally uses only `usePathname` — avoiding `useSearchParams` keeps
 * the component outside any required Suspense boundary. Firebase GA4
 * auto-collects campaign parameters from `window.location.href`.
 */
export function AnalyticsProvider(): null {
  const pathname = usePathname();
  const consent = useConsent();

  useEffect(() => {
    if (consent !== "granted") return;
    if (!pathname) return;

    const init = (): void => {
      void getAnalyticsInstance().then(() => {
        void trackPageView(pathname);
      });
    };

    // Defer Firebase init to idle time so it doesn't block interactions
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(init);
    } else {
      // Fallback for older browsers
      setTimeout(init, 0);
    }
  }, [consent, pathname]);

  return null;
}
