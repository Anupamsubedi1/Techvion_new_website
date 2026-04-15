"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Big Sky Treks",
    subtitle: "Adventure Travel Platform",
    description:
      "A streamlined trekking platform with curated routes, itinerary management, and trip discovery — built for peak performance.",
    stack: ["Next.js", "Tailwind CSS", "SEO"],
    href: "https://bigskytreks.com/trekking",
    screenshot:
      "bigskytreks_website.jpg",
  },
  {
    title: "Himalayan Krisihi Company Nepal",
    subtitle: "Multivendor E-commerce for Agriculture",
    description:
      "A modern multivendor e-commerce platform for Nepal’s agriculture market, connecting farmers and buyers with a seamless experience.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://hnkcl.com/",
    screenshot:
      "hnkcl_website.jpg",
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-[#E1E5F2]/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">
              Recent Work
            </span>
            <h2 className="mt-1.5 text-3xl font-bold text-[#022B3A] md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#1F7A8C] transition-colors hover:text-[#022B3A] md:mt-0"
          >
            View all projects
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-[#E1E5F2] bg-white transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.screenshot}
                  alt={p.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#022B3A]/0 transition-colors duration-300 group-hover:bg-[#022B3A]/5" />
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 opacity-0 shadow transition-all duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#022B3A]" />
                </a>
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1F7A8C]">
                  {p.subtitle}
                </span>
                <h3 className="mt-1 text-lg font-bold text-[#022B3A]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1F7A8C]">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-0.5 text-xs font-medium text-[#022B3A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#022B3A] transition-colors hover:text-[#1F7A8C]"
                >
                  Visit Live Site
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

