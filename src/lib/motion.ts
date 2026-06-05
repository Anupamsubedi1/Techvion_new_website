import type { Variants, Transition, TargetAndTransition } from "framer-motion";

/**
 * Centralized motion language for Techvion.
 * Premium = short, expo-out easing, small travel, no perpetual loops.
 * Inspired by Stripe / Linear / Vercel: purposeful, calm, enterprise-grade.
 *
 * All consumers should pair these with `useReducedMotion` (see <Reveal/>),
 * so nothing animates for users who ask the OS to reduce motion.
 */

/* ----------------------------------------------------------------------------
 * Easing + transition tokens: one set, reused everywhere for consistency.
 * ------------------------------------------------------------------------- */
export const EASE_OUT_EXPO: Transition["ease"] = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

/** Standard reveal transition (scroll-in, hero, cards). */
export const transitionBase: Transition = { duration: 0.55, ease: EASE_OUT_EXPO };
/** Snappy transition for interactions (hover/tap, route changes). */
export const transitionSnappy: Transition = { duration: 0.3, ease: EASE_OUT_EXPO };
/** Soft spring for layout indicators (active nav dot, toggles). */
export const springSoft: Transition = { type: "spring", stiffness: 380, damping: 30 };

/* ----------------------------------------------------------------------------
 * Directional reveal variants: fade + small travel. Use `hidden` then `show`.
 * ------------------------------------------------------------------------- */
const travel = 20;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: travel },
  show: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -travel },
  show: { opacity: 1, y: 0, transition: transitionBase },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: travel },
  show: { opacity: 1, x: 0, transition: transitionBase },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -travel },
  show: { opacity: 1, x: 0, transition: transitionBase },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

/** Map a direction to its hidden/show variant, used by <Reveal/> & <RevealItem/>. */
export const directionVariants: Record<RevealDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  fade: fadeIn,
};

/* ----------------------------------------------------------------------------
 * Stagger container: orchestrates child reveal variants in sequence.
 * ------------------------------------------------------------------------- */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/* ----------------------------------------------------------------------------
 * Hero: orchestrated entrance on first paint (no scroll trigger).
 * The H1 itself is rendered statically for LCP; these drive the supporting bits.
 * ------------------------------------------------------------------------- */
export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

/** Subtle, slow vertical float for hero illustrations / floating cards. */
export const floatLoop: TargetAndTransition = {
  y: [0, -10, 0],
  transition: { duration: 6, ease: EASE_IN_OUT, repeat: Infinity },
};

/* ----------------------------------------------------------------------------
 * Interaction presets: attach to whileHover / whileTap (cards, icons, media).
 * Buttons use CSS transitions (cheaper for CWV); these are for motion elements.
 * ------------------------------------------------------------------------- */
export const hoverLift: TargetAndTransition = {
  y: -5,
  scale: 1.02,
  transition: transitionSnappy,
};

export const hoverZoom: TargetAndTransition = {
  scale: 1.04,
  transition: { duration: 0.5, ease: EASE_OUT_EXPO },
};

export const tapPress: TargetAndTransition = { scale: 0.98 };

/* ----------------------------------------------------------------------------
 * Page transitions: fade + slight upward motion, transform-only (no reflow).
 * ------------------------------------------------------------------------- */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.25, ease: EASE_OUT_EXPO } },
};

/* ----------------------------------------------------------------------------
 * Viewport config: animate once, just before the element is fully in view.
 * ------------------------------------------------------------------------- */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
