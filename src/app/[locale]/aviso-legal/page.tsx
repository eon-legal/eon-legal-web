import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/config";
import {
  buildLanguageAlternates,
  canonicalFor,
} from "@/lib/i18n/alternates";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { AvisoLegalBody } from "./body";

interface PageProps {
  readonly params: Promise<{ locale: string }>;
}

const PATH = "/aviso-legal";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { metadataTitle, metadataDescription } = dict.legal.avisoLegal;
  const canonical = canonicalFor(locale, PATH);

  return {
    title: metadataTitle,
    description: metadataDescription,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(PATH),
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: canonical,
      type: "article",
      locale: siteConfig.locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function AvisoLegalPage({
  params,
}: PageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.legal.avisoLegal;
  const common = dict.services.common;

  const jsonLd = [
    webPageSchema({
      locale,
      title: page.metadataTitle,
      description: page.metadataDescription,
    }),
    breadcrumbSchema(
      [
        { name: common.home, url: "/" },
        { name: page.metadataTitle, url: PATH },
      ],
      locale
    ),
  ];

  return (
    <LegalPageLayout
      dict={dict}
      locale={locale}
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      lastUpdated={page.lastUpdated}
      jsonLd={jsonLd}
    >
      <AvisoLegalBody locale={locale} />
    </LegalPageLayout>
  );
}
