"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "Please provide a brief description"),
});

type Values = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "9779843012542";

function buildWhatsAppURL(values?: Partial<Values>) {
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
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      description: "",
    },
  });

  const onSubmit = (values: Values) => {
    void values;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const values = form.getValues();
    window.open(buildWhatsAppURL(values), "_blank");
  };

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
          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-2xl border border-[#E1E5F2] bg-white p-8 shadow-lg shadow-[#022B3A]/[0.04] md:p-10"
            >
              <h2 className="text-2xl font-bold text-[#022B3A]">Start Your Project</h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      name="fullName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">
                            Your Name <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full Name"
                              {...field}
                              className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A] placeholder:text-[#1F7A8C]/40 focus:border-[#1F7A8C] focus:ring-[#1F7A8C]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">
                            Email Address <span className="text-red-400">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email address"
                              {...field}
                              className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A] placeholder:text-[#1F7A8C]/40 focus:border-[#1F7A8C] focus:ring-[#1F7A8C]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 2: Company + Phone */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      name="company"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">Company Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Company Inc."
                              {...field}
                              className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A] placeholder:text-[#1F7A8C]/40 focus:border-[#1F7A8C] focus:ring-[#1F7A8C]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="phone"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+977 1234 56789"
                              {...field}
                              className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A] placeholder:text-[#1F7A8C]/40 focus:border-[#1F7A8C] focus:ring-[#1F7A8C]/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 3: Project Type + Budget + Timeline (3 selects) */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <FormField
                      name="projectType"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">
                            Project Type <span className="text-red-400">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A]">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                              <SelectItem value="video-editing">Video Editing</SelectItem>
                              <SelectItem value="graphic-design">Graphic Design</SelectItem>
                              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                              <SelectItem value="custom-software">Custom Software</SelectItem>
                              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="budget"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">Estimated Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A]">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-10k">Less than Rs 10,000</SelectItem>
                              <SelectItem value="10k-20k">Rs 10,000 - Rs 20,000</SelectItem>
                              <SelectItem value="20k-50k">Rs 20,000 - Rs 50,000</SelectItem>
                              <SelectItem value="50k-100k">Rs 50,000 - Rs 100,000</SelectItem>
                              <SelectItem value="100k-plus">Rs 100,000+</SelectItem>
                              <SelectItem value="not-sure">Not sure yet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      name="timeline"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-[#022B3A]">Project Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A]">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                              <SelectItem value="1-month">1 month</SelectItem>
                              <SelectItem value="2-3-months">2-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-plus-months">6+ months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Row 4: Description */}
                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-[#022B3A]">
                          Project Description <span className="text-red-400">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Describe your project in detail...  • What problem are you trying to solve? • Who is your target audience? • Do you have any specific technologies in mind? • Are there any existing designs or references? • What are your key requirements and features?"
                            {...field}
                            className="rounded-xl border-[#E1E5F2] bg-[#E1E5F2]/20 text-[#022B3A] placeholder:text-[#1F7A8C]/40 focus:border-[#1F7A8C] focus:ring-[#1F7A8C]/20"
                          />
                        </FormControl>
                        <p className="mt-1.5 text-xs text-[#1F7A8C]/60">
                          The more details you provide, the better we can understand your needs.
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <Button
                      type="submit"
                      className="h-12 flex-1 rounded-xl bg-[#022B3A] px-8 text-sm font-semibold text-white hover:bg-[#1F7A8C]"
                    >
                      Submit Project Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      className="h-12 flex-1 rounded-xl bg-green-500 px-8 text-sm font-semibold text-white hover:bg-green-600"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                  </div>

                  {/* Terms */}
                  <p className="text-center text-xs text-[#1F7A8C]/50">
                    By submitting this form, you agree to our{" "}
                    <span className="text-[#1F7A8C] underline">Terms of Service</span> and{" "}
                    <span className="text-[#1F7A8C] underline">Privacy Policy</span>.
                    We&apos;ll never share your information with third parties.
                  </p>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center rounded-2xl border border-[#E1E5F2] bg-white p-12 text-center shadow-lg shadow-[#022B3A]/[0.04]"
            >
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  <CheckCircle2 className="mx-auto h-16 w-16 text-[#1F7A8C]" />
                </motion.div>
                <h2 className="mt-6 text-3xl font-bold text-[#022B3A]">Inquiry Submitted!</h2>
                <p className="mt-3 text-base text-[#1F7A8C]">
                  Thank you! We&apos;ll review your project and reach out within 24 hours.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
