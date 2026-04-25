/**
 * Single source of truth for the 2026 extraordinary regularisation
 * campaign. Consumed by the top dispatch ribbon, the dedicated landing
 * block and the once-per-day modal so dates and identifiers stay in
 * sync across surfaces.
 */

export const REGULARIZACION_CAMPAIGN = {
  serviceId: "regularizacion-2026",
  anchorId: "regularizacion-2026",
  /** Application deadline. Noon UTC avoids timezone edge cases. */
  deadlineISO: "2026-06-30T12:00:00Z",
  /** Online filing opens. */
  onlineOpensISO: "2026-04-16T07:00:00Z",
  /** In-person attention starts (prior appointment required). */
  inPersonOpensISO: "2026-04-20T07:00:00Z",
} as const;

/**
 * Whole days remaining between `fromMs` and `targetISO`, clamped at 0.
 * `fromMs` is parameterised so callers can pass `Date.now()` from the
 * client without coupling the helper to wall-clock state.
 */
export function daysUntil(
  targetISO: string,
  fromMs: number = Date.now()
): number {
  const target = new Date(targetISO).getTime();
  const diff = Math.ceil((target - fromMs) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}
