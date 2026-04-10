"use client";
import { motion, useInView } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRef } from "react";

const categories = [
  {
    name: "Frontend",
    items: [
      { name: "Next.js", desc: "React framework for production-grade apps." },
      { name: "React", desc: "Component-driven UI library." },
      { name: "TypeScript", desc: "Type-safe JavaScript for reliability." },
      { name: "Tailwind CSS", desc: "Utility-first styling with design tokens." },
      { name: "Framer Motion", desc: "Animations and micro-interactions." },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", desc: "Scalable JavaScript runtime." },
      { name: "Express", desc: "Minimal backend framework." },
      { name: "NestJS", desc: "Enterprise-grade Node framework." },
      { name: "Serverless", desc: "Event-driven, cost-efficient APIs." },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", desc: "Relational database for reliability." },
      { name: "MongoDB", desc: "Flexible document database." },
      { name: "Planetscale", desc: "Serverless MySQL platform." },
      { name: "Redis", desc: "High-speed caching." },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "Docker", desc: "Containerization for consistent deployments." },
      { name: "Kubernetes", desc: "Container orchestration at scale." },
      { name: "Vercel", desc: "Edge hosting and CI/CD." },
      { name: "Cloudflare", desc: "Performance and security at the edge." },
    ],
  },
  {
    name: "Marketing Tools",
    items: [
      { name: "GA4", desc: "Advanced analytics and insights." },
      { name: "Search Console", desc: "SEO diagnostics and indexing." },
      { name: "Hotjar", desc: "Behavior analytics and heatmaps." },
      { name: "Meta Ads", desc: "Performance marketing campaigns." },
    ],
  },
  {
    name: "Business Tools",
    items: [
      { name: "Stripe", desc: "Payments and subscriptions." },
      { name: "HubSpot", desc: "CRM and marketing automation." },
      { name: "Zapier", desc: "No-code automation." },
      { name: "Notion", desc: "Knowledge management and docs." },
    ],
  },
  {
    name: "UI/UX",
    items: [
      { name: "Figma", desc: "Design systems and prototyping." },
      { name: "Radix UI", desc: "Accessible UI primitives." },
      { name: "shadcn/ui", desc: "Modern component library." },
    ],
  },
  {
    name: "Branding",
    items: [
      { name: "Color Systems", desc: "Accessible and consistent palettes." },
      { name: "Design Tokens", desc: "Systemized UI foundations." },
      { name: "Logo Suites", desc: "Versatile brand identity assets." },
    ],
  },
];

export function TechnologyPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-28 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]"
          >
            Our Stack
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Technology We Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-base text-[#1F7A8C]"
          >
            Our stack blends modern frameworks with robust cloud tooling for speed, reliability, and scale. Hover any badge for details.
          </motion.p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl" ref={gridRef}>
          <TooltipProvider>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: [0, -5, 0],
                        }
                      : { opacity: 0, y: 20 }
                  }
                  transition={
                    isInView
                      ? {
                          opacity: { duration: 0.6, delay: i * 0.1 },
                          y: {
                            duration: 5,
                            delay: i * 0.6,
                            repeat: Infinity,
                            repeatType: "mirror" as const,
                            ease: [0.45, 0.05, 0.55, 0.95],
                          },
                        }
                      : { duration: 0.6 }
                  }
                  className="rounded-xl border border-[#E1E5F2] bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#1F7A8C]">
                    {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                          <span className="cursor-default rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-1 text-xs font-semibold text-[#022B3A] transition-colors hover:border-[#1F7A8C] hover:bg-[#BFDBF7]">
                            {item.name}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="border-[#BFDBF7] bg-[#022B3A] text-white">
                          {item.desc}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </section>
    </div>
  );
}

