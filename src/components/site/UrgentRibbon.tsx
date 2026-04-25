import { DaysUntilDeadline } from "@/components/site/DaysUntilDeadline";
import { REGULARIZACION_CAMPAIGN } from "@/lib/data/regularizacion-campaign";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface UrgentRibbonProps {
  readonly dict: Dictionary["site"]["urgent"]["ribbon"];
  readonly modalDict: Dictionary["site"]["urgent"]["modal"];
  readonly locale: Locale;
}

/**
 * Top-of-page dispatch ribbon. Renders the campaign decree reference, a body
 * line, a live countdown and a CTA into the dedicated landing block. Uses an
 * inverted black surface to flag editorial priority over the rest of the
 * monochrome layout. The ribbon scrolls away with the page; the sticky
 * `SiteHeader` rendered below remains pinned.
 */
export function UrgentRibbon({
  dict,
  modalDict,
  locale,
}: UrgentRibbonProps): React.ReactElement {
  return (
    <aside
      role="region"
      aria-label={dict.ariaLabel}
      lang={locale}
      className="relative z-30 border-b border-white/10 bg-black text-white"
    >
      {/* Two-cluster layout: the left dispatch group flexes & wraps internally
          to absorb locale-specific copy length, while the right action group
          stays pinned on a single row. Avoids the `ml-auto` trick that caused
          the CTA to drop to its own line in Spanish. */}
      <div className="mx-auto flex max-w-6xl items-center gap-x-4 px-6 py-2.5 lg:px-10">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-1">
          <span
            aria-hidden="true"
            className="pulse-dot text-white"
            style={{ color: "#ffffff" }}
          />
          <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
            {dict.eyebrow}
          </span>
          <span
            aria-hidden="true"
            className="hidden h-3 w-px bg-white/25 sm:block"
          />
          <p className="text-[13px] leading-tight text-white/90">
            {dict.body}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-x-3 sm:gap-x-4">
          <DaysUntilDeadline
            deadlineISO={REGULARIZACION_CAMPAIGN.deadlineISO}
            pluralTemplate={modalDict.daysPlural}
            singularTemplate={modalDict.daysSingular}
            opensTodayLabel={modalDict.opensToday}
            className="hidden whitespace-nowrap rounded-full border border-white/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 md:inline-block"
          />
          <a
            href={`#${REGULARIZACION_CAMPAIGN.anchorId}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] font-medium text-white underline-offset-4 hover:underline"
          >
            {dict.cta}
            <span aria-hidden="true" className="font-mono text-xs">
              →
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
