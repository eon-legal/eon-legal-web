import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { interpolate } from "@/lib/i18n/utils";

interface AboutSectionProps {
  readonly dict: Dictionary;
}

export function AboutSection({ dict }: AboutSectionProps): React.ReactElement {
  const t = dict.home.about;
  return (
    <section
      id="despacho"
      aria-labelledby="about-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-border bg-surface">
            <Image
              src="/about/office.webp"
              alt={t.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale"
              priority={false}
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-border bg-background/80 px-6 py-4 backdrop-blur">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                {interpolate(t.figureEyebrow, {
                  city: siteConfig.contact.city,
                })}
              </span>
              <span className="font-display text-sm font-semibold text-foreground">
                {t.figureTitle}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 space-y-10 lg:order-2">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {t.eyebrow}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              id="about-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {t.headingLead}
              <span className="block font-normal text-subtle">
                {t.headingTrail}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
              {t.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.stats.coverageLabel}
                </dt>
                <dd className="text-base text-foreground">
                  {t.stats.coverageValue}
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.stats.languagesLabel}
                </dt>
                <dd className="text-base text-foreground">
                  {t.stats.languagesValue}
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.stats.specializationLabel}
                </dt>
                <dd className="text-base text-foreground">
                  {t.stats.specializationValue}
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.stats.formatLabel}
                </dt>
                <dd className="text-base text-foreground">
                  {t.stats.formatValue}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
