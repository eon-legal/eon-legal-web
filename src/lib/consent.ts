"use client";

import { useSyncExternalStore } from "react";

/**
 * Cookie-consent state management.
 *
 * Persists a first-party cookie (`cookie_consent`) that stores the user's
 * analytics choice. A custom `consentchange` window event is dispatched on
 * every update so in-app subscribers (AnalyticsProvider, banner) can react
 * without reloading the page.
 */

export const CONSENT_COOKIE = "cookie_consent";
const CONSENT_EVENT = "consentchange";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export type ConsentValue = "granted" | "denied";
export type ConsentState = ConsentValue | null;

function parseConsentCookie(): ConsentState {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE}=(granted|denied)`)
  );
  return match ? (match[1] as ConsentValue) : null;
}

export function getConsent(): ConsentState {
  return parseConsentCookie();
}

/**
 * Persist (or clear) the consent choice and notify subscribers. Passing
 * `null` deletes the cookie so the banner reappears on the next render of
 * any subscribed component (used by the "reset preferences" action).
 */
export function setConsent(value: ConsentValue | null): void {
  if (typeof document === "undefined") return;
  if (value === null) {
    document.cookie = `${CONSENT_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
  } else {
    document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
  }
  window.dispatchEvent(
    new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: value })
  );
}

function subscribeToConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => undefined;
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function getConsentServerSnapshot(): ConsentState {
  return null;
}

/**
 * React hook that returns the current consent state and re-renders when
 * the `consentchange` event fires. Modeled with `useSyncExternalStore` so
 * it subscribes to the cookie-backed store without triggering the
 * "setState in effect" anti-pattern.
 */
export function useConsent(): ConsentState {
  return useSyncExternalStore(
    subscribeToConsent,
    parseConsentCookie,
    getConsentServerSnapshot
  );
}
