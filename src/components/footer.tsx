"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Custom Web Development",
  "E-commerce Solutions",
  "Video & Graphic Design",
  "Digital Marketing",
  "SEO Copywriting",
  "Domain & Hosting",
];

export function Footer() {
  return (
    <footer className="border-t border-[#E1E5F2] bg-[#022B3A]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Techvion
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Building scalable, high-performance digital solutions for modern businesses worldwide.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/50">
              <Phone className="h-3.5 w-3.5 text-[#BFDBF7]" />
              <span>+977 9843012542</span>
            </div>
            <div className="mt-1.5 flex items-center gap-2 text-sm text-white/50">
              <Mail className="h-3.5 w-3.5 text-[#BFDBF7]" />
              <a href="mailto:hello@techvion.com" className="transition-colors hover:text-white">
                hello@techvion.com
              </a>
            </div>
            <div className="mt-4 flex gap-2">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition-colors hover:border-[#BFDBF7] hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#BFDBF7]">
              Quick Links
            </div>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#BFDBF7]">
              Services
            </div>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-white/50">{s}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#BFDBF7]">
              Start a Project
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Have a project in mind? Let&apos;s talk about bringing your vision to life.
            </p>
            <Link href="/inquiry">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#022B3A] transition-colors hover:bg-[#BFDBF7]"
              >
                Send Inquiry
              </motion.span>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Techvion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


