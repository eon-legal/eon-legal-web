import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { siteConfig } from "@/lib/config";
import { type Locale, localizePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { interpolate } from "@/lib/i18n/utils";

interface SiteHeaderProps {
  readonly dict: Dictionary["site"];
  readonly locale: Locale;
}

export function SiteHeader({
  dict,
  locale,
}: SiteHeaderProps): React.ReactElement {
  const navLinks: ReadonlyArray<{ readonly href: string; readonly label: string }> = [
    { href: "#servicios", label: dict.header.nav.services },
    { href: "#proceso", label: dict.header.nav.process },
    { href: "#faq", label: dict.header.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link
          href={localizePath(locale, "/")}
          aria-label={interpolate(dict.header.homeAriaLabel, {
            brand: siteConfig.name,
          })}
          className="flex items-center gap-3"
        >
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={120}
            height={36}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav
          aria-label={dict.header.navAriaLabel}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            ariaLabel={dict.languageSwitcher.ariaLabel}
            options={dict.languageSwitcher.options}
          />
          <a
            href="#contacto"
            className="hidden h-10 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            {dict.header.cta}
            <span aria-hidden="true" className="font-mono text-xs">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
