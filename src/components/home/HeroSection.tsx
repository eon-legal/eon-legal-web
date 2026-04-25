import Image from "next/image";
import { ReviewBadge } from "@/components/ui/ReviewBadge";
import { siteConfig } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { interpolate } from "@/lib/i18n/utils";

interface HeroSectionProps {
  readonly dict: Dictionary;
}

export function HeroSection({ dict }: HeroSectionProps): React.ReactElement {
  const t = dict.home.hero;
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
      />
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10 lg:py-40">
        <div className="space-y-10">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            {t.eyebrow}
          </div>

          <h1
            id="hero-heading"
            className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {t.headingLead}
            <span className="block font-normal text-subtle">
              {t.headingTrail}
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted md:text-xl">
            {interpolate(t.descriptionPrefix, { brand: siteConfig.name })}
            <strong className="font-semibold text-foreground">
              {t.descriptionStrong}
            </strong>
            {t.descriptionSuffix}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              {t.ctaPrimary}
              <span aria-hidden="true" className="font-mono">
                →
              </span>
            </a>
            <a
              href="#servicios"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <ReviewBadge dict={dict.site.common} />

          <dl className="flex flex-wrap gap-x-10 gap-y-4 pt-6 text-sm text-muted">
            <div className="flex items-baseline gap-2">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {t.stats.officeLabel}
              </dt>
              <dd className="text-foreground">
                {siteConfig.contact.city}, {siteConfig.contact.region}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {t.stats.coverageLabel}
              </dt>
              <dd className="text-foreground">{t.stats.coverageValue}</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {t.stats.languagesLabel}
              </dt>
              <dd className="text-foreground">{t.stats.languagesValue}</dd>
            </div>
          </dl>
        </div>

        <aside aria-label={t.aside.ariaLabel} className="relative hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <figure className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1649653084130-06638e40ca25?auto=format&fit=crop&w=1400&q=80"
                alt={t.aside.figureAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale"
                priority={false}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-border bg-background/80 px-6 py-4 backdrop-blur">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                  {interpolate(t.aside.figureEyebrow, {
                    city: siteConfig.contact.city,
                  })}
                </span>
                <span className="font-display text-sm font-semibold text-foreground">
                  {t.aside.figureTitle}
                </span>
              </figcaption>
            </figure>

            <div className="space-y-6 rounded-md border border-border bg-surface p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-subtle">
                {t.aside.specialtiesHeading}
              </p>
              <ul className="space-y-5 text-base leading-relaxed">
                {t.aside.specialties.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-xs text-subtle pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
