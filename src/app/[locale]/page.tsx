import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

// Lazy-load below-the-fold sections to reduce initial JS
const ProcessSection = dynamic(() =>
  import("@/components/home/ProcessSection").then((m) => ({
    default: m.ProcessSection,
  }))
);

const TeamSection = dynamic(() =>
  import("@/components/home/TeamSection").then((m) => ({
    default: m.TeamSection,
  }))
);

const TestimonialsSection = dynamic(() =>
  import("@/components/home/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  }))
);
import { getHomeFaqs } from "@/lib/data/faqs";
import {
  buildLanguageAlternates,
  canonicalFor,
} from "@/lib/i18n/alternates";
import { isLocale, locales, ogLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  personSchema,
  webPageSchema,
} from "@/lib/seo/jsonld";

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { title, description } = dict.home.metadata;
  const canonical = canonicalFor(locale, "/");

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: buildLanguageAlternates("/"),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => ogLocale[code]),
    },
    twitter: { title, description },
  };
}

export default async function HomePage({
  params,
}: HomePageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { title, description } = dict.home.metadata;
  const faqs = getHomeFaqs(locale);

  const lawyerExpertise =
    locale === "es"
      ? [
          "Derecho de extranjería",
          "Arraigo social",
          "Nacionalidad española",
          "Reagrupación familiar",
          "Visados y residencia",
        ]
      : [
          "Spanish immigration law",
          "Social arraigo",
          "Spanish citizenship",
          "Family reunification",
          "Visas and residency",
        ];

  const jsonLd = [
    organizationSchema({
      locale,
      description: dict.site.brand.organizationDescription,
    }),
    localBusinessSchema({
      locale,
      description,
    }),
    ...dict.home.team.members.map((member) =>
      personSchema({
        locale,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        knowsAbout: lawyerExpertise,
      })
    ),
    webPageSchema({ locale, title, description }),
    faqPageSchema(
      faqs.map((faq) => ({ ...faq })),
      locale
    ),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={`home-jsonld-${index}`}
          type="application/ld+json"
          // SAFETY: JSON-LD is generated from trusted server-side sources
          // (siteConfig, typed FAQ list). The standard Next.js pattern for
          // structured data requires dangerouslySetInnerHTML.
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <SiteHeader dict={dict.site} locale={locale} />
      <main id="main" className="flex-1">
        <HeroSection dict={dict} />
        <ServicesSection dict={dict} locale={locale} />
        <AboutSection dict={dict} />
        <Suspense fallback={<SectionSkeleton />}>
          <TeamSection dict={dict} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection dict={dict} />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection dict={dict} />
        </Suspense>
        <FaqSection dict={dict} locale={locale} />
        <ContactSection dict={dict} />
      </main>
      <SiteFooter dict={dict.site} locale={locale} />
    </>
  );
}

