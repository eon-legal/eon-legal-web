import { ServiceCard } from "@/components/home/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import { serviceCategories } from "@/lib/data/services";

export function ServicesSection(): React.ReactElement {
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
              Áreas de práctica
            </div>
            <div className="space-y-6">
              <h2
                id="services-heading"
                className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                Seis áreas. Una sola interlocución.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                Cubrimos el ciclo completo de extranjería en España: desde la
                primera valoración de viabilidad hasta la obtención del
                documento final, con un único equipo asignado a tu expediente.
              </p>
            </div>
          </header>
        </Reveal>

        <StaggerList
          className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3"
          itemClassName="bg-background"
        >
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
