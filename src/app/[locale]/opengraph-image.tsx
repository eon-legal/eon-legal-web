import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";
import { type Locale, isLocale, locales } from "@/lib/i18n/config";

export const alt = "Eon Legal — Extranjería, residencia y nacionalidad en España";
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

/**
 * Locale-aware copy rendered on the social card. Keeping the raw strings
 * inline (instead of importing dictionaries) keeps the edge bundle small
 * and avoids RSC constraints on `next/og`.
 */
const copy: Readonly<
  Record<
    Locale,
    {
      readonly eyebrow: string;
      readonly separator: string;
      readonly headline: string;
      readonly reviewsSuffix: string;
    }
  >
> = {
  es: {
    eyebrow: "Despacho",
    separator: "Especializado en extranjería",
    headline: "Extranjería, nacionalidad y residencia en España.",
    reviewsSuffix: "Google · {count} reseñas verificadas",
  },
  en: {
    eyebrow: "Law firm",
    separator: "Spanish immigration specialists",
    headline: "Immigration, residency and citizenship in Spain.",
    reviewsSuffix: "Google · {count} verified reviews",
  },
};

interface OgImageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function Image({
  params,
}: OgImageProps): Promise<ImageResponse> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "es";
  const t = copy[locale];
  const [poppinsSemiBold, poppinsMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/Poppins-SemiBold.ttf")),
    readFile(join(process.cwd(), "public/fonts/Poppins-Medium.ttf")),
  ]);

  const rating = siteConfig.rating.value.toFixed(1);
  const reviewCount = siteConfig.rating.count;
  const reviewsLine = t.reviewsSuffix.replace(
    "{count}",
    String(reviewCount)
  );

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
            fontSize: 480,
            lineHeight: 0.8,
            fontWeight: 600,
            color: "#FFFFFF",
            opacity: 0.05,
            letterSpacing: -16,
            padding: "40px 40px 0 0",
            display: "flex",
          }}
        >
          {rating}
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
            <div style={{ display: "flex", color: "#FFFFFF" }}>{t.eyebrow}</div>
            <div
              style={{ width: 32, height: 1, background: "#708090", display: "flex" }}
            />
            <div style={{ display: "flex" }}>{t.separator}</div>
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
            {t.headline}
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
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" style={{ display: "flex" }}>
              <path d="M12 2l2.95 6.97L22 9.98l-5.5 4.86L18.18 22 12 18.27 5.82 22l1.68-7.16L2 9.98l7.05-1.01z" />
            </svg>
            <div style={{ display: "flex", color: "#FFFFFF", fontWeight: 500 }}>
              {rating}
            </div>
            <div style={{ display: "flex" }}>{reviewsLine}</div>
          </div>
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
