import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteConfig } from "@/lib/config";
import { homeFaqs } from "@/lib/data/faqs";
import {
  faqPageSchema,
  legalServiceSchema,
  organizationSchema,
  webPageSchema,
} from "@/lib/seo/jsonld";

const pageTitle =
  "Abogados de extranjería en A Coruña · Residencia, nacionalidad y arraigo";
const pageDescription =
  "Despacho especializado en extranjería en España con sede en A Coruña. Gestionamos arraigo social, nacionalidad española, visados y reagrupación familiar con presentación telemática y atención personalizada.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    type: "website",
    locale: siteConfig.locale,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default async function HomePage(): Promise<React.ReactElement> {
  const jsonLd = [
    organizationSchema(),
    legalServiceSchema({ description: pageDescription }),
    webPageSchema({ title: pageTitle, description: pageDescription }),
    faqPageSchema(homeFaqs.map((faq) => ({ ...faq }))),
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          // SAFETY: JSON-LD is generated from trusted server-side sources
          // (siteConfig, typed FAQ list). The standard Next.js pattern for
          // structured data requires dangerouslySetInnerHTML.
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <SiteHeader />
      <main id="main" className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
