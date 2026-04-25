import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { ResetCookieConsent } from "@/components/site/ResetCookieConsent";
import { siteConfig } from "@/lib/config";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import {
  buildLanguageAlternates,
  canonicalFor,
} from "@/lib/i18n/alternates";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { CookiesBody } from "./body";

interface PageProps {
  readonly params: Promise<{ locale: string }>;
}

const PATH = "/cookies";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { metadataTitle, metadataDescription } = dict.legal.cookies;
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

export default async function CookiesPage({
  params,
}: PageProps): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const page = dict.legal.cookies;
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

  // Only surface the reset action when the consent system is actually wired
  // up (production + Firebase configured). In dev there is no banner, so a
  // reset button would have nothing to reset.
  const showReset =
    process.env.NODE_ENV === "production" && isFirebaseConfigured();

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
      <CookiesBody locale={locale} />
      {showReset ? (
        <ResetCookieConsent dict={dict.site.cookieConsent} />
      ) : null}
    </LegalPageLayout>
  );
}
