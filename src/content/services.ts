import type { IconName } from "@/components/site/icon";

export type ServiceSummary = {
  slug: string;
  icon: IconName;
  name: string;
  tagline: string;
  summary: string;
  bullets: string[];
};

export type ServiceDetail = ServiceSummary & {
  eyebrow: string;
  title: string;
  intro: string;
  proof: { value: string; label: string }[];
  deliverables: { icon: IconName; title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  capabilities: string[];
  related: string[];
};

/** The core service pillars: one taxonomy across the whole site. */
export const serviceList: ServiceSummary[] = [
  {
    slug: "custom-software",
    icon: "code",
    name: "Custom Software",
    tagline: "Web apps, SaaS & internal tools",
    summary:
      "Production-grade web applications and internal platforms, engineered in TypeScript and built to scale with your business.",
    bullets: ["Next.js & React platforms", "APIs & system integrations", "Cloud-native architecture"],
  },
  {
    slug: "web-ecommerce",
    icon: "store",
    name: "Web & E-commerce",
    tagline: "Sites & storefronts that convert",
    summary:
      "Fast, accessible marketing sites and modern storefronts with frictionless checkout and measurable conversion.",
    bullets: ["Headless commerce", "Checkout optimization", "Core Web Vitals: green"],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    name: "Digital Marketing & SEO",
    tagline: "Growth you can measure",
    summary:
      "Technical SEO, content, and paid campaigns wired to analytics, so every rupee and dollar is accountable to a number.",
    bullets: ["Technical & on-page SEO", "Paid search & social", "Transparent reporting"],
  },
  {
    slug: "data-science-ai",
    icon: "cpu",
    name: "Data Science & AI",
    tagline: "Insights, predictions & intelligent automation",
    summary:
      "Transform raw data into actionable insights through analytics, machine learning, forecasting, and AI-powered solutions built around your business goals.",
    bullets: [
      "Predictive analytics & forecasting",
      "Machine learning models",
      "Business intelligence dashboards",
      "NLP & AI automation",
    ],
  },
  {
    slug: "maintenance-support",
    icon: "lifebuoy",
    name: "Maintenance & Support",
    tagline: "Keep it fast, secure & online",
    summary:
      "Proactive monitoring, security patching, and performance tuning under a clear SLA, so your product never goes stale.",
    bullets: ["24/7 uptime monitoring", "Security & dependency updates", "Performance tuning"],
  },
];

/** Broader capability set, surfaced on the Services index & How-we-build. */
export const capabilities: { icon: IconName; name: string; desc: string }[] = [
  { icon: "code", name: "Web Application Development", desc: "Production-grade web apps on Next.js, React and Node APIs." },
  { icon: "palette", name: "Website Design & Redesign", desc: "Modern, on-brand redesigns that lift trust and conversion." },
  { icon: "layers", name: "Responsive Web Design", desc: "Pixel-perfect, mobile-first layouts on every screen size." },
  { icon: "smartphone", name: "Mobile App Development", desc: "Cross-platform Flutter and React Native apps." },
  { icon: "store", name: "E-commerce Development", desc: "Storefronts with secure checkout and payment gateways." },
  { icon: "file", name: "Custom CMS", desc: "Headless CMS on Next.js API + MongoDB your team fully controls." },
  { icon: "plug", name: "WordPress Solutions", desc: "Custom themes, plugins and managed WordPress builds." },
  { icon: "search", name: "SEO Optimization", desc: "Technical and on-page SEO that earns durable rankings." },
  { icon: "megaphone", name: "Facebook & Social Ads", desc: "Targeted Meta campaigns measured against real outcomes." },
  { icon: "pen-tool", name: "Website Content Writing", desc: "Clear, persuasive copy that ranks and converts." },
  { icon: "cloud", name: "Web Hosting & Deployment", desc: "Fast, scalable hosting on Vercel with CI/CD built in." },
  { icon: "network", name: "Domain Registration", desc: "Domain setup, DNS and professional email routing handled." },
  { icon: "mail", name: "Google Workspace", desc: "Business email, Drive and collaboration set up right." },
  { icon: "building", name: "Microsoft 365 for Business", desc: "Microsoft 365 licensing, email and Teams configured for you." },
];

export const services: Record<string, ServiceDetail> = {
  "custom-software": {
    slug: "custom-software",
    icon: "code",
    name: "Custom Software",
    tagline: "Web apps, SaaS & internal tools",
    eyebrow: "Custom Software",
    title: "Software built for exactly how you work",
    summary:
      "Production-grade web applications and internal platforms, engineered in TypeScript and built to scale with your business.",
    intro:
      "From SaaS platforms to internal operations tools, we design and engineer software around your real workflows, not a template. Clean architecture, type-safe code, and a system you fully own.",
    bullets: ["Next.js & React platforms", "APIs & system integrations", "Cloud-native architecture"],
    proof: [
      { value: "95+", label: "Lighthouse performance target" },
      { value: "100%", label: "Source code ownership" },
      { value: "TS", label: "Type-safe, end to end" },
    ],
    deliverables: [
      { icon: "code", title: "Next.js & TypeScript", desc: "Type-safe, server-rendered apps with exceptional performance and DX." },
      { icon: "webhook", title: "APIs & integrations", desc: "Payment gateways, CRMs, ERPs and third-party services, cleanly connected." },
      { icon: "gauge", title: "Performance-first architecture", desc: "Code-splitting, edge caching and Core Web Vitals built in from day one." },
      { icon: "cloud", title: "Scalable infrastructure", desc: "Cloud-native deployments on Vercel, AWS or your platform of choice." },
      { icon: "file", title: "Clean, documented codebase", desc: "Maintainable code and docs your team can confidently extend." },
      { icon: "workflow", title: "End-to-end delivery", desc: "Discovery, design, build, QA and launch, handled as one team." },
    ],
    process: [
      { title: "Discover", desc: "Map goals, users and constraints into a clear technical plan." },
      { title: "Architect", desc: "Define the data model, stack and integration points." },
      { title: "Build", desc: "Ship in weekly, reviewable increments with QA throughout." },
      { title: "Launch & scale", desc: "Deploy, monitor, and iterate on real usage." },
    ],
    faqs: [
      { q: "Do we own the code?", a: "Yes, 100%. You get the full source, documentation and infrastructure access. No lock-in." },
      { q: "What stack do you build on?", a: "TypeScript everywhere: Next.js / React on the front end, Node.js services, and cloud-native deployment. We choose boring, proven tools." },
      { q: "Can you work with our existing team?", a: "Absolutely. We integrate into your repo, standards and rituals, or run end-to-end, whichever fits." },
    ],
    capabilities: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "REST & GraphQL", "AWS / Vercel"],
    related: ["web-ecommerce", "data-science-ai"],
  },
  "web-ecommerce": {
    slug: "web-ecommerce",
    icon: "store",
    name: "Web & E-commerce",
    tagline: "Sites & storefronts that convert",
    eyebrow: "Web & E-commerce",
    title: "Websites and stores engineered to convert",
    summary:
      "Fast, accessible marketing sites and modern storefronts with frictionless checkout and measurable conversion.",
    intro:
      "We design conversion-focused web experiences and headless storefronts: sub-second loads, frictionless checkout, and analytics wired in so you can see exactly what drives revenue.",
    bullets: ["Headless commerce", "Checkout optimization", "Core Web Vitals: green"],
    proof: [
      { value: "95+", label: "Lighthouse performance target" },
      { value: "AA", label: "WCAG accessibility standard" },
      { value: "<1s", label: "Time-to-interactive target" },
    ],
    deliverables: [
      { icon: "boxes", title: "Headless commerce", desc: "Decoupled storefronts for flexibility, speed and omnichannel reach." },
      { icon: "zap", title: "Checkout optimization", desc: "Low-friction purchase flows that reduce cart abandonment." },
      { icon: "chart", title: "Analytics & insights", desc: "Funnels, events and revenue attribution wired in from launch." },
      { icon: "plug", title: "Payment integrations", desc: "Stripe, PayPal, eSewa/Khalti and more, secure and PCI-aware." },
      { icon: "package", title: "Inventory & orders", desc: "Real-time stock, automated order workflows and fulfilment hooks." },
      { icon: "smartphone", title: "Mobile-first design", desc: "Built for the 70%+ of shoppers who arrive on a phone." },
    ],
    process: [
      { title: "Discover", desc: "Understand catalogue, audience and conversion goals." },
      { title: "Design", desc: "Craft the storefront, PDP and checkout journeys." },
      { title: "Build", desc: "Engineer the headless storefront and integrations." },
      { title: "Optimize", desc: "Measure, A/B test and lift conversion post-launch." },
    ],
    faqs: [
      { q: "Which platforms do you use?", a: "Headless Next.js storefronts with Shopify, Medusa or a custom backend, chosen to fit your catalogue and budget." },
      { q: "Can you migrate our existing store?", a: "Yes. We migrate products, content, SEO and redirects carefully to preserve rankings and revenue." },
      { q: "Do you handle payments for Nepal and abroad?", a: "We integrate local gateways (eSewa, Khalti) and global ones (Stripe, PayPal) depending on your markets." },
    ],
    capabilities: ["Next.js", "Shopify / Headless", "Stripe", "Tailwind", "Vercel", "Analytics"],
    related: ["custom-software", "digital-marketing"],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    icon: "megaphone",
    name: "Digital Marketing & SEO",
    tagline: "Growth you can measure",
    eyebrow: "Digital Marketing & SEO",
    title: "Marketing that's accountable to a number",
    summary:
      "Technical SEO, content, and paid campaigns wired to analytics, so every rupee and dollar is accountable to a number.",
    intro:
      "We treat marketing like engineering: instrument everything, test relentlessly, and report transparently. SEO foundations, content that ranks, and paid campaigns tied directly to pipeline.",
    bullets: ["Technical & on-page SEO", "Paid search & social", "Transparent reporting"],
    proof: [
      { value: "Data", label: "Every decision instrumented" },
      { value: "ROI", label: "Tied to revenue, not vanity" },
      { value: "Weekly", label: "Transparent reporting cadence" },
    ],
    deliverables: [
      { icon: "search", title: "SEO & SEM", desc: "Technical audits, keyword strategy, on-page optimization and paid search." },
      { icon: "megaphone", title: "Paid social", desc: "Targeted campaigns across Meta, LinkedIn and TikTok." },
      { icon: "file", title: "Content marketing", desc: "Articles, case studies and landing pages that build authority and rank." },
      { icon: "mail", title: "Email & lifecycle", desc: "Automated nurture sequences and newsletters that convert." },
      { icon: "chart", title: "Analytics & reporting", desc: "Dashboards tracking clicks, conversions and revenue attribution." },
      { icon: "trending", title: "Conversion optimization", desc: "A/B testing and UX improvements that turn traffic into customers." },
    ],
    process: [
      { title: "Audit", desc: "Benchmark current performance and find the biggest levers." },
      { title: "Plan", desc: "Set targets, channels and a measurable roadmap." },
      { title: "Execute", desc: "Ship campaigns, content and on-page fixes." },
      { title: "Report & iterate", desc: "Review results weekly and double down on what works." },
    ],
    faqs: [
      { q: "How do you report results?", a: "A live dashboard plus a weekly written summary: traffic, leads, conversions and cost per outcome. No black boxes." },
      { q: "How soon will we see SEO results?", a: "Technical and on-page wins land in weeks; durable organic growth typically compounds over 3–6 months." },
      { q: "Do you require long contracts?", a: "No. We work in clear monthly engagements you can adjust as results come in." },
    ],
    capabilities: ["Technical SEO", "Google Ads", "Meta Ads", "GA4", "Content", "CRO"],
    related: ["data-science-ai", "web-ecommerce"],
  },
  "maintenance-support": {
    slug: "maintenance-support",
    icon: "lifebuoy",
    name: "Maintenance & Support",
    tagline: "Keep it fast, secure & online",
    eyebrow: "Maintenance & Support",
    title: "Your product, kept fast, secure and online",
    summary:
      "Proactive monitoring, security patching, and performance tuning under a clear SLA, so your product never goes stale.",
    intro:
      "Launch is the start, not the finish. We monitor uptime, patch vulnerabilities, tune performance and ship small improvements, under a transparent SLA with a real human on the other end.",
    bullets: ["24/7 uptime monitoring", "Security & dependency updates", "Performance tuning"],
    proof: [
      { value: "99.9%", label: "Uptime monitoring target" },
      { value: "<24h", label: "Response time on issues" },
      { value: "SLA", label: "Clear, written commitments" },
    ],
    deliverables: [
      { icon: "activity", title: "24/7 monitoring", desc: "Uptime, error tracking and alerting that catch issues before users do." },
      { icon: "lock", title: "Security updates", desc: "Dependency updates, vulnerability scanning and patch management." },
      { icon: "gauge", title: "Performance tuning", desc: "Ongoing audits, query and caching optimizations to stay fast." },
      { icon: "bug", title: "Bug fixes & patches", desc: "Fast turnaround with documented fixes and regression testing." },
      { icon: "sparkles", title: "Feature enhancements", desc: "Iterative improvements that keep your product competitive." },
      { icon: "database", title: "Backups & recovery", desc: "Automated backups and a tested disaster-recovery plan." },
    ],
    process: [
      { title: "Onboard", desc: "Audit the codebase, infra and risks; set up monitoring." },
      { title: "Stabilize", desc: "Fix urgent issues and lock down security." },
      { title: "Maintain", desc: "Monitor, patch and report on a regular cadence." },
      { title: "Improve", desc: "Ship incremental enhancements as priorities shift." },
    ],
    faqs: [
      { q: "What's your response time?", a: "Under 24 hours on standard issues every weekday, with faster tiers available for critical systems." },
      { q: "Can you take over a project you didn't build?", a: "Yes. We start with an audit, document what we find, and stabilize before maintaining." },
      { q: "How is this billed?", a: "A simple monthly retainer sized to your product, with clear inclusions and no surprise invoices." },
    ],
    capabilities: ["Monitoring", "CI/CD", "Security", "Backups", "Performance", "On-call"],
    related: ["custom-software", "web-ecommerce"],
  },
  "data-science-ai": {
    slug: "data-science-ai",
    icon: "cpu",
    name: "Data Science & AI",
    tagline: "Insights, predictions & intelligent automation",
    eyebrow: "Data Science & AI",
    title: "Turn your data into decisions and automation",
    summary:
      "Transform raw data into actionable insights through analytics, machine learning, forecasting, and AI-powered solutions built around your business goals.",
    intro:
      "Most businesses sit on data they never use. We turn it into an advantage: dashboards that surface what matters, models that predict what's next, and AI that automates the busywork, all built around your goals, not a demo.",
    bullets: [
      "Predictive analytics & forecasting",
      "Machine learning models",
      "Business intelligence dashboards",
      "NLP & AI automation",
    ],
    proof: [
      { value: "ML", label: "Custom models on your data" },
      { value: "Live", label: "Dashboards on real data" },
      { value: "ROI", label: "Tied to business outcomes" },
    ],
    deliverables: [
      { icon: "trending", title: "Predictive analytics & forecasting", desc: "Demand, revenue and churn models so you can plan on data instead of gut feel." },
      { icon: "cpu", title: "Machine learning models", desc: "Custom classification, recommendation and scoring models trained on your own data." },
      { icon: "chart", title: "BI dashboards", desc: "Live business-intelligence dashboards that turn scattered data into one clear view." },
      { icon: "message", title: "NLP & language AI", desc: "Chatbots, document parsing and sentiment analysis powered by modern LLMs." },
      { icon: "workflow", title: "AI-powered automation", desc: "Automate repetitive decisions and workflows so your team focuses on higher-value work." },
      { icon: "database", title: "Data pipelines & engineering", desc: "Reliable pipelines that collect, clean and store data ready for analysis." },
    ],
    process: [
      { title: "Discover", desc: "Understand your goals, data sources and the decisions you want to improve." },
      { title: "Prepare", desc: "Collect, clean and structure data into a reliable foundation." },
      { title: "Model", desc: "Build, train and validate models or dashboards against real outcomes." },
      { title: "Deploy & monitor", desc: "Ship to production, track accuracy and refine as your data grows." },
    ],
    faqs: [
      { q: "Do we need a lot of data to start?", a: "Not always. We assess what you already have; many early wins come from analytics and dashboards on existing data, with ML layered in as the dataset grows." },
      { q: "Can you add AI to our existing product?", a: "Yes. We integrate models, LLM features and automation into your current app and workflows, rather than making you rip and replace." },
      { q: "Which AI and ML tools do you use?", a: "Proven tooling, Python, scikit-learn, PyTorch and modern LLM APIs, chosen to fit the problem, your budget and your data-privacy needs." },
    ],
    capabilities: ["Python", "Machine Learning", "LLMs & NLP", "Forecasting", "BI Dashboards", "Data Pipelines"],
    related: ["custom-software", "digital-marketing"],
  },
};

export const serviceSlugs = Object.keys(services);
