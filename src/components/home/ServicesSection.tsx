import { ServiceCard } from "@/components/home/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import { REGULARIZACION_CAMPAIGN } from "@/lib/data/regularizacion-campaign";
import { getServices } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface ServicesSectionProps {
  readonly dict: Dictionary;
  readonly locale: Locale;
}

export function ServicesSection({
  dict,
  locale,
}: ServicesSectionProps): React.ReactElement {
  const t = dict.home.services;
  // The 2026 extraordinary regularisation has its own dedicated dispatch
  // section (`UrgentBannerSection`) — exclude it from the regular grid to
  // avoid duplicating campaign messaging on the landing.
  const services = getServices(locale).filter(
    (service) => service.id !== REGULARIZACION_CAMPAIGN.serviceId
  );
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <header className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {t.eyebrow}
            </div>
            <div className="space-y-6">
              <h2
                id="services-heading"
                className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                {t.heading}
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {t.description}
              </p>
            </div>
          </header>
        </Reveal>

        <StaggerList
          className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3"
          itemClassName="bg-background"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              dict={t.card}
              locale={locale}
            />
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
