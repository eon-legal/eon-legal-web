import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { AnalyticsProvider } from "@/components/site/AnalyticsProvider";
import { CookieConsent } from "@/components/site/CookieConsent";
import { RemoteConfigProvider } from "@/components/site/RemoteConfigProvider";
import { siteConfig } from "@/lib/config";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { buildLanguageAlternates } from "@/lib/i18n/alternates";
import {
  type Locale,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

interface LocaleParams {
  readonly params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: LocaleParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const { title, description } = dict.home.metadata;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.keywords[locale]],
    authors: [...siteConfig.authors],
    creator: siteConfig.authors[0].name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: buildLanguageAlternates("/"),
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => ogLocale[code]),
      url: `/${locale}`,
      siteName: siteConfig.name,
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description,
      creator: siteConfig.twitterHandle,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Firebase Analytics is only loaded in production and only after explicit
  // consent via `CookieConsent` → see `src/lib/firebase/analytics.ts`.
  const analyticsEnabled =
    process.env.NODE_ENV === "production" && isFirebaseConfigured();
  // Firebase Remote Config is loaded in any environment as long as Firebase
  // is configured — flags are non-tracking configuration and need to be
  // testable in dev. See `src/lib/firebase/remote-config.ts`.
  const remoteConfigEnabled = isFirebaseConfigured();
  const dict = analyticsEnabled ? await getDictionary(locale) : null;

  return (
    <html
      lang={htmlLang[locale]}
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        {remoteConfigEnabled ? <RemoteConfigProvider /> : null}
        {analyticsEnabled && dict ? (
          <>
            <CookieConsent dict={dict.site.cookieConsent} locale={locale} />
            <AnalyticsProvider />
          </>
        ) : null}
      </body>
    </html>
  );
}

