import type { IconName } from "@/components/site/icon";

/**
 * Reconciled, honest company metrics: one set used everywhere.
 * (Fixes the blueprint's contradictory-stats trust liability.)
 */
export const metrics: { value: number; suffix: string; label: string; note: string }[] = [
  { value: 20, suffix: "+", label: "Projects shipped", note: "Web, mobile & e-commerce" },
  { value: 100, suffix: "%", label: "Client satisfaction", note: "Across every engagement to date" },
  { value: 98, suffix: "%", label: "On-time delivery", note: "Predictable milestones, no surprises" },
  { value: 24, suffix: "h", label: "Response time", note: "Every weekday, guaranteed" },
];

/** Compact proof chips for hero / inline trust. */
export const trustChips: { icon: IconName; label: string }[] = [
  { icon: "rocket", label: "Founded 2024 · Remote-first" },
  { icon: "globe", label: "Worldwide delivery" },
  { icon: "shield", label: "100% quality-first delivery" },
];
