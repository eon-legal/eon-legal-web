import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  locales,
} from "@/lib/i18n/config";

/**
 * Next.js 16 Proxy (replaces middleware.ts).
 *
 * - Redirects non-www traffic to www for consistent canonical/hreflang.
 * - Honors an explicit `NEXT_LOCALE` cookie by redirecting to the localized
 *   path when the visitor lands on a path that does not match their chosen
 *   locale.
 *
 * Default-locale routing is handled by Next.js rewrites (next.config.ts)
 * which serve `/es/*` content at the site root without a locale prefix.
 */
export function proxy(request: NextRequest): NextResponse | undefined {
  const { hostname, pathname } = request.nextUrl;

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

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (!cookieLocale || !isLocale(cookieLocale)) return undefined;

  // If visitor's preferred locale is the default, strip any /${defaultLocale}
  // prefix and let rewrites serve content at the root.
  if (cookieLocale === defaultLocale) {
    if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
      const target = new URL(request.url);
      target.pathname = pathname.slice(defaultLocale.length + 1) || "/";
      return NextResponse.redirect(target, { status: 301 });
    }
    return undefined;
  }

  // Non-default cookie locale: send root or non-prefixed paths to the
  // /${locale}/... variant so the user always sees their preferred lang.
  const isAlreadyPrefixed = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (isAlreadyPrefixed) return undefined;

  const target = new URL(request.url);
  target.pathname = pathname === "/" ? `/${cookieLocale}` : `/${cookieLocale}${pathname}`;
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
