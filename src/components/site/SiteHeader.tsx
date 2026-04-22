import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

interface NavLink {
  readonly href: string;
  readonly label: string;
}

const navLinks: readonly NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
] as const;

export function SiteHeader(): React.ReactElement {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Inicio`}
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
          aria-label="Navegación principal"
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

        <a
          href="#contacto"
          className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Consulta inicial
          <span aria-hidden="true" className="font-mono text-xs">
            →
          </span>
        </a>
      </div>
    </header>
  );
}
