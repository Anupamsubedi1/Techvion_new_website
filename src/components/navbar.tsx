"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >

      {/* Background — always visible */}
      <div className="absolute inset-0 border-b border-[#E1E5F2] bg-white/90 backdrop-blur-md" />
      <nav className="relative mx-auto flex h-[70px] w-full max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-11">
        <Link href="/" className="flex items-center gap-2.5">
            <span className="text-[26px] font-bold leading-none tracking-[0.08em] text-[#011f4b]">
              <span className="text-[#005b96]">Tech</span>{" "}
              <span className="text-[#03396c]">Vion</span>
            </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#022B3A]"
                  : "text-[#1F7A8C] hover:text-[#022B3A]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-[#022B3A]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link href="/inquiry" className="ml-4">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex cursor-pointer items-center rounded-lg bg-[#022B3A] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1F7A8C]"
            >
              Send Inquiry
            </motion.span>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-lg text-[#022B3A] transition-colors hover:bg-[#E1E5F2]">
                <Menu className="h-[22px] w-[22px]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-[#E1E5F2] bg-[#01151D] p-0">
              <SheetHeader className="border-b border-white/10 px-7 py-6">
                <SheetTitle className="text-left">
                    <span className="text-[24px] font-bold leading-none tracking-[0.08em]">
                      <span className="text-[#b3cde0]">Tech</span>{" "}
                      <span className="text-[#6497b1]">Vion</span>
                    </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-5">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center rounded-lg px-5 py-3.5 text-base font-medium transition-colors ${
                        pathname === l.href
                          ? "bg-[#1F7A8C] text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <Link href="/inquiry" onClick={() => setOpen(false)}>
                    <motion.span
                      whileTap={{ scale: 0.97 }}
                      className="flex cursor-pointer items-center justify-center rounded-lg bg-[#1F7A8C] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#022B3A]"
                    >
                      Send Inquiry
                    </motion.span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
