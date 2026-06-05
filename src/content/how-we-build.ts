import type { IconName } from "@/components/site/icon";

export const principles: { icon: IconName; title: string; desc: string }[] = [
  { icon: "code", title: "Type-safe by default", desc: "TypeScript end to end catches whole classes of bugs before they ever reach a user." },
  { icon: "boxes", title: "Boring, proven tools", desc: "We choose stable, well-supported technology over hype, so your product ages well." },
  { icon: "gauge", title: "Performance budgets", desc: "Every page ships against a measurable budget. Fast isn't a phase; it's a constraint." },
  { icon: "accessibility", title: "Accessible to WCAG AA", desc: "Keyboard, contrast and screen-reader support are part of the definition of done." },
  { icon: "file", title: "Documented & owned", desc: "Clean, commented code and docs your team can extend, with zero lock-in." },
  { icon: "repeat", title: "Iterate on real usage", desc: "We ship small, measure, and improve based on how people actually use the product." },
];

/** Stack grouped by layer (real brand logos rendered via react-icons on the page). */
export const stackGroups: { name: string; items: { name: string; key: string }[] }[] = [
  {
    name: "Frontend",
    items: [
      { name: "Next.js", key: "nextjs" },
      { name: "React", key: "react" },
      { name: "TypeScript", key: "typescript" },
      { name: "Tailwind CSS", key: "tailwind" },
      { name: "Framer Motion", key: "framer" },
    ],
  },
  {
    name: "Mobile",
    items: [
      { name: "Flutter", key: "flutter" },
      { name: "React Native", key: "react" },
      { name: "iOS", key: "apple" },
      { name: "Android", key: "android" },
    ],
  },
  {
    name: "Backend & Data",
    items: [
      { name: "Node.js", key: "node" },
      { name: "PostgreSQL", key: "postgres" },
      { name: "MongoDB", key: "mongo" },
      { name: "Firebase", key: "firebase" },
      { name: "Cloudinary", key: "cloudinary" },
      { name: "REST & GraphQL", key: "graphql" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "Vercel", key: "vercel" },
      { name: "AWS", key: "aws" },
      { name: "Docker", key: "docker" },
      { name: "GitHub Actions", key: "github" },
    ],
  },
];

/** The disciplines that make a release safe: the pillars of "how we build". */
export const pillars: { icon: IconName; title: string; desc: string; points: string[] }[] = [
  {
    icon: "boxes",
    title: "Architecture",
    desc: "Systems designed to scale: clear boundaries, sensible data models and room to grow.",
    points: ["Modular, documented structure", "Sensible data modelling", "Designed for change"],
  },
  {
    icon: "shield",
    title: "Quality Assurance",
    desc: "Manual and automated testing across browsers and devices, so quality isn't a gamble.",
    points: ["Automated test suites", "Cross-device QA", "Regression coverage"],
  },
  {
    icon: "git-branch",
    title: "DevOps",
    desc: "CI/CD pipelines, containerisation and automation that make shipping routine and reversible.",
    points: ["CI/CD pipelines", "Containerised environments", "One-click rollbacks"],
  },
  {
    icon: "lock",
    title: "Security",
    desc: "Dependency hygiene, vulnerability scanning and least-privilege access from day one.",
    points: ["Dependency scanning", "Least-privilege access", "Regular patching"],
  },
  {
    icon: "gauge",
    title: "Performance",
    desc: "Core Web Vitals as a first-class requirement: measured, budgeted and protected.",
    points: ["Core Web Vitals budgets", "Edge caching & CDN", "Image & bundle optimization"],
  },
  {
    icon: "activity",
    title: "Observability",
    desc: "Monitoring, error tracking and alerting so we catch issues before your users do.",
    points: ["Uptime monitoring", "Error tracking", "Proactive alerting"],
  },
];
