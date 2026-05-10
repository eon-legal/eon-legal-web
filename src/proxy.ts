import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  locales,
  matchLocale,
} from "@/lib/i18n/config";

/**
 * Next.js 16 Proxy (replaces middleware.ts). Resolves the active locale and
 * redirects bare paths (e.g. `/servicios/residencia`) to the localized
 * variant, respecting an explicit `NEXT_LOCALE` cookie choice first, then
 * the `Accept-Language` header, and finally the default locale.
 *
 * Also ensures non-www traffic redirects to www for hreflang consistency.
 */
export function proxy(request: NextRequest): NextResponse | undefined {
  const { hostname, pathname, search, hash } = request.nextUrl;

  // Redirect non-www to www for consistent canonical URLs and hreflang tags
  if (
    hostname === "eonlegalsolutions.com" ||
    (hostname &&
      !hostname.startsWith("www.") &&
      hostname !== "localhost" &&
      !hostname.includes(":"))
  ) {
    const target = new URL(request.url);
    target.hostname = `www.${hostname}`;
    return NextResponse.redirect(target, { status: 301 });
  }

  const hasLocaleInPath = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocaleInPath) return undefined;

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const explicit =
    cookieLocale && isLocale(cookieLocale) ? cookieLocale : undefined;

  // Root path always goes to defaultLocale so search engines get a stable
  // canonical target. Accept-Language detection applies only to sub-paths
  // where the user arrived without a locale prefix.
  const locale =
    pathname === "/"
      ? (explicit ?? defaultLocale)
      : (explicit ?? matchLocale(request.headers.get("accept-language")) ?? defaultLocale);

  const target = new URL(request.nextUrl);
  target.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  target.search = search;
  target.hash = hash;

  return NextResponse.redirect(target, { status: 301 });
}

export const config = {
  /**
   * Exclude Next.js internals, API routes and common static files from
   * locale redirection. Everything else is handled by the proxy above.
   */
  matcher: [
    "/((?!_next/|api/|.*\\..*|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
