"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const websiteProjects = [
  {
    title: "Big Sky Treks",
    stack: ["Next.js", "Tailwind", "SEO"],
    description: "Trekking platform with curated routes and clear trip discovery paths optimized for conversions.",
    outcome: "Improved trip discovery and engagement",
    category: "Travel",
    href: "https://bigskytreks.com/",
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
      "hnkcl_website.png",
  },
  {
    title: "UNWINDCABINS",
    stack: ["React", "Tailwind", "Animations"],
    description: "A modern cabin booking website offering a relaxing user experience with smooth animations and clean design.",
    outcome: "Improved user engagement and booking conversions",
    category: "Hospitality",
    href: "https://unwindcabins.netlify.app/",
    screenshot: "unwinde_cambin_website.jpg",
  },
  {
    title: "Mardi Treks",
    stack: ["Next.js", "Tailwind", "Vercel"],
    description: "Modern Next.js site for Mardi Himal treks with fast performance and seamless booking UX.",
    outcome: "Faster load times and better UX",
    category: "Travel",
    href: "https://marditreks.com/",
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
  title: "Kapada",
  stack: ["React", "Node.js", "MongoDB"],
  description: "An e-commerce platform for a clothing brand, featuring a modern product catalog, real-time inventory updates, secure checkout, and a fully responsive shopping experience.",
  outcome: "Enhances customer engagement and simplifies the online shopping journey with a smooth and intuitive interface.",
  category: "Web App",
  href: "https://kapada-frontend.vercel.app/",
  screenshot: "kapada_website.jpg",
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

const mobileProjects = [
  {
    title: "HamroBike",
    stack: ["Flutter", "Firebase", "Clean Architecture"],
    description: "Specialized Nepali two-wheeler marketplace with real-time chat and location-aware discovery.",
    screenshots: ["/mobile%20app%20one/image.png", "/mobile%20app%20one/image1.png"],
  },
  {
    title: "Weather App",
    stack: ["Flutter", "Riverpod", "Clean Architecture"],
    description: "Real-time weather experience built for smooth performance and clean, modern UI.",
    screenshots: [
      "/mobile%20app%20two/image.png",
      "/mobile%20app%20two/image%201.png",
      "/mobile%20app%20two/image%202.png",
    ],
  },
  {
    title: "VPN App UI",
    stack: ["Flutter", "Responsive UI", "Modern UX"],
    description: "Minimal, intuitive VPN interface focused on clarity, speed, and premium usability.",
    screenshots: ["/mobile%20app%20threee/image.png", "/mobile%20app%20threee/image%201.png"],
  },
  {
    title: "Video Player App",
    stack: ["Flutter", "PiP", "Local Media"],
    description: "Feature-rich local video player with customizable controls and multitasking playback.",
    screenshots: ["/mobile%20app%20four/image.png", "/mobile%20app%20four/image%201.png"],
  },
];

const websiteFilters = ["All", "Travel", "Hospitality", "Web App", "Corporate"] as const;
const projectViews = ["Websites", "Mobile Apps"] as const;

type MobileProject = (typeof mobileProjects)[number];

function MobileProjectCard({ project }: { project: MobileProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const lastIndex = project.screenshots.length - 1;

  const slideLeft = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === 0 ? lastIndex : prev - 1));
  };

  const slideRight = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === lastIndex ? 0 : prev + 1));
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(event.targetTouches[0].clientX);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 45) slideLeft();
    if (swipeDistance < -45) slideRight();
  };

  return (
    <article className="overflow-hidden rounded-xl border border-[#E1E5F2] bg-white transition-shadow hover:shadow-md">
      <div
        className="relative h-[420px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={`${project.title}-${activeIndex}`}
            src={project.screenshots[activeIndex]}
            alt={`${project.title} screenshot ${activeIndex + 1}`}
            initial={{ x: direction === 1 ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction === 1 ? "100%" : "-100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-[420px] w-full object-cover"
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={slideLeft}
          aria-label={`Previous screenshot for ${project.title}`}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#022B3A] shadow-md transition-colors hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={slideRight}
          aria-label={`Next screenshot for ${project.title}`}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#022B3A] shadow-md transition-colors hover:bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/80 px-2 py-1 backdrop-blur-sm">
          {project.screenshots.map((_, idx) => (
            <span
              key={`${project.title}-dot-${idx}`}
              className={`h-1.5 w-1.5 rounded-full ${
                idx === activeIndex ? "bg-[#022B3A]" : "bg-[#1F7A8C]/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-[#022B3A]">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#1F7A8C]">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-[#BFDBF7] bg-[#E1E5F2]/60 px-2.5 py-0.5 text-xs font-medium text-[#022B3A]"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold text-[#1F7A8C]">Swipe on touch or use arrows on desktop</p>
      </div>
    </article>
  );
}

export function ProjectsPage() {
  const [view, setView] = useState<(typeof projectViews)[number]>("Websites");
  const [filter, setFilter] = useState<(typeof websiteFilters)[number]>("All");
  const filteredWebsites = websiteProjects.filter((p) => filter === "All" || p.category === filter);

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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-[#E1E5F2] bg-[#E1E5F2]/35 p-2.5">
              {projectViews.map((projectView) => (
                <button
                  key={projectView}
                  onClick={() => setView(projectView)}
                  className={`rounded-xl px-7 py-3 text-base font-semibold transition-colors md:px-8 md:text-lg ${
                    view === projectView
                      ? "bg-[#022B3A] text-white"
                      : "bg-white text-[#022B3A] hover:bg-[#BFDBF7]"
                  }`}
                >
                  {projectView}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {view === "Websites" ? (
              <motion.div
                key="websites-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mt-6 flex flex-wrap gap-2">
                  {websiteFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors ${
                        filter === f
                          ? "border-[#022B3A] bg-[#022B3A] text-white"
                          : "border-[#E1E5F2] bg-white text-[#022B3A] hover:border-[#BFDBF7] hover:bg-[#E1E5F2]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  <AnimatePresence initial={false}>
                    {filteredWebsites.map((p) => (
                      <motion.div
                        layout
                        key={p.title}
                        initial={false}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="group overflow-hidden rounded-xl border border-[#E1E5F2] bg-white transition-shadow hover:shadow-md"
                      >
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

                        <div className="p-5">
                          <h3 className="text-base font-bold text-[#022B3A]">{p.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-[#1F7A8C]">{p.description}</p>
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
                          <div className="mt-3 text-xs font-semibold text-[#1F7A8C]">✓ {p.outcome}</div>
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
              </motion.div>
            ) : (
              <motion.div
                key="mobile-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mt-6 max-w-2xl">
                  <h2 className="text-2xl font-bold text-[#022B3A] md:text-3xl">Mobile Apps</h2>
                  <p className="mt-1.5 text-sm text-[#1F7A8C]">
                    Production-ready Flutter apps focused on speed, clarity, and real-world utility.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {mobileProjects.map((p) => (
                    <MobileProjectCard key={p.title} project={p} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

