import type { IconName } from "@/components/site/icon";

/** The end-to-end engagement process (Home + How-we-build). */
export const processSteps: { icon: IconName; step: string; title: string; desc: string }[] = [
  { icon: "compass", step: "01", title: "Discover", desc: "We map your goals, users and constraints into a clear, costed plan before a line of code is written." },
  { icon: "pen-tool", step: "02", title: "Design", desc: "We craft the interface and architecture together, so the build is grounded in real decisions." },
  { icon: "code", step: "03", title: "Build", desc: "We ship in weekly, reviewable increments, with QA woven through, not bolted on." },
  { icon: "rocket", step: "04", title: "Launch", desc: "We deploy with confidence: performance budgets met, monitoring live, nothing left to chance." },
  { icon: "trending", step: "05", title: "Scale", desc: "We iterate on real usage and keep your product fast, secure and improving over time." },
];

/**
 * Detailed, client-facing engagement journey: the step-by-step timeline on the
 * home page. Descriptions are kept short, plain and confident.
 *
 * `image` is optional: add a path like "/process/01.jpg" (drop the file in
 * /public/process) and that step shows the photo; otherwise it falls back to a
 * clean icon panel. Use only properly-licensed images (e.g. Pixabay/Unsplash).
 */
export const journeySteps: { num: string; icon: IconName; title: string; desc: string; image?: string }[] = [
  {
    num: "01",
    icon: "headset",
    image: "/process/01-consultation.jpg",
    title: "Consultation",
    desc: "It starts with a free call within 24 hours. We get to know your vision, goals and audience so we can shape a solution that truly fits your business.",
  },
  {
    num: "02",
    icon: "file",
    image: "/process/02-proposal.jpg",
    title: "Proposal",
    desc: "Within 48 hours you get a clear proposal covering timeline, transparent pricing, scope and milestones, with every detail explained so you can move forward with confidence.",
  },
  {
    num: "03",
    icon: "palette",
    image: "/process/03-design.jpg",
    title: "Design your vision",
    desc: "We turn your ideas into polished mockups and wireframes so you can see the product before we build it, with 2–3 rounds of revisions until it feels exactly right.",
  },
  {
    num: "04",
    icon: "code",
    image: "/process/04-development.jpg",
    title: "Development",
    desc: "Our engineers build the approved designs into a fast, reliable product, with weekly demo links and milestone check-ins so you're always in the loop.",
  },
  {
    num: "05",
    icon: "check",
    image: "/process/05-testing.jpg",
    title: "Testing & QA",
    desc: "We test on every device, browser and screen size, fine-tuning speed, tightening security and fixing bugs, so your launch is flawless from day one.",
  },
  {
    num: "06",
    icon: "rocket",
    image: "/process/06-launch.jpg",
    title: "Launch & continued support",
    desc: "We handle the whole launch, including domain, hosting, SSL and final tweaks, then support you for 30 days with any changes, questions or training you need.",
  },
];
