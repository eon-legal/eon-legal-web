/**
 * Editorial-style dispatch block highlighting the 2026 extraordinary
 * regularisation campaign. Uses an inverted (black) surface — the only one
 * on the landing — so it reads as a press special edition. Composition is
 * kept asymmetric: the deadline acts as the typographic anchor on the left,
 * with criteria and timeline columns flowing on the right.
 * File >150 lines justified: holds the full localised composition for the
 * campaign hero block; splitting would scatter copy and styling across files.
 */
import Link from "next/link";
import { DaysUntilDeadline } from "@/components/site/DaysUntilDeadline";
import { REGULARIZACION_CAMPAIGN } from "@/lib/data/regularizacion-campaign";
import { type Locale, localizePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface UrgentBannerSectionProps {
  readonly dict: Dictionary;
  readonly locale: Locale;
}

export function UrgentBannerSection({
  dict,
  locale,
}: UrgentBannerSectionProps): React.ReactElement {
  const t = dict.home.urgent;
  const modalT = dict.site.urgent.modal;
  const servicePath = localizePath(
    locale,
    `/servicios/${REGULARIZACION_CAMPAIGN.serviceId}`
  );

  return (
    <section
      id={REGULARIZACION_CAMPAIGN.anchorId}
      aria-label={t.ariaLabel}
      className="relative overflow-hidden border-y border-white/10 bg-black text-white"
    >
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        {/* Dispatch masthead */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-white/15 pb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
          <span className="flex items-center gap-2 text-white">
            <span aria-hidden="true" className="pulse-dot" />
            {t.kicker}
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-white/25" />
          <span>{t.bulletinRef}</span>
          <span className="ml-auto text-white/50">№ 07 / VII</span>
        </div>

        {/* Heading row */}
        <header className="mt-12 grid gap-10 md:grid-cols-[1fr_minmax(0,1.4fr)] md:items-end md:gap-16">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
            <span aria-hidden="true" className="h-px w-8 bg-white/40" />
            {t.eyebrow}
          </div>
          <h2 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {t.headingLead}
            <span className="block font-light text-white/65">
              {t.headingTrail}
            </span>
          </h2>
        </header>

        <p className="mt-10 max-w-3xl text-pretty text-lg leading-relaxed text-white/75 md:text-xl">
          {t.lede}
        </p>

        {/* Three-column body: deadline · criteria · timeline */}
        <div className="mt-16 grid gap-12 md:grid-cols-[1.1fr_1fr_1fr] md:gap-10">
          <div className="space-y-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              {t.deadlineLabel}
            </p>
            <p className="font-display text-[clamp(3rem,7vw,5.25rem)] font-semibold leading-none tracking-tight">
              {t.deadlineDate}
            </p>
            <div aria-hidden="true" className="hairline-dashed h-px w-full text-white" />
            <DaysUntilDeadline
              deadlineISO={REGULARIZACION_CAMPAIGN.deadlineISO}
              pluralTemplate={modalT.daysPlural}
              singularTemplate={modalT.daysSingular}
              opensTodayLabel={modalT.opensToday}
              className="font-mono text-xs uppercase tracking-[0.22em] text-white"
            />
            <p className="text-sm text-white/55">{t.deadlineFootnote}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                {t.criteria.eyebrow}
              </p>
              <p className="font-display text-lg font-medium text-white">
                {t.criteria.heading}
              </p>
            </div>
            <ul className="space-y-5">
              {t.criteria.items.map((item, i) => (
                <li
                  key={item.label}
                  className="flex gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[11px] text-white/45 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                {t.timeline.eyebrow}
              </p>
              <p className="font-display text-lg font-medium text-white">
                {t.timeline.heading}
              </p>
            </div>
            <ol className="space-y-5">
              {t.timeline.items.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-white/70">
                    {item.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA row */}
        {/* Primary `ctaPrimary` ("Check my case") drives the consultation
            funnel via `#contacto`; secondary `ctaSecondary` ("See full
            requirements") routes to the dedicated service detail page. */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-10 sm:flex-row sm:items-center">
          <a
            href="#contacto"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-7 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            {t.ctaPrimary}
            <span aria-hidden="true" className="font-mono">
              →
            </span>
          </a>
          <Link
            href={servicePath}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/30 px-7 text-sm font-medium text-white transition-colors hover:border-white"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
