"use client";

import { setConsent, useConsent } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface ResetCookieConsentProps {
  readonly dict: Dictionary["site"]["cookieConsent"];
}

/**
 * Inline section rendered on the cookies policy page. Lets the user revoke
 * a previously persisted consent choice; clearing the cookie via
 * `setConsent(null)` dispatches the `consentchange` event so the
 * `CookieConsent` banner (subscribed via `useSyncExternalStore`) re-renders
 * immediately and asks for a new decision.
 */
export function ResetCookieConsent({
  dict,
}: ResetCookieConsentProps): React.ReactElement {
  const consent = useConsent();

  return (
    <>
      <h2>{dict.resetTitle}</h2>
      <p>{dict.resetDescription}</p>
      <p>
        <button
          type="button"
          onClick={() => setConsent(null)}
          disabled={consent === null}
          className="inline-flex h-10 items-center justify-center rounded-md border border-border-strong px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {dict.resetButton}
        </button>
      </p>
    </>
  );
}
