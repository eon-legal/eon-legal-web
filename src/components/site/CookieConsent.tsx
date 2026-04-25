"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";
import { type Locale, localizePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface CookieConsentProps {
  readonly dict: Dictionary["site"]["cookieConsent"];
  readonly locale: Locale;
}

/**
 * First-visit cookie consent banner. Blocks Firebase Analytics until the
 * user explicitly accepts, matching Spanish AEPD/GDPR requirements.
 * Persists the choice via `setConsent` so it survives across sessions.
 */
export function CookieConsent({
  dict,
  locale,
}: CookieConsentProps): React.ReactElement | null {
  const consent = useConsent();

  // Hidden on the server and during the first client render (consent === null
  // from the server snapshot). After hydration `useSyncExternalStore` reads the
  // real cookie; the banner only appears when no choice has been persisted yet.
  if (consent !== null) return null;

  const decide = (value: "granted" | "denied"): void => {
    setConsent(value);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={dict.ariaLabel}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-border bg-surface-elevated/95 p-4 shadow-lg backdrop-blur md:inset-x-auto md:right-4 md:left-auto md:w-[28rem] md:p-5"
    >
      <p className="text-sm leading-relaxed text-muted">
        {dict.message}{" "}
        <Link
          href={localizePath(locale, "/cookies")}
          className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
        >
          {dict.learnMore}
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide("denied")}
          className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          {dict.reject}
        </button>
        <button
          type="button"
          onClick={() => decide("granted")}
          className="inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {dict.accept}
        </button>
      </div>
    </div>
  );
}
