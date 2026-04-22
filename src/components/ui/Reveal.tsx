"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AsElement = "div" | "section" | "li" | "article" | "header" | "aside";

interface RevealProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly className?: string;
  readonly as?: AsElement;
  readonly amount?: number;
  readonly distance?: number;
  readonly id?: string;
  readonly ariaLabelledby?: string;
}

/**
 * Viewport-triggered fade-in-up animation wrapper.
 * Honors `prefers-reduced-motion` automatically.
 * Pass `delay` (seconds) to stagger sibling entries manually.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  amount = 0.2,
  distance = 24,
  id,
  ariaLabelledby,
}: RevealProps): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
