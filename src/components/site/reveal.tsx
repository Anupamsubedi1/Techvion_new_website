"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type TargetAndTransition } from "framer-motion";
import { EASE_OUT_EXPO, viewportOnce, type RevealDirection } from "@/lib/motion";

/** Compute the hidden state for a given reveal direction + travel distance. */
function hiddenFor(direction: RevealDirection, dist: number): TargetAndTransition {
  switch (direction) {
    case "down":
      return { opacity: 0, y: -dist };
    case "left":
      return { opacity: 0, x: dist };
    case "right":
      return { opacity: 0, x: -dist };
    case "scale":
      return { opacity: 0, scale: 0.96 };
    case "fade":
      return { opacity: 0 };
    case "up":
    default:
      return { opacity: 0, y: dist };
  }
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Direction of travel (default "up"). Enables fade-up/down/left/right/scale/fade. */
  direction?: RevealDirection;
  /** Travel distance in px (default 18). */
  y?: number;
  /** Delay in seconds. */
  delay?: number;
  /** Duration in seconds (default 0.55). */
  duration?: number;
  as?: "div" | "section" | "span" | "li" | "ul" | "article" | "header";
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Scroll-reveal wrapper. Animates once on enter; collapses to a no-op
 * (instant, no transform) when the user prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  y = 18,
  delay = 0,
  duration = 0.55,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return (
      <MotionTag className={className} {...rest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={hiddenFor(direction, y)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered group: children should be <RevealItem/>. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  y = 18,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  y?: number;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: hiddenFor(direction, y),
        show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
      }}
    >
      {children}
    </MotionTag>
  );
}
