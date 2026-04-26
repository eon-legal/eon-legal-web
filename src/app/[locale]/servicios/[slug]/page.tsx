/**
 * File >150 lines justified: single page route that owns metadata generation,
 * JSON-LD schemas, and all rendering sections (hero, highlights, requirements,
 * optional FAQ, optional related services, CTA). Splitting would require
 * threading service and dict props across multiple files with no reuse benefit.
 */
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
import { isLocale, locales, localizePath, ogLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { REGULARIZACION_CAMPAIGN } from "@/lib/data/regularizacion-campaign";
import {
  breadcrumbSchema,
  faqPageSchema,
  legalServiceSchema,
  specialAnnouncementSchema,
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

  const title = service.title;
  const socialTitle = `${service.title} | ${siteConfig.name}`;
  const description = service.metaDescription;
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
      title: socialTitle,
      description,
      url: canonical,
      type: "article",
      locale: ogLocale[locale],
    },
    twitter: { title: socialTitle, description },
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
      dateModified: "2026-04-26",
    }),
    legalServiceSchema({
      locale,
      name: `${service.title} — ${siteConfig.name}`,
      description: service.longDescription,
      serviceType: service.shortTitle,
      includeAggregateRating: true,
    }),
    breadcrumbSchema(
      [
        { name: common.home, url: "/" },
        { name: common.services, url: "/#servicios" },
        { name: service.shortTitle, url: path },
      ],
      locale
    ),
    ...(service.faqs
      ? [faqPageSchema(service.faqs.map((f) => ({ ...f })), locale)]
      : []),
    ...(service.id === REGULARIZACION_CAMPAIGN.serviceId
      ? [
          specialAnnouncementSchema({
            locale,
            name: service.title,
            text: service.longDescription,
            url: canonicalFor(locale, path),
            datePosted: REGULARIZACION_CAMPAIGN.onlineOpensISO.split("T")[0],
            expires: REGULARIZACION_CAMPAIGN.deadlineISO.split("T")[0],
          }),
        ]
      : []),
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

            {service.bodyNote && (
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                  {service.bodyNote}
                </p>
              </Reveal>
            )}
          </div>
        </section>

        <ServiceListSection
          headingId="service-highlights-heading"
          eyebrow={common.highlightsEyebrow}
          heading={service.highlightsHeading ?? common.highlightsHeading}
          description={common.highlightsDescription}
          items={service.highlights}
          tone="background"
        />

        <ServiceListSection
          headingId="service-requirements-heading"
          eyebrow={common.requirementsEyebrow}
          heading={service.requirementsHeading ?? common.requirementsHeading}
          description={common.requirementsDescription}
          items={service.requirements}
          tone="surface"
        />

        {service.faqs && service.faqs.length > 0 && (
          <section
            aria-labelledby="service-faq-heading"
            className="border-b border-border bg-background"
          >
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-10">
              <Reveal>
                <div className="mb-12 space-y-4">
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                    <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                    {common.serviceFaqEyebrow}
                  </div>
                  <h2
                    id="service-faq-heading"
                    className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
                  >
                    {common.serviceFaqHeading}
                  </h2>
                </div>
              </Reveal>
              <dl className="divide-y divide-border">
                {service.faqs.map((faq, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <div className="py-8">
                      <dt className="text-base font-semibold text-foreground md:text-lg">
                        {faq.question}
                      </dt>
                      <dd className="mt-3 text-base leading-relaxed text-muted">
                        {faq.answer}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </section>
        )}

        {service.relatedServices && service.relatedServices.length > 0 && (
          <section
            aria-labelledby="related-services-heading"
            className="border-b border-border bg-surface"
          >
            <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-10">
              <Reveal>
                <div className="mb-10 space-y-4">
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                    <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                    {common.relatedEyebrow}
                  </div>
                  <h2
                    id="related-services-heading"
                    className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl"
                  >
                    {common.relatedHeading}
                  </h2>
                </div>
              </Reveal>
              <StaggerList className="grid gap-px bg-border md:grid-cols-2" itemClassName="bg-surface">
                {service.relatedServices.map((id) => {
                  const related = getServiceById(id, locale);
                  if (!related) return null;
                  return (
                    <Link
                      key={id}
                      href={localizePath(locale, `/servicios/${id}`)}
                      className="group flex flex-col gap-3 p-8 transition-colors hover:bg-background"
                    >
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                        {related.index} — {related.shortTitle}
                      </span>
                      <span className="font-display text-xl font-semibold text-foreground">
                        {related.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {related.summary}
                      </span>
                      <span className="mt-1 font-mono text-xs text-subtle transition-colors group-hover:text-foreground">
                        → {common.relatedViewLink}
                      </span>
                    </Link>
                  );
                })}
              </StaggerList>
            </div>
          </section>
        )}

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
