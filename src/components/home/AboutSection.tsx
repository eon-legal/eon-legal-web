import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/config";

export function AboutSection(): React.ReactElement {
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo de Eon Legal revisando un expediente de extranjería en A Coruña."
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover grayscale"
              priority={false}
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-border bg-background/80 px-6 py-4 backdrop-blur">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                Despacho · {siteConfig.contact.city}
              </span>
              <span className="font-display text-sm font-semibold text-foreground">
                Eon Legal Solutions
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 space-y-10 lg:order-2">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              Sobre el despacho
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              id="about-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Estrategia legal.
              <span className="block font-normal text-subtle">
                Atención humana.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
              <p>
                Eon Legal es un despacho con sede en A Coruña especializado
                exclusivamente en derecho de extranjería, residencia y
                nacionalidad. Trabajamos con un único equipo asignado a cada
                expediente, sin traspasos internos ni respuestas genéricas.
              </p>
              <p>
                Combinamos rigor técnico y comunicación clara: analizamos la
                vía jurídica más adecuada, anticipamos requisitos documentales
                y acompañamos al cliente durante toda la tramitación, tanto
                presencial como telemática.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 text-sm">
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  Cobertura
                </dt>
                <dd className="text-base text-foreground">
                  Todo el territorio español
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  Idiomas
                </dt>
                <dd className="text-base text-foreground">Español · Inglés</dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  Especialización
                </dt>
                <dd className="text-base text-foreground">
                  Extranjería y nacionalidad
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                  Formato
                </dt>
                <dd className="text-base text-foreground">
                  Presencial y telemático
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
