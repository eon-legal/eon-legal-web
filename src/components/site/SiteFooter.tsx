import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { serviceCategories } from "@/lib/data/services";

export function SiteFooter(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-6">
          <Link
            href="/"
            aria-label={`${siteConfig.name} — Inicio`}
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
            {siteConfig.tagline}
          </p>
          <dl className="space-y-2 text-sm">
            <div className="flex gap-3">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                Email
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
                Tel.
              </dt>
              <dd>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                Sede
              </dt>
              <dd className="text-foreground">
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Servicios" className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Servicios
          </h2>
          <ul className="space-y-2 text-sm">
            {serviceCategories.map((service) => (
              <li key={service.id}>
                <a
                  href={`#servicios`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {service.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Información legal" className="space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Información
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/aviso-legal"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Aviso legal
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Política de cookies
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-subtle md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono uppercase tracking-widest">
            {siteConfig.contact.region} · {siteConfig.contact.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
