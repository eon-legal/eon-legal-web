/**
 * Shared i18n helpers that are safe to import from Server and Client
 * Components. Kept dependency-free so the bundle impact is negligible
 * when used from the edge runtime.
 */

/**
 * Replaces `{key}` placeholders in a template string with the provided
 * values. Missing keys are left untouched so the template remains
 * debuggable when a translator forgets a substitution.
 */
export function interpolate(
  template: string,
  vars: Readonly<Record<string, string | number>>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = vars[key];
    return value === undefined ? match : String(value);
  });
}
