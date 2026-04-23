import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import { siteConfig } from "@/lib/config";
import { getServiceById, serviceSlugs } from "@/lib/data/services";
import {
  buildLanguageAlternates,
  canonicalFor,
} from "@/lib/i18n/alternates";
import { isLocale, locales, localizePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  breadcrumbSchema,
  legalServiceSchema,
  webPageSchema,
} from "@/lib/seo/jsonld";

interface ServicePageProps {
  readonly params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams(): Array<{
  locale: string;
  slug: string;
}> {
  return locales.flatMap((locale) =>
    serviceSlugs.map(({ id }) => ({ locale, slug: id }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const service = getServiceById(slug, locale);
  if (!service) {
    return { title: dict.services.common.notFoundTitle };
  }

  const title = `${service.title} · ${siteConfig.name}`;
  const description = service.longDescription;
  const path = `/servicios/${service.id}`;
  const canonical = canonicalFor(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(path),
    },
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
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const service = getServiceById(slug, locale);
  if (!service) notFound();

  const common = dict.services.common;
  const path = `/servicios/${service.id}`;
  const homeHref = localizePath(locale, "/");
  const servicesHref = `${homeHref}#servicios`;

  const jsonLd = [
    webPageSchema({
      locale,
      title: `${service.title} · ${siteConfig.name}`,
      description: service.longDescription,
    }),
    legalServiceSchema({
      locale,
      name: `${service.title} — ${siteConfig.name}`,
      description: service.longDescription,
      serviceType: service.shortTitle,
    }),
    breadcrumbSchema(
      [
        { name: common.home, url: "/" },
        { name: common.services, url: "/#servicios" },
        { name: service.shortTitle, url: path },
      ],
      locale
    ),
  ];

  const mailtoSubject = encodeURIComponent(
    `${common.consultaSubjectPrefix}${service.title}`
  );

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
      <SiteHeader dict={dict.site} locale={locale} />
      <main id="main" className="flex-1">
        <section
          aria-labelledby="service-detail-heading"
          className="border-b border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-10">
            <Reveal>
              <nav
                aria-label={common.breadcrumbAriaLabel}
                className="font-mono text-xs uppercase tracking-[0.2em] text-subtle"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href={homeHref} className="hover:text-foreground">
                      {common.home}
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={servicesHref} className="hover:text-foreground">
                      {common.services}
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
                {common.serviceEyebrow}
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

        <ServiceListSection
          headingId="service-highlights-heading"
          eyebrow={common.highlightsEyebrow}
          heading={common.highlightsHeading}
          description={common.highlightsDescription}
          items={service.highlights}
          tone="background"
        />

        <ServiceListSection
          headingId="service-requirements-heading"
          eyebrow={common.requirementsEyebrow}
          heading={common.requirementsHeading}
          description={common.requirementsDescription}
          items={service.requirements}
          tone="surface"
        />

        <section
          aria-labelledby="service-cta-heading"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 px-6 py-20 md:py-24 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                {common.ctaEyebrow}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="service-cta-heading"
                className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                {common.ctaHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {common.ctaDescription}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${mailtoSubject}`}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  {common.ctaPrimary}
                  <span aria-hidden="true" className="font-mono text-xs">
                    →
                  </span>
                </a>
                <Link
                  href={servicesHref}
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  {common.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter dict={dict.site} locale={locale} />
    </>
  );
}

interface ServiceListSectionProps {
  readonly headingId: string;
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly items: readonly string[];
  readonly tone: "background" | "surface";
}

function ServiceListSection({
  headingId,
  eyebrow,
  heading,
  description,
  items,
  tone,
}: ServiceListSectionProps): React.ReactElement {
  const bg = tone === "surface" ? "bg-surface" : "bg-background";
  return (
    <section
      aria-labelledby={headingId}
      className={`border-b border-border ${bg}`}
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-24 lg:px-10">
        <Reveal>
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {eyebrow}
            </div>
            <h2
              id={headingId}
              className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
            >
              {heading}
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              {description}
            </p>
          </div>
        </Reveal>

        <StaggerList
          className="space-y-3"
          itemClassName="flex items-start gap-4 border-b border-border pb-3 text-base text-foreground"
        >
          {items.map((item) => (
            <span key={item} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground"
              />
              <span>{item}</span>
            </span>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
