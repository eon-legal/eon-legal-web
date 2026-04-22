import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import { siteConfig } from "@/lib/config";
import { getServiceById, serviceCategories } from "@/lib/data/services";
import {
  breadcrumbSchema,
  legalServiceSchema,
  webPageSchema,
} from "@/lib/seo/jsonld";

interface ServicePageProps {
  readonly params: Promise<{ slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return serviceCategories.map((service) => ({ slug: service.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  const title = `${service.title} · ${siteConfig.name}`;
  const description = service.longDescription;
  const canonical = `/servicios/${service.id}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      locale: siteConfig.locale,
    },
    twitter: { title, description },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    notFound();
  }

  const canonical = `${siteConfig.url}/servicios/${service.id}`;

  const jsonLd = [
    webPageSchema({
      title: `${service.title} · ${siteConfig.name}`,
      description: service.longDescription,
      url: canonical,
    }),
    legalServiceSchema({
      name: `${service.title} — ${siteConfig.name}`,
      description: service.longDescription,
      url: canonical,
      serviceType: service.shortTitle,
    }),
    breadcrumbSchema([
      { name: "Inicio", url: "/" },
      { name: "Servicios", url: "/#servicios" },
      { name: service.shortTitle, url: `/servicios/${service.id}` },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={`service-jsonld-${index}`}
          type="application/ld+json"
          // SAFETY: JSON-LD is generated from typed, trusted server data.
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <SiteHeader />
      <main id="main" className="flex-1">
        <section
          aria-labelledby="service-detail-heading"
          className="border-b border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-10">
            <Reveal>
              <nav
                aria-label="Ruta de navegación"
                className="font-mono text-xs uppercase tracking-[0.2em] text-subtle"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-foreground">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/#servicios" className="hover:text-foreground">
                      Servicios
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-foreground">
                    {service.shortTitle}
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                <span className="text-foreground">{service.index}</span>
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                Servicio
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                id="service-detail-heading"
                className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                {service.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {service.longDescription}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="service-highlights-heading"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-24 lg:px-10">
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                  Ámbito del servicio
                </div>
                <h2
                  id="service-highlights-heading"
                  className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
                >
                  Supuestos que tramitamos
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  Cada expediente se analiza de forma individual para escoger la
                  vía jurídica más adecuada al caso concreto.
                </p>
              </div>
            </Reveal>

            <StaggerList
              className="space-y-3"
              itemClassName="flex items-start gap-4 border-b border-border pb-3 text-base text-foreground"
            >
              {service.highlights.map((highlight) => (
                <span key={highlight} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground"
                  />
                  <span>{highlight}</span>
                </span>
              ))}
            </StaggerList>
          </div>
        </section>

        <section
          aria-labelledby="service-requirements-heading"
          className="border-b border-border bg-surface"
        >
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-24 lg:px-10">
            <Reveal>
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                  <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                  Documentación habitual
                </div>
                <h2
                  id="service-requirements-heading"
                  className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
                >
                  Qué necesitamos para empezar
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-muted">
                  El listado es orientativo; en la primera consulta confirmamos
                  los documentos exigibles según la vía jurídica aplicable.
                </p>
              </div>
            </Reveal>

            <StaggerList
              className="space-y-3"
              itemClassName="flex items-start gap-4 border-b border-border pb-3 text-base text-foreground"
            >
              {service.requirements.map((requirement) => (
                <span key={requirement} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground"
                  />
                  <span>{requirement}</span>
                </span>
              ))}
            </StaggerList>
          </div>
        </section>

        <section
          aria-labelledby="service-cta-heading"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 px-6 py-20 md:py-24 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                Consulta inicial
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="service-cta-heading"
                className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                ¿Tu caso encaja en este servicio? Hablemos.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                Revisamos la viabilidad, plazos y documentación necesaria en una
                primera consulta sin compromiso. Atendemos de forma presencial
                en A Coruña y telemática en toda España.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                    `Consulta · ${service.title}`
                  )}`}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  Solicitar consulta
                  <span aria-hidden="true" className="font-mono text-xs">
                    →
                  </span>
                </a>
                <Link
                  href="/#servicios"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
