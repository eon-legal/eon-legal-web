import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";

type ProcessStep = Dictionary["home"]["process"]["steps"][number];

interface ProcessSectionProps {
  readonly dict: Dictionary;
}

export function ProcessSection({
  dict,
}: ProcessSectionProps): React.ReactElement {
  const t = dict.home.process;
  return (
    <section
      id="proceso"
      aria-labelledby="process-heading"
      className="border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10">
        <Reveal>
          <header className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
              {t.eyebrow}
            </div>
            <h2
              id="process-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
            >
              {t.heading}
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted md:text-lg">
              {t.description}
            </p>
          </header>
        </Reveal>

        <StaggerList
          className="mt-16 grid gap-px bg-border md:grid-cols-3"
          itemClassName="flex flex-col gap-6 bg-surface p-8 md:p-10"
        >
          {t.steps.map((step) => (
            <ProcessStepItem key={step.index} step={step} />
          ))}
        </StaggerList>
      </div>
    </section>
  );
}


function ProcessStepItem({
  step,
}: {
  readonly step: ProcessStep;
}): React.ReactElement {
  return (
    <>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-sm font-medium text-foreground">
          {step.index}
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-subtle">
          {step.duration}
        </span>
      </div>
      <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="text-pretty text-sm leading-relaxed text-muted">
        {step.description}
      </p>
    </>
  );
}