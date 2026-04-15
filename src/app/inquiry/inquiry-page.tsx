"use client";
import { motion } from "framer-motion";
import { InquiryFormCard } from "@/components/inquiry-form-card";
import {
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "9779843012542";

type WhatsAppValues = {
  fullName?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
};

function buildWhatsAppURL(values?: Partial<WhatsAppValues>) {
  const lines = ["Hi Techvion! I'd like to discuss a project."];
  if (values?.fullName) lines.push(`Name: ${values.fullName}`);
  if (values?.email) lines.push(`Email: ${values.email}`);
  if (values?.company) lines.push(`Company: ${values.company}`);
  if (values?.projectType) lines.push(`Project Type: ${values.projectType}`);
  if (values?.budget) lines.push(`Budget: ${values.budget}`);
  if (values?.timeline) lines.push(`Timeline: ${values.timeline}`);
  if (values?.description) lines.push(`Details: ${values.description}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function InquiryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#E1E5F2]/20 to-white">
      {/* Hero */}
      <section className="pt-28 pb-10 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#022B3A] md:text-5xl"
          >
            Send Inquiry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-base text-[#1F7A8C] md:text-lg"
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours with a clear plan.
          </motion.p>
        </div>
      </section>

      {/* Main Content — Two Column */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[340px_1fr]">
          {/* ── Left: Contact Information ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Card */}
            <div className="rounded-2xl border border-[#E1E5F2] bg-white p-7 shadow-md shadow-[#022B3A]/[0.04]">
              <h2 className="text-xl font-bold text-[#022B3A]">Contact Information</h2>

              <div className="mt-6 space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#022B3A]/10">
                    <Mail className="h-5 w-5 text-[#022B3A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#022B3A]">Email</p>
                    <a href="mailto:techviontechnology@gmail.com" className="text-sm text-[#1F7A8C] hover:underline">
                      techviontechnology@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#022B3A]/10">
                    <Phone className="h-5 w-5 text-[#022B3A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#022B3A]">Phone</p>
                    <a href="tel:+9779843012542" className="text-sm text-[#1F7A8C] hover:underline">
                      +977 9843012542
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#022B3A]/10">
                    <MapPin className="h-5 w-5 text-[#022B3A]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#022B3A]">Location</p>
                    <p className="text-sm text-[#1F7A8C]">
                      Baniyatar,
                      <br />
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#022B3A]">WhatsApp</p>
                    <p className="text-sm text-[#1F7A8C]">
                      Chat with us instantly
                      <br />
                      Quick responses, 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-6 border-[#E1E5F2]" />

              {/* Why Choose Us */}
              <h3 className="text-base font-bold text-[#022B3A]">Why Choose Us?</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Expert Development Team",
                  "Agile Development Process",
                  "24/7 Support & Maintenance",
                  "Competitive Pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#1F7A8C]">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[#1F7A8C]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <a
                href={buildWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-500 text-sm font-semibold text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Message on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <InquiryFormCard />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
