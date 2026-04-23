"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  LOCALE_COOKIE,
  type Locale,
  isLocale,
  locales,
} from "@/lib/i18n/config";

interface LanguageSwitcherProps {
  readonly locale: Locale;
  readonly ariaLabel: string;
  readonly options: Readonly<Record<Locale, string>>;
}

function persistLocalePreference(next: Locale): void {
  if (typeof document !== "undefined") {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${next}; Path=/; Max-Age=${oneYear}; SameSite=Lax`;
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LOCALE_COOKIE, next);
    } catch {
      // localStorage may be unavailable (e.g. private mode); the cookie
      // already covers persistence so we can safely ignore this.
    }
  }
}

/**
 * Locale picker shown in the header. Persists the explicit choice in the
 * `NEXT_LOCALE` cookie (read by `src/proxy.ts` on future visits) and in
 * `localStorage` so client-only mirrors stay consistent, and then swaps the
 * locale segment of the current URL in place.
 */
export function LanguageSwitcher({
  locale,
  ariaLabel,
  options,
}: LanguageSwitcherProps): React.ReactElement {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale): void => {
    if (next === locale) return;
    persistLocalePreference(next);
    const segments = pathname.split("/");
    if (segments.length > 1 && isLocale(segments[1] ?? "")) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const target = segments.join("/") || `/${next}`;
    startTransition(() => {
      router.replace(target);
      router.refresh();
    });
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      aria-busy={isPending || undefined}
      className="inline-flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 font-mono text-[11px] uppercase tracking-[0.18em]"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            aria-pressed={active}
            aria-label={options[code]}
            className={[
              "inline-flex h-7 items-center justify-center rounded px-2.5 transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground",
            ].join(" ")}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
