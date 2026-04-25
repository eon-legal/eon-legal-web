import Image from "next/image";
import Link from "next/link";
import { TrackedExternalLink } from "@/components/site/TrackedExternalLink";
import { siteConfig } from "@/lib/config";
import { getServices } from "@/lib/data/services";
import { type Locale, localizePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { interpolate } from "@/lib/i18n/utils";

interface SiteFooterProps {
  readonly dict: Dictionary["site"];
  readonly locale: Locale;
}

export function SiteFooter({
  dict,
  locale,
}: SiteFooterProps): React.ReactElement {
  const year = new Date().getFullYear();
  const services = getServices(locale);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-6">
          <Link
            href={localizePath(locale, "/")}
            aria-label={interpolate(dict.header.homeAriaLabel, {
              brand: siteConfig.name,
            })}
            className="inline-flex"
          >
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={140}
              height={42}
              className="h-8 w-auto"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {dict.brand.tagline}
          </p>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {dict.footer.labels.email}
              </dt>
              <dd>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {dict.footer.labels.phone}
              </dt>
              <dd>
                <TrackedExternalLink
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  eventName="phone_click"
                  eventParams={{ location: "footer" }}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.phone}
                </TrackedExternalLink>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                {dict.footer.labels.office}
              </dt>
              <dd className="text-foreground">
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </dd>
            </div>
          </dl>
        </div>

        <nav
          aria-labelledby="footer-services-heading"
          className="space-y-4"
        >
          <p
            id="footer-services-heading"
            className="font-mono text-xs uppercase tracking-widest text-subtle"
          >
            {dict.footer.servicesHeading}
          </p>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={localizePath(locale, `/servicios/${service.id}`)}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-info-heading" className="space-y-4">
          <p
            id="footer-info-heading"
            className="font-mono text-xs uppercase tracking-widest text-subtle"
          >
            {dict.footer.infoHeading}
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={localizePath(locale, "/aviso-legal")}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {dict.footer.links.legal}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "/privacidad")}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {dict.footer.links.privacy}
              </Link>
            </li>
            <li>
              <Link
                href={localizePath(locale, "/cookies")}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {dict.footer.links.cookies}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-subtle md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {year} {siteConfig.name}. {dict.footer.copyright}
          </p>
          <p className="font-mono uppercase tracking-widest">
            {siteConfig.contact.region} · {siteConfig.contact.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
