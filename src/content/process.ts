import type { IconName } from "@/components/site/icon";

/** The end-to-end engagement process (Home + How-we-build). */
export const processSteps: { icon: IconName; step: string; title: string; desc: string }[] = [
  { icon: "compass", step: "01", title: "Discover", desc: "We map your goals, users and constraints into a clear, costed plan before a line of code is written." },
  { icon: "pen-tool", step: "02", title: "Design", desc: "We craft the interface and architecture together, so the build is grounded in real decisions." },
  { icon: "code", step: "03", title: "Build", desc: "We ship in weekly, reviewable increments, with QA woven through, not bolted on." },
  { icon: "rocket", step: "04", title: "Launch", desc: "We deploy with confidence: performance budgets met, monitoring live, nothing left to chance." },
  { icon: "trending", step: "05", title: "Scale", desc: "We iterate on real usage and keep your product fast, secure and improving over time." },
];
