import { Reveal } from "@/components/ui/Reveal";
import { StaggerList } from "@/components/ui/StaggerList";

interface ProcessStep {
  readonly index: string;
  readonly title: string;
  readonly description: string;
  readonly duration: string;
}

const steps: readonly ProcessStep[] = [
  {
    index: "01",
    title: "Consulta y diagnóstico",
    description:
      "Analizamos tu situación migratoria, documentos disponibles y objetivos. Al final recibes un informe escrito con la vía legal recomendada y sus plazos realistas.",
    duration: "45 min",
  },
  {
    index: "02",
    title: "Estrategia documental",
    description:
      "Coordinamos la obtención, traducción jurada y apostilla de la documentación. Preparamos el expediente listo para presentación con cada requisito verificado.",
    duration: "2–6 semanas",
  },
  {
    index: "03",
    title: "Presentación y seguimiento",
    description:
      "Presentamos telemáticamente ante la Administración y monitorizamos el expediente hasta la resolución. Respondemos requerimientos y recurrimos si procede.",
    duration: "Hasta resolución",
  },
] as const;

export function ProcessSection(): React.ReactElement {
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
              Cómo trabajamos
            </div>
            <h2
              id="process-heading"
              className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl"
            >
              Un proceso claro, sin ambigüedades.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted md:text-lg">
              Trabajamos por hitos verificables. En cada fase sabes qué
              documento tienes, qué firma falta y cuánto queda hasta el
              siguiente paso.
            </p>
          </header>
        </Reveal>

        <StaggerList
          className="mt-16 grid gap-px bg-border md:grid-cols-3"
          itemClassName="flex flex-col gap-6 bg-surface p-8 md:p-10"
        >
          {steps.map((step) => (
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