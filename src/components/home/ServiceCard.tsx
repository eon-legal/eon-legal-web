import Link from "next/link";
import type { ServiceCategory } from "@/lib/data/services";

interface ServiceCardProps {
  readonly service: ServiceCategory;
}

export function ServiceCard({ service }: ServiceCardProps): React.ReactElement {
  return (
    <article
      aria-labelledby={`service-${service.id}-title`}
      className="group relative flex h-full flex-col border border-border bg-surface-elevated p-8 transition-colors hover:border-border-strong focus-within:border-foreground"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-subtle">
          {service.index}
        </span>
        <span
          aria-hidden="true"
          className="h-px w-12 bg-border-strong transition-all duration-500 group-hover:w-20 group-hover:bg-foreground"
        />
      </div>

      <h3
        id={`service-${service.id}-title`}
        className="mt-8 font-display text-2xl font-semibold leading-tight tracking-tight text-foreground"
      >
        <Link
          href={`/servicios/${service.id}`}
          className="outline-none before:absolute before:inset-0 before:content-[''] focus-visible:text-accent-hover"
          aria-label={`Ver detalle del servicio: ${service.title}`}
        >
          {service.title}
        </Link>
      </h3>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted">
        {service.summary}
      </p>

      <ul className="mt-8 space-y-2 border-t border-border pt-6 text-sm text-muted">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground"
            />
            <span className="text-foreground">{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground"
        >
          <span className="relative inline-block pb-1">
            Ver servicio
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-foreground transition-transform duration-500 group-hover:scale-x-0" />
          </span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            →
          </span>
        </span>
      </div>
    </article>
  );
}
