import { Reveal } from "@/components/ui/Reveal";
import { homeTestimonials } from "@/lib/data/testimonials";

export function TestimonialsSection(): React.ReactElement {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <header className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              Experiencia de clientes
            </div>
            <div className="space-y-6">
              <h2
                id="testimonials-heading"
                className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                Casos resueltos, palabras verificadas.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                Acompañamos a cada cliente hasta la resolución. Estas son
                algunas de las experiencias compartidas tras cerrar su
                expediente con el despacho.
              </p>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <ol
            role="list"
            className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:thin] md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:pb-0"
          >
            {homeTestimonials.map((t, i) => (
              <li
                key={t.id}
                className="min-w-[85%] snap-start md:min-w-0"
                aria-posinset={i + 1}
                aria-setsize={homeTestimonials.length}
              >
                <figure className="flex h-full flex-col justify-between gap-10 rounded-md border border-border bg-background p-8">
                  <blockquote className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
                    <span aria-hidden="true" className="font-display text-4xl leading-none text-subtle">
                      &ldquo;
                    </span>
                    <span className="block pt-2">{t.quote}</span>
                  </blockquote>
                  <figcaption className="space-y-4 border-t border-border pt-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-display text-base font-semibold text-foreground">
                        {t.name}
                      </p>
                      <VerifiedBadge />
                    </div>
                    <div className="flex items-center gap-3">
                      <Stars
                        rating={t.rating}
                        aria-label={`${t.rating} de 5 estrellas`}
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                        Reseña en Google
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function VerifiedBadge(): React.ReactElement {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
      <svg width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 1.5l1.8 1.4 2.3-.2.6 2.2 2 1.1-.9 2.1 0 2.3-2 1.1-.6 2.2-2.3-.2L8 14.5 6.2 13.1l-2.3.2-.6-2.2-2-1.1.9-2.1 0-2.3 2-1.1.6-2.2 2.3.2L8 1.5z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M5.2 8.2l1.9 1.9L11 6.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      Verificado
    </span>
  );
}

interface StarsProps {
  readonly rating: number;
  readonly "aria-label"?: string;
}

function Stars({ rating, ...rest }: StarsProps): React.ReactElement {
  const filled = Math.round(rating);
  return (
    <span
      role="img"
      aria-label={rest["aria-label"]}
      className="flex items-center gap-0.5 text-foreground"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 20 20"
          aria-hidden="true"
          fill={i < filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        >
          <path d="M10 1.5l2.7 5.47 6.05.88-4.38 4.27 1.03 6.02L10 15.3l-5.4 2.84 1.03-6.02L1.25 7.85l6.05-.88L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
