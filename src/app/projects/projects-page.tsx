"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Big Sky Treks",
    stack: ["Next.js", "Tailwind", "SEO"],
    description: "Trekking platform with curated routes and clear trip discovery paths optimized for conversions.",
    outcome: "Improved trip discovery and engagement",
    category: "Travel",
    href: "https://bigskytreks.com/trekking",
    screenshot:
      "bigskytreks_website.jpg",
  },
    {
    title: "Himalaya Nepal Krishi Co. Ltd",
    stack: ["Next.js", "Tailwind", "Vercel"],
    description: "Corporate website for an agricultural company with clean layout, brand storytelling, and modern UX.",
    outcome: "Professional digital presence established",
    category: "Corporate",
    href: "https://hnkcl.com/",
    screenshot:
      "hnkcl_website.jpg",
  }, 
{
  title: "UNWINDCABINS",
  stack: ["React", "Tailwind", "Animations"],
  description: "A modern cabin booking website offering a relaxing user experience with smooth animations and clean design.",
  outcome: "Improved user engagement and booking conversions",
  category: "Hospitality",
  href: "https://your-unwindcabins-link.com/",
  screenshot: "unwinde_cambin_website.jpg",
}, 
  {
    title: "Mardi Treks",
    stack: ["Next.js", "Tailwind", "Vercel"],
    description: "Modern Next.js site for Mardi Himal treks with fast performance and seamless booking UX.",
    outcome: "Faster load times and better UX",
    category: "Travel",
    href: "https://new-mardi-treks.vercel.app/",
    screenshot:
      "mardi_treks_website.jpg",
  },
  {
    title: "QuickStay Hotel Booking",
    stack: ["React", "Node.js", "MongoDB"],
    description: "Hotel booking platform with real-time availability, seamless reservations, and responsive design.",
    outcome: "Streamlined booking experience",
    category: "Web App",
    href: "https://quick-stay-hotel-booking-website-fr.vercel.app/",
    screenshot:
      "quick_stay_website.jpg",
  },
  {
    title: "Connectify Chat App",
    stack: ["React", "Socket.io", "Node.js"],
    description: "Real-time chat application with instant messaging, user authentication, and a polished chat UI.",
    outcome: "Smooth real-time communication",
    category: "Web App",
    href: "",
    screenshot:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1400&q=80",
  },
];

const filters = ["All", "Travel", "Portfolio", "Web App", "Corporate"] as const;

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [revealedCount, setRevealedCount] = useState(0);
  const [animDone, setAnimDone] = useState(false);
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  /* Cascade animation: cards appear in groups (row by row) */
  useEffect(() => {
    if (animDone) return;
    if (revealedCount >= projects.length) {
      const t = setTimeout(() => setAnimDone(true), 600);
      return () => clearTimeout(t);
    }
    // First batch (0→3), then second batch (3→6)
    const isFirstCard = revealedCount === 0;
    const isBatchStart = revealedCount === 3;
    const delay = isFirstCard ? 800 : isBatchStart ? 900 : 250;
    const t = setTimeout(() => setRevealedCount((p) => p + 1), delay);
    return () => clearTimeout(t);
  }, [revealedCount, animDone]);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Projects We&apos;re Proud Of
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 max-w-xl text-base text-[#1F7A8C]"
          >
            Real client work. Real results. Every project built with care, craft, and a focus on outcomes.
          </motion.p>
        </div>
      </section>

      {/* Phase: cascade intro OR normal grid */}
      <AnimatePresence mode="wait">
        {!animDone ? (
          <motion.section
            key="cascade-intro"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="px-6 py-16"
          >
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {projects.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -40, scale: 0.9 }}
                    animate={
                      i < revealedCount
                        ? { opacity: 1, x: 0, scale: 1 }
                        : { opacity: 0, x: -40, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <div className="overflow-hidden rounded-xl border border-[#E1E5F2] bg-white shadow-lg">
                      <div className="relative overflow-hidden">
                        <img
                          src={p.screenshot}
                          alt={p.title}
                          className="h-32 w-full object-cover sm:h-36"
                        />
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md"
                        >
                          <ArrowUpRight className="h-3 w-3 text-[#022B3A]" />
                        </a>
                      </div>
                      <div className="p-3">
                        <h3 className="text-xs font-bold text-[#022B3A] sm:text-sm">{p.title}</h3>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {p.stack.slice(0, 2).map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-1.5 py-0.5 text-[9px] font-medium text-[#022B3A]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="grid-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-16"
          >
            <div className="mx-auto max-w-6xl">
              {/* Filter bar */}
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-lg px-4 py-1.5 text-sm font-semibold border transition-colors ${
                      filter === f
                        ? "border-[#022B3A] bg-[#022B3A] text-white"
                        : "border-[#E1E5F2] bg-white text-[#022B3A] hover:border-[#BFDBF7] hover:bg-[#E1E5F2]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Cards grid */}
              <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence>
                  {filtered.map((p, i) => (
                    <motion.div
                      layout
                      key={p.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, delay: i * 0.1 }}
                      className="group overflow-hidden rounded-xl border border-[#E1E5F2] bg-white transition-shadow hover:shadow-md"
                    >
                      {/* Screenshot */}
                      <div className="relative overflow-hidden">
                        <img
                          src={p.screenshot}
                          alt={`${p.title} screenshot`}
                          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#022B3A]/0 transition-colors duration-300 group-hover:bg-[#022B3A]/5" />
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100"
                        >
                          <ArrowUpRight className="h-4 w-4 text-[#022B3A]" />
                        </a>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-base font-bold text-[#022B3A]">{p.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#1F7A8C]">
                          {p.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-0.5 text-xs font-medium text-[#022B3A]"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 text-xs font-semibold text-[#1F7A8C]">
                          ✓ {p.outcome}
                        </div>
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F7A8C] transition-colors hover:text-[#022B3A]"
                        >
                          Visit Live Site <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

