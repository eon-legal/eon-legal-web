import { siteConfig } from "@/lib/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/es";
import { interpolate } from "@/lib/i18n/utils";

interface ReviewBadgeProps {
  readonly dict: Dictionary["site"]["common"];
  readonly variant?: "inline" | "stacked";
  readonly className?: string;
}

/**
 * Social proof badge showing the Google review score. Reads numeric data
 * from `siteConfig.rating` and all visible copy from the locale
 * dictionary so the component stays agnostic of the active language.
 */
export function ReviewBadge({
  dict,
  variant = "inline",
  className,
}: ReviewBadgeProps): React.ReactElement {
  const { value, count, bestRating, source, sourceUrl } = siteConfig.rating;
  const rounded = Math.round(value * 2) / 2;

  const label = interpolate(dict.reviewBadgeAriaLabel, {
    value,
    bestRating,
    source,
    count,
  });
  const caption = interpolate(dict.reviewBadgeSource, { source, count });

  return (
    <a
      href={sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "group inline-flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-foreground",
        variant === "stacked" ? "flex-col items-start gap-1 px-5 py-3" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Stars rounded={rounded} bestRating={bestRating} />
      <span
        className={[
          "flex items-baseline gap-2",
          variant === "stacked" ? "text-base" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="font-display font-semibold text-foreground">
          {value.toFixed(1)}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
          {caption}
        </span>
      </span>
    </a>
  );
}

interface StarsProps {
  readonly rounded: number;
  readonly bestRating: number;
}

function Stars({ rounded, bestRating }: StarsProps): React.ReactElement {
  const stars = Array.from({ length: bestRating }, (_, i) => i + 1);
  return (
    <span aria-hidden="true" className="flex items-center gap-0.5">
      {stars.map((position) => {
        const filled = position <= Math.floor(rounded);
        const half = !filled && position - 0.5 === rounded;
        return (
          <Star key={position} state={filled ? "full" : half ? "half" : "empty"} />
        );
      })}
    </span>
  );
}

function Star({
  state,
}: {
  readonly state: "full" | "half" | "empty";
}): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      className="text-foreground"
    >
      <defs>
        <linearGradient id={`star-${state}`} x1="0" x2="1" y1="0" y2="0">
          <stop
            offset={state === "half" ? "50%" : state === "full" ? "100%" : "0%"}
            stopColor="currentColor"
          />
          <stop
            offset={state === "half" ? "50%" : state === "full" ? "100%" : "0%"}
            stopColor="transparent"
          />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.7 5.47 6.05.88-4.38 4.27 1.03 6.02L10 15.3l-5.4 2.84 1.03-6.02L1.25 7.85l6.05-.88L10 1.5z"
        fill={`url(#star-${state})`}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
