"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { Icon } from "@/components/site/icon";
import { primaryNav, site } from "@/content/site";
import { serviceList } from "@/content/services";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      // Reveal on scroll up, hide on scroll down past the hero, but never
      // hide while a menu/dropdown is open or near the top of the page.
      const delta = y - lastScrollY.current;
      if (y > 140 && delta > 4) setHidden(true);
      else if (delta < -4 || y < 140) setHidden(false);
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Keep the bar visible whenever a menu is open, regardless of scroll.
  const isHidden = hidden && !menuOpen && !servicesOpen;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={reduce ? { y: 0 } : { y: isHidden ? "-100%" : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "absolute inset-0 border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/85 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-white/60 backdrop-blur-md",
        )}
      />
      <nav className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between container-px">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    aria-expanded={servicesOpen}
                    className={cn(
                      "relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                      active ? "text-ink" : "text-mutedink hover:text-ink",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180",
                      )}
                    />
                    {active && <ActiveDot reduce={reduce} />}
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-pop">
                          <div className="grid grid-cols-2 gap-1">
                            {serviceList.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-white">
                                  <Icon name={s.icon} className="h-4.5 w-4.5 text-accent-bright" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-ink">{s.name}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-faint">
                                    {s.tagline}
                                  </span>
                                </span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/services"
                            className="mt-1 flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                          >
                            View all services
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                  active ? "text-ink" : "text-mutedink hover:text-ink",
                )}
              >
                {link.label}
                {active && <ActiveDot reduce={reduce} />}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink-600 hover:shadow-card"
          >
            Start a project
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-ink transition-colors hover:bg-surface"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-l-0 bg-night p-0 text-white">
              <SheetHeader className="border-b border-white/10 px-6 py-5">
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-[calc(100%-73px)] flex-col overflow-y-auto p-6">
                <nav className="flex flex-col gap-1">
                  {primaryNav.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        isActive(l.href)
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="label-mono px-4 text-white/40">Services</p>
                  <div className="mt-2 flex flex-col gap-0.5">
                    {serviceList.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <Icon name={s.icon} className="h-4 w-4 text-accent-bright" />
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent text-[15px] font-medium text-white"
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="mt-3 block text-center text-sm text-white/50"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}

function ActiveDot({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.span
      layoutId={reduce ? undefined : "nav-active"}
      className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-accent"
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );
}
