"use client"; // Reads wall-clock time on the client to render a live countdown.

import { useEffect, useState } from "react";
import { daysUntil } from "@/lib/data/regularizacion-campaign";
import { interpolate } from "@/lib/i18n/utils";

interface DaysUntilDeadlineProps {
  readonly deadlineISO: string;
  /** Sentence template containing `{count}` for `count > 1`. */
  readonly pluralTemplate: string;
  /** Sentence template containing `{count}` for `count === 1`. */
  readonly singularTemplate: string;
  /** Label rendered when 0 days remain. */
  readonly opensTodayLabel: string;
  readonly className?: string;
}

/**
 * Hydration-safe live countdown. Returns `null` on the server (and during the
 * first client render) so the static markup never carries a value that would
 * desync from the actual client clock. Once mounted, recomputes daily.
 */
export function DaysUntilDeadline({
  deadlineISO,
  pluralTemplate,
  singularTemplate,
  opensTodayLabel,
  className,
}: DaysUntilDeadlineProps): React.ReactElement | null {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    const compute = (): void => setDays(daysUntil(deadlineISO));
    compute();
    // Recompute every hour: a generous interval that still keeps the value
    // accurate around midnight without busy-looping the main thread.
    const id = window.setInterval(compute, 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, [deadlineISO]);

  if (days === null) return null;
  if (days === 0) return <span className={className}>{opensTodayLabel}</span>;
  const template = days === 1 ? singularTemplate : pluralTemplate;
  return (
    <span className={className}>{interpolate(template, { count: days })}</span>
  );
}
