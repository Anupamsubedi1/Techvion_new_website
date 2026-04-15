"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const schema = z.object({
  fullName: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  description: z.string().min(10, "Please provide a brief description"),
});

type InquiryFormValues = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "9779843012542";

function buildWhatsAppURL(values?: Partial<InquiryFormValues>) {
  const lines = ["Hi Techvion! I'd like to discuss a project."];
  if (values?.fullName) lines.push(`Name: ${values.fullName}`);
  if (values?.email) lines.push(`Email: ${values.email}`);
  if (values?.company) lines.push(`Company: ${values.company}`);
  if (values?.projectType) lines.push(`Project Type: ${values.projectType}`);
  if (values?.timeline) lines.push(`Timeline: ${values.timeline}`);
  if (values?.description) lines.push(`Details: ${values.description}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

type InquiryFormCardProps = {
  className?: string;
  title?: string;
};

export function InquiryFormCard({ className, title = "Start Your Project" }: InquiryFormCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      timeline: "",
      description: "",
    },
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const values = form.getValues();
    window.open(buildWhatsAppURL(values), "_blank");
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl border border-[#E1E5F2] bg-white p-12 text-center shadow-lg shadow-[#022B3A]/[0.04]",
          className,
        )}
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
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E1E5F2] bg-white p-8 shadow-lg shadow-[#022B3A]/[0.04] md:p-10",
        className,
      )}
    >
      <h2 className="text-2xl font-bold text-[#022B3A]">{title}</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-6">
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

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

          <p className="text-center text-xs text-[#1F7A8C]/50">
            By submitting this form, you agree to our <span className="text-[#1F7A8C] underline">Terms of Service</span>{" "}
            and <span className="text-[#1F7A8C] underline">Privacy Policy</span>.
            We&apos;ll never share your information with third parties.
          </p>
        </form>
      </Form>
    </div>
  );
}
