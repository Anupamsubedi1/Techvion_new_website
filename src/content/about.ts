import type { IconName } from "@/components/site/icon";

export const story = {
  eyebrow: "Our story",
  title: "A product studio built on disciplined engineering",
  paragraphs: [
    "Techvion was founded in 2024 to help teams turn complex, ambiguous requirements into reliable software that ships. We're remote-first, based in Kathmandu, and we work with founders and businesses worldwide.",
    "In two years we've grown into a trusted delivery partner across web, mobile and e-commerce, known for clarity, quality, and being the team that's still there after launch. Our approach is practical: understand the goal, build the right thing, and support it for the long run.",
  ],
};

export const values: { icon: IconName; title: string; text: string }[] = [
  { icon: "target", title: "Outcomes over output", text: "We optimise for the result that matters to your business, not lines of code or hours billed." },
  { icon: "eye", title: "Radical transparency", text: "Weekly updates, honest timelines, and no surprises. You always know where things stand." },
  { icon: "heart", title: "Product ownership", text: "We treat your product like our own, from architecture decisions to the details users feel." },
  { icon: "shield", title: "Built to last", text: "Clean, documented, type-safe code that your team can confidently extend for years." },
];

/**
 * The team. Avatars are deterministic DiceBear illustrations keyed by `seed`
 * (placeholder imagery, real names/photos can be dropped in later).
 */
export type TeamMember = {
  name: string;
  role: string;
  seed: string;
  bio: string;
};

export const team: TeamMember[] = [
  { name: "Aarav Sharma", role: "Founder & Lead Engineer", seed: "Aarav-Sharma", bio: "Sets the technical bar and architects every platform we ship." },
  { name: "Sita Gurung", role: "Product Designer", seed: "Sita-Gurung", bio: "Turns fuzzy ideas into clean, accessible, conversion-ready interfaces." },
  { name: "Bibek Thapa", role: "Full-Stack Engineer", seed: "Bibek-Thapa", bio: "Builds type-safe Next.js apps and the APIs that power them." },
  { name: "Anjali Rai", role: "Mobile App Developer", seed: "Anjali-Rai", bio: "Crafts smooth cross-platform Flutter and React Native experiences." },
  { name: "Rohan K.C.", role: "Digital Marketing Lead", seed: "Rohan-KC", bio: "Wires growth, SEO and paid campaigns to numbers that matter." },
  { name: "Priya Maharjan", role: "QA & Support Engineer", seed: "Priya-Maharjan", bio: "Keeps releases tested, fast and stable long after launch." },
];

/** Cross-functional disciplines: how every engagement is staffed. */
export const disciplines: { icon: IconName; title: string; desc: string }[] = [
  { icon: "compass", title: "Product & Strategy", desc: "Discovery, scoping and roadmapping that anchor every build to a clear goal." },
  { icon: "palette", title: "Design", desc: "Interface and experience design with accessibility and delight built in." },
  { icon: "code", title: "Engineering", desc: "Type-safe, full-stack delivery across web and mobile." },
  { icon: "shield", title: "QA & DevOps", desc: "Testing, CI/CD and monitoring that keep releases safe and fast." },
];

export const engagementModels: {
  icon: IconName;
  name: string;
  best: string;
  desc: string;
  points: string[];
}[] = [
  {
    icon: "package",
    name: "Fixed-scope project",
    best: "Best for a defined build",
    desc: "A clear scope, timeline and price, ideal when you know what you need.",
    points: ["Defined deliverables", "Milestone billing", "Fixed timeline"],
  },
  {
    icon: "users",
    name: "Dedicated team",
    best: "Best for ongoing product work",
    desc: "An embedded, cross-functional pod that works as an extension of your team.",
    points: ["Monthly engagement", "Full-stack pod", "Flexible roadmap"],
  },
  {
    icon: "infinity",
    name: "Care & maintenance",
    best: "Best for live products",
    desc: "Monitoring, security and improvements under a clear, predictable SLA.",
    points: ["24/7 monitoring", "<24h response", "Monthly retainer"],
  },
];
