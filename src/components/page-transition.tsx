"use client";
import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

/**
 * Route-change transition: fade + a slight upward motion.
 * Transform-only (opacity + y) so it never triggers layout shift,
 * and a no-op under prefers-reduced-motion.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
