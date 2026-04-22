"use client";

import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

interface StaggerListProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly itemClassName?: string;
  readonly role?: string;
  readonly stagger?: number;
  readonly amount?: number;
  readonly distance?: number;
}

/**
 * Wraps a collection of children so they enter the viewport with a staggered
 * fade-in-up animation. Each direct child is wrapped in a `motion.li`.
 * Honors `prefers-reduced-motion`.
 */
export function StaggerList({
  children,
  className,
  itemClassName,
  role = "list",
  stagger = 0.08,
  amount = 0.15,
  distance = 20,
}: StaggerListProps): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <motion.ul
      role={role}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={container}
    >
      {childArray.map((child, index) => (
        <motion.li
          key={index}
          className={itemClassName}
          variants={item}
        >
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}
