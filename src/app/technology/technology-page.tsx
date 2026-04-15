"use client";
import { motion, useInView } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Bot,
  BrainCircuit,
  Building2,
  ClipboardCheck,
  CloudCog,
  CloudUpload,
  Code2,
  Gauge,
  GitBranch,
  Handshake,
  Link2,
  Network,
  Server,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import {
  SiAndroid,
  SiApple,
  SiCss3,
  SiDocker,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import { useRef, type ElementType } from "react";

type TechItem = {
  name: string;
  desc: string;
  icon: ElementType;
};

type TechCategory = {
  name: string;
  items: TechItem[];
};

const categories: TechCategory[] = [
  {
    name: "Custom Software Development",
    items: [
      { name: "Enterprise Applications", desc: "Business-specific systems for complex organizational workflows.", icon: Building2 },
      { name: "Internal Tools", desc: "Operational tools designed for team productivity and process control.", icon: Wrench },
      { name: "System Integrations", desc: "Connected software ecosystems for seamless data flow.", icon: Link2 },
    ],
  },
  {
    name: "Web Development",
    items: [
      { name: "HTML5", desc: "Semantic markup foundation for modern websites.", icon: SiHtml5 },
      { name: "CSS3", desc: "Responsive styling and layout for modern UI.", icon: SiCss3 },
      { name: "JavaScript", desc: "Core scripting language for dynamic web applications.", icon: SiJavascript },
      { name: "React", desc: "Component-based UI development for scalable frontends.", icon: SiReact },
      { name: "Next.js", desc: "Production framework for high-performance React applications.", icon: SiNextdotjs },
    ],
  },
  {
    name: "Mobile App Development",
    items: [
      { name: "Flutter", desc: "Cross-platform toolkit for high-quality mobile UI.", icon: SiFlutter },
      { name: "React Native", desc: "Cross-platform mobile framework built with React.", icon: SiReact },
      { name: "iOS", desc: "Native and cross-platform app delivery for Apple devices.", icon: SiApple },
      { name: "Android", desc: "Native and cross-platform app delivery for Android devices.", icon: SiAndroid },
    ],
  },
  {
    name: "Quality Assurance & Testing",
    items: [
      { name: "Manual Testing", desc: "Human-led testing for real-world behavior and UX validation.", icon: ClipboardCheck },
      { name: "Automated Testing", desc: "Repeatable test suites to maintain software reliability.", icon: Bot },
      { name: "Performance Testing", desc: "Load and speed validation for stable production releases.", icon: Gauge },
    ],
  },
  {
    name: "Cloud Computing Services",
    items: [
      { name: "Cloud Infrastructure", desc: "Scalable infrastructure setup and management in the cloud.", icon: CloudCog },
      { name: "Cloud Migration", desc: "Secure migration of workloads and services to cloud platforms.", icon: CloudUpload },
      { name: "Hosting Solutions", desc: "Managed hosting environments tailored to business needs.", icon: Server },
    ],
  },
  {
    name: "AI & Machine Learning",
    items: [
      { name: "AI Solutions", desc: "Applied AI to automate repetitive and intelligence-heavy tasks.", icon: Sparkles },
      { name: "Machine Learning", desc: "Model-driven solutions for prediction and optimization workflows.", icon: BrainCircuit },
      { name: "Process Automation", desc: "Automated business pipelines for speed and consistency.", icon: Workflow },
    ],
  },
  {
    name: "DevOps Services",
    items: [
      { name: "CI/CD Pipelines", desc: "Continuous integration and delivery for faster releases.", icon: GitBranch },
      { name: "Containerization", desc: "Portable and consistent runtime environments for applications.", icon: SiDocker },
      { name: "Automation", desc: "Operational automation to improve deployment speed and efficiency.", icon: Workflow },
    ],
  },
  {
    name: "API Development & Integration",
    items: [
      { name: "API Development", desc: "Secure and scalable API architecture for platform connectivity.", icon: Code2 },
      { name: "CRM Integration", desc: "Integration layers connecting software with CRM platforms.", icon: Handshake },
      { name: "ERP Integration", desc: "Data and workflow integration with ERP systems.", icon: Network },
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
            Our technology stack is aligned directly with our service offerings. Hover any technology badge for details.
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
                          <span className="inline-flex cursor-default items-center gap-1.5 rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-1 text-xs font-semibold text-[#022B3A] transition-colors hover:border-[#1F7A8C] hover:bg-[#BFDBF7]">
                            <item.icon className="h-3.5 w-3.5" />
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

