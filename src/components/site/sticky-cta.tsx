"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/content/site";

/**
 * Mobile-only sticky conversion bar. Appears after the hero scrolls away,
 * hidden on the contact page (where the form already lives).
 */
export function StickyCTA() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = pathname?.startsWith("/contact");

  return (
    <AnimatePresence>
      {show && !hidden && (
        <motion.div
          initial={reduce ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 p-3 backdrop-blur-md md:hidden"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex max-w-md items-center gap-2.5">
            <Link
              href="/contact"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-white"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
