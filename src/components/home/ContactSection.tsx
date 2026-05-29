import Image from "next/image";
import { TrackedExternalLink } from "@/components/site/TrackedExternalLink";
import { siteConfig } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface ContactSectionProps {
  readonly dict: Dictionary;
}

export function ContactSection({
  dict,
}: ContactSectionProps): React.ReactElement {
  const t = dict.home.contact;
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.email}`;

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <div className="relative overflow-hidden rounded-md border border-border bg-surface px-8 py-16 md:px-16 md:py-24">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority={false}
            loading="lazy"
            className="pointer-events-none absolute inset-0 object-cover opacity-[0.08] grayscale"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-surface via-surface/85 to-surface/60"
          />
          <div
            aria-hidden="true"
            className="hero-glow pointer-events-none absolute inset-0"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-border-strong"
                />
                {t.eyebrow}
              </div>

              <h2
                id="contact-heading"
                className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                {t.headingLead}
                <span className="block font-normal text-subtle">
                  {t.headingTrail}
                </span>
              </h2>

              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {t.description}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={emailHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  {t.ctaEmail}
                  <span aria-hidden="true" className="font-mono">
                    →
                  </span>
                </a>
                <TrackedExternalLink
                  href={phoneHref}
                  eventName="phone_click"
                  eventParams={{ location: "contact_section_cta" }}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border-strong px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  {t.ctaPhone}
                </TrackedExternalLink>
              </div>
            </div>

            <dl className="space-y-8 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.labels.email}
                </dt>
                <dd>
                  <a
                    href={emailHref}
                    className="text-base font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.labels.phone}
                </dt>
                <dd>
                  <TrackedExternalLink
                    href={phoneHref}
                    eventName="phone_click"
                    eventParams={{ location: "contact_section_details" }}
                    className="text-base font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </TrackedExternalLink>
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.labels.office}
                </dt>
                <dd className="text-base text-foreground">
                  {siteConfig.contact.city}, {siteConfig.contact.country}
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  {t.labels.coverage}
                </dt>
                <dd className="text-base text-foreground">
                  {t.coverageValue}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
