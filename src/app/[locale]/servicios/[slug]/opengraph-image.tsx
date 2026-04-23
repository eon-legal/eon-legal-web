import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";
import { getServiceById, serviceSlugs } from "@/lib/data/services";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";

export const alt = "Eon Legal — Servicios de extranjería";
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

export function generateStaticParams(): Array<{
  locale: Locale;
  slug: string;
}> {
  return locales.flatMap((locale) =>
    serviceSlugs.map(({ id }) => ({ locale, slug: id }))
  );
}

const copy: Readonly<
  Record<Locale, { readonly fallbackEyebrow: string; readonly tagline: string }>
> = {
  es: {
    fallbackEyebrow: "Despacho de extranjería",
    tagline: "Extranjería · Nacionalidad · Residencia",
  },
  en: {
    fallbackEyebrow: "Spanish immigration firm",
    tagline: "Immigration · Citizenship · Residency",
  },
};

interface OgImageProps {
  readonly params: Promise<{ locale: string; slug: string }>;
}

export default async function Image({
  params,
}: OgImageProps): Promise<ImageResponse> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const t = copy[locale];
  const service = getServiceById(slug, locale);
  const title = service?.title ?? siteConfig.name;
  const index = service?.index ?? "00";
  const eyebrow = service?.shortTitle ?? t.fallbackEyebrow;

  const [poppinsSemiBold, poppinsMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Poppins-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/fonts/Poppins-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#000000",
          color: "#FFFFFF",
          fontFamily: "Poppins",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: 560,
            lineHeight: 0.8,
            fontWeight: 700,
            color: "#FFFFFF",
            opacity: 0.05,
            letterSpacing: -20,
            padding: "20px 40px 0 0",
            display: "flex",
          }}
        >
          {index}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FFFFFF",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.name}</div>
          <div
            style={{ width: 48, height: 1, background: "#708090", display: "flex" }}
          />
          <div style={{ display: "flex", color: "#708090" }}>A Coruña</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#708090",
            }}
          >
            <div style={{ display: "flex", color: "#FFFFFF" }}>{index}</div>
            <div
              style={{ width: 32, height: 1, background: "#708090", display: "flex" }}
            />
            <div style={{ display: "flex" }}>{eyebrow}</div>
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.04,
              fontWeight: 600,
              letterSpacing: -2,
              color: "#FFFFFF",
              display: "flex",
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "#708090",
          }}
        >
          <div style={{ display: "flex" }}>{t.tagline}</div>
          <div style={{ display: "flex", color: "#FFFFFF" }}>eon-legal.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppinsMedium, style: "normal", weight: 500 },
        { name: "Poppins", data: poppinsSemiBold, style: "normal", weight: 600 },
      ],
    }
  );
}
