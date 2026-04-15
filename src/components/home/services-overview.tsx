"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Code2, Globe, Megaphone, ShieldCheck, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Scalable, production-ready applications built for your exact business needs.",
    href: "/services/custom-software",
  },
  {
    icon: Globe,
    title: "Web & E-commerce",
    desc: "Fast, conversion-focused web experiences and modern online stores.",
    href: "/services/web-ecommerce",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    desc: "Data-driven strategies that grow traffic, leads, and revenue.",
    href: "/services/digital-marketing",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Ongoing monitoring, security, and performance optimization.",
    href: "/services/maintenance-support",
  },
];

/* Each card enters from a unique direction, sequentially */
const cardDirections = [
  { x: -120, y: 0 },   // left
  { x: 0, y: 80 },     // bottom
  { x: 0, y: 80 },     // bottom
  { x: 120, y: 0 },    // right
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    // Sequentially reveal: step 0 (left), step 1 (bottom-two), step 2 (right)
    const t0 = setTimeout(() => setStep(0), 400);
    const t1 = setTimeout(() => setStep(1), 1400);
    const t2 = setTimeout(() => setStep(2), 2400);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  const shouldShow = (i: number) => {
    if (i === 0) return step >= 0;
    if (i === 1 || i === 2) return step >= 1;
    if (i === 3) return step >= 2;
    return false;
  };

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
              What We Do
            </span>
            <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
              End-to-end digital solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#1F7A8C] transition-colors hover:text-[#022B3A] md:mt-0"
          >
            All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: cardDirections[i].x, y: cardDirections[i].y }}
              animate={
                shouldShow(i)
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: cardDirections[i].x, y: cardDirections[i].y }
              }
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={s.href}>
                <div className="group flex h-full flex-col rounded-xl border border-[#E1E5F2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#BFDBF7] hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E1E5F2] transition-colors group-hover:bg-[#022B3A]">
                    <s.icon className="h-5 w-5 text-[#1F7A8C] transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#022B3A]">{s.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#1F7A8C]">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#1F7A8C] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

