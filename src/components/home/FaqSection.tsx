import { Reveal } from "@/components/ui/Reveal";
import { getHomeFaqs } from "@/lib/data/faqs";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

interface FaqSectionProps {
  readonly dict: Dictionary;
  readonly locale: Locale;
}

export function FaqSection({
  dict,
  locale,
}: FaqSectionProps): React.ReactElement {
  const t = dict.home.faq;
  const faqs = getHomeFaqs(locale);
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:px-10">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <header className="space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {t.eyebrow}
            </div>
            <h2
              id="faq-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
            >
              {t.heading}
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted">
              {t.description}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <dt className="text-lg font-medium leading-snug text-foreground md:text-xl">
                  {faq.question}
                </dt>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-sm text-subtle transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <dd className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted">
                {faq.answer}
              </dd>
            </details>
          ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
