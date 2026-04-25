"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactElement } from "react";
import { trackEvent } from "@/lib/firebase/analytics";

interface TrackedExternalLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  readonly eventName: string;
  readonly eventParams?: Readonly<Record<string, unknown>>;
}

/**
 * Anchor element that fires an Analytics event on click. Used for outbound
 * `tel:`, `mailto:` and `https://wa.me/...` links so that server components
 * (SiteFooter, ContactSection) can keep their RSC nature while still
 * surfacing per-CTA metrics. The event is gated on consent inside
 * `trackEvent`, so calls before acceptance are silently dropped.
 */
export function TrackedExternalLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...rest
}: TrackedExternalLinkProps): ReactElement {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    void trackEvent(eventName, eventParams);
    onClick?.(event);
  };

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
