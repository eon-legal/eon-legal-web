"use client"; // Reads/writes localStorage, listens to keyboard, locks scroll.

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DaysUntilDeadline } from "@/components/site/DaysUntilDeadline";
import { REGULARIZACION_CAMPAIGN } from "@/lib/data/regularizacion-campaign";
import { type Locale, localizePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface UrgentModalProps {
  readonly dict: Dictionary["site"]["urgent"]["modal"];
  readonly locale: Locale;
}

const STORAGE_KEY = "eon_urgent_modal_dismissed_at";
const TTL_MS = 24 * 60 * 60 * 1000;
const SHOW_DELAY_MS = 4_500;

function shouldShow(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const ts = Number.parseInt(raw, 10);
    if (!Number.isFinite(ts)) return true;
    return Date.now() - ts > TTL_MS;
  } catch {
    return true;
  }
}

/**
 * Once-per-day campaign modal. Mounted only on the landing page. Persists a
 * dismissal timestamp under `eon_urgent_modal_dismissed_at`; reappears 24h
 * after the last dismissal. Honours ESC, overlay click and focus-trap on
 * the close button. Scroll is locked while open.
 */
export function UrgentModal({
  dict,
  locale,
}: UrgentModalProps): React.ReactElement | null {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const servicePath = localizePath(
    locale,
    `/servicios/${REGULARIZACION_CAMPAIGN.serviceId}`
  );

  const dismiss = useCallback((): void => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // Safari private mode / storage disabled — fall back to in-memory only.
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!shouldShow()) return;
    const id = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") dismiss();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={dict.ariaLabel}
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
    >
      <button
        type="button"
        aria-label={dict.close}
        onClick={dismiss}
        className="modal-overlay-enter absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
      />
      <div className="modal-enter relative mx-4 mb-4 w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-black text-white shadow-2xl sm:mx-6 sm:mb-0">
        <div
          aria-hidden="true"
          className="dot-grid pointer-events-none absolute inset-0 opacity-50"
        />
        <div className="relative flex items-center justify-between gap-4 border-b border-white/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/65">
          <span className="flex items-center gap-2 text-white">
            <span aria-hidden="true" className="pulse-dot" />
            {dict.kicker}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label={dict.close}
            className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white"
          >
            <span aria-hidden="true" className="text-base leading-none">×</span>
          </button>
        </div>

        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
            {dict.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl">
            {dict.headingLead}
            <span className="block font-light text-white/65">
              {dict.headingTrail}
            </span>
          </h2>

          <div className="mt-7 grid gap-6 border-y border-white/15 py-6 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                {dict.deadlineLabel}
              </p>
              <p className="font-display text-2xl font-semibold leading-none">
                {dict.deadlineDate}
              </p>
            </div>
            <DaysUntilDeadline
              deadlineISO={REGULARIZACION_CAMPAIGN.deadlineISO}
              pluralTemplate={dict.daysPlural}
              singularTemplate={dict.daysSingular}
              opensTodayLabel={dict.opensToday}
              className="justify-self-start rounded-full border border-white/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white sm:justify-self-end"
            />
          </div>

          <p className="mt-6 text-pretty text-[15px] leading-relaxed text-white/80">
            {dict.body}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={servicePath}
              onClick={dismiss}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:flex-1"
            >
              {dict.ctaPrimary}
              <span aria-hidden="true" className="font-mono">→</span>
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-6 text-sm font-medium text-white transition-colors hover:border-white"
            >
              {dict.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
