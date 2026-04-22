import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

interface LegalPageLayoutProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly lastUpdated: string;
  readonly jsonLd?: ReadonlyArray<string>;
  readonly children: ReactNode;
}

/**
 * Shared layout for legal/compliance pages (aviso-legal, privacidad, cookies).
 * Renders SiteHeader, a monochrome hero, a prose-styled body container,
 * and SiteFooter. Optionally injects JSON-LD scripts above the main content.
 */
export function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated,
  jsonLd,
  children,
}: LegalPageLayoutProps): React.ReactElement {
  return (
    <>
      {jsonLd?.map((schema, index) => (
        <script
          key={`legal-jsonld-${index}`}
          type="application/ld+json"
          // SAFETY: JSON-LD is generated from trusted server-side sources
          // (siteConfig + typed page data).
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}
      <SiteHeader />
      <main id="main" className="flex-1">
        <section
          aria-labelledby="legal-page-heading"
          className="border-b border-border bg-surface"
        >
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-28 lg:px-10">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
                {eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1
                id="legal-page-heading"
                className="mt-8 font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-subtle">
                Última actualización · {lastUpdated}
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-label="Contenido legal"
          className="border-b border-border bg-background"
        >
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 lg:px-10">
            <Reveal>
              <div className="legal-prose">{children}</div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
