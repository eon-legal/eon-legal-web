"use client";

import type { Analytics } from "firebase/analytics";
import { getConsent } from "../consent";
import { getFirebaseConfig } from "./config";

/**
 * Lazy Firebase Analytics loader.
 *
 * The Firebase SDK and the Analytics module are imported dynamically so that
 * neither ships in the initial client bundle. They are only fetched after the
 * user grants cookie consent, keeping LCP/TBT unaffected for visitors who
 * reject or have not yet decided.
 */
let analyticsPromise: Promise<Analytics | null> | null = null;

async function loadAnalytics(): Promise<Analytics | null> {
  const config = getFirebaseConfig();
  if (!config) return null;
  if (typeof window === "undefined") return null;

  const [{ initializeApp, getApps }, { getAnalytics, isSupported }] =
    await Promise.all([import("firebase/app"), import("firebase/analytics")]);

  const supported = await isSupported().catch(() => false);
  if (!supported) return null;

  const app = getApps().length > 0 ? getApps()[0] : initializeApp(config);
  if (!app) return null;
  return getAnalytics(app);
}

/**
 * Returns a cached Analytics instance, initializing it on first call.
 * Safe to call repeatedly — subsequent calls reuse the same promise.
 */
export function getAnalyticsInstance(): Promise<Analytics | null> {
  if (!analyticsPromise) {
    analyticsPromise = loadAnalytics();
  }
  return analyticsPromise;
}

/**
 * Logs a custom Analytics event. No-ops if consent has not been granted, if
 * Analytics is not configured, or if the runtime does not support GA (SSR,
 * unsupported browsers). Safe to call from any client event handler.
 */
export async function trackEvent(
  name: string,
  params?: Readonly<Record<string, unknown>>
): Promise<void> {
  if (getConsent() !== "granted") return;
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;
  const { logEvent } = await import("firebase/analytics");
  logEvent(analytics, name, params as Record<string, unknown> | undefined);
}

/**
 * Logs a `page_view` event with standard GA4 parameters.
 */
export async function trackPageView(
  path: string,
  title?: string
): Promise<void> {
  await trackEvent("page_view", {
    page_path: path,
    page_title: title,
    page_location:
      typeof window !== "undefined" ? window.location.href : undefined,
  });
}
