"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram, ArrowRight, MessageCircle } from "lucide-react";

const info = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+977 9843012542",
    href: "tel:+9779843012542",
  },
  {
    icon: Mail,
    label: "Email",
    value: "techviontechnology@gmail.com",
    href: "mailto:techviontechnology@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal (Remote-first)",
    href: "#",
  },
];

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white pt-28 pb-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Let&apos;s Build Something&nbsp;Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-3 max-w-xl text-base text-[#1F7A8C]"
          >
            Reach out for project inquiries, partnerships, or general questions. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {info.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -3 }}
                className="group flex flex-col items-center rounded-xl border border-[#E1E5F2] bg-white p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E1E5F2] transition-colors group-hover:bg-[#022B3A]">
                  <item.icon className="h-5 w-5 text-[#1F7A8C] transition-colors group-hover:text-white" />
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#1F7A8C]">
                  {item.label}
                </div>
                <div className="mt-1 text-sm font-semibold text-[#022B3A]">{item.value}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social + CTA */}
      <section className="bg-[#E1E5F2]/40 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-[#1F7A8C]">Find Us Online</span>
              <h2 className="mt-3 text-2xl font-extrabold text-[#022B3A]">Follow Along</h2>
              <p className="mt-3 text-[#1F7A8C]">Stay updated on our latest projects and insights.</p>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "Twitter / X", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                ].map(({ icon: Icon, label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="group inline-flex items-center gap-3 text-[#022B3A] transition-colors hover:text-[#1F7A8C]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BFDBF7] bg-white group-hover:border-[#1F7A8C]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold">{label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center rounded-2xl border border-[#BFDBF7] bg-white p-8"
              style={{ boxShadow: "0 4px 24px rgba(2,43,58,0.07)" }}
            >
              <MessageCircle className="h-10 w-10 text-[#1F7A8C]" />
              <h3 className="mt-4 text-xl font-extrabold text-[#022B3A]">Have a project in mind?</h3>
              <p className="mt-3 text-[#1F7A8C]">
                Fill out our inquiry form and we&apos;ll schedule a discovery call within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/inquiry">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#022B3A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1F7A8C]"
                  >
                    Send Inquiry <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Link>
                <a href="mailto:techviontechnology@gmail.com">
                  <motion.span
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#BFDBF7] bg-[#E1E5F2] px-6 py-3 text-sm font-bold text-[#022B3A] transition-colors hover:bg-[#BFDBF7]"
                  >
                    Email Us
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
