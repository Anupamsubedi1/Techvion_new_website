"use client";

import { useState } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryValues } from "@/lib/inquiry-schema";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, MessageCircle, AlertCircle } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const projectTypes = [
  { value: "custom-software", label: "Custom Software" },
  { value: "web-ecommerce", label: "Web & E-commerce" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "digital-marketing", label: "Digital Marketing & SEO" },
  { value: "maintenance", label: "Maintenance & Support" },
  { value: "other", label: "Something else" },
];

const budgets = [
  { value: "under-5k", label: "Under $5k" },
  { value: "5k-15k", label: "$5k – $15k" },
  { value: "15k-50k", label: "$15k – $50k" },
  { value: "50k-plus", label: "$50k+" },
  { value: "unsure", label: "Not sure yet" },
];

const timelines = [
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within a month" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "flexible", label: "Flexible" },
];

function buildWhatsApp(values: Partial<InquiryValues>) {
  const lines = ["Hi Techvion! I'd like to discuss a project."];
  if (values.fullName) lines.push(`Name: ${values.fullName}`);
  if (values.email) lines.push(`Email: ${values.email}`);
  if (values.company) lines.push(`Company: ${values.company}`);
  if (values.projectType) lines.push(`Project: ${values.projectType}`);
  if (values.budget) lines.push(`Budget: ${values.budget}`);
  if (values.timeline) lines.push(`Timeline: ${values.timeline}`);
  if (values.description) lines.push(`Details: ${values.description}`);
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

const inputClass =
  "h-12 rounded-xl border-line bg-white text-ink placeholder:text-faint/70 focus-visible:border-accent focus-visible:ring-accent/20";
const selectTriggerClass =
  "h-12 w-full rounded-xl border-line bg-white text-ink data-[placeholder]:text-faint/70 focus-visible:border-accent focus-visible:ring-accent/20";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryFormCard({
  className,
  title = "Tell us about your project",
}: {
  className?: string;
  title?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
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

  const onSubmit = async (values: InquiryValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const openWhatsApp = () => window.open(buildWhatsApp(form.getValues()), "_blank");

  if (status === "success") {
    return (
      <div className={cn("flex items-center justify-center rounded-3xl border border-line bg-white p-10 text-center shadow-card md:p-14", className)}>
        <div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }}>
            <CheckCircle2 className="mx-auto h-16 w-16 text-accent-ink" />
          </motion.div>
          <h2 className="mt-6 text-2xl font-semibold text-ink">Inquiry received</h2>
          <p className="mt-3 text-mutedink">
            Thanks! We&apos;ll review your project and reply within 24 hours. Prefer to talk now?
          </p>
          <button
            type="button"
            onClick={openWhatsApp}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#22C55E] px-6 text-sm font-medium text-white transition-colors hover:bg-[#16A34A]"
          >
            <MessageCircle className="h-4 w-4" />
            Continue on WhatsApp
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("rounded-3xl border border-line bg-white p-7 shadow-card md:p-9", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-ink">{title}</h2>
      <p className="mt-2 text-sm text-mutedink">No obligation. We reply within 24 hours with a clear plan.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-ink">Your name <span className="text-accent-ink">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" className={inputClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-ink">Email <span className="text-accent-ink">*</span></FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@company.com" className={inputClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-ink">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company (optional)" className={inputClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-ink">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+977 …" className={inputClass} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <SelectField form={form} name="projectType" label="Project type" required placeholder="Select" options={projectTypes} triggerClass={selectTriggerClass} />
            <SelectField form={form} name="budget" label="Budget" placeholder="Select" options={budgets} triggerClass={selectTriggerClass} />
            <SelectField form={form} name="timeline" label="Timeline" placeholder="Select" options={timelines} triggerClass={selectTriggerClass} />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-ink">What are you building? <span className="text-accent-ink">*</span></FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="The problem you're solving, who it's for, and any must-have features or references."
                    className={cn(inputClass, "h-auto py-3")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {status === "error" && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                Something went wrong sending your inquiry. Please try again, or{" "}
                <button type="button" onClick={openWhatsApp} className="font-medium underline">
                  reach us on WhatsApp
                </button>
                .
              </span>
            </div>
          )}

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition-all hover:bg-ink-600 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send inquiry <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 text-sm font-medium text-white transition-colors hover:bg-[#16A34A]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp instead
            </button>
          </div>

          <p className="text-center text-xs text-faint">
            By submitting you agree to our{" "}
            <a href="/privacy" className="underline hover:text-mutedink">Privacy Policy</a>. We never share your details.
          </p>
        </form>
      </Form>
    </div>
  );
}

function SelectField({
  form,
  name,
  label,
  required,
  placeholder,
  options,
  triggerClass,
}: {
  form: UseFormReturn<InquiryValues>;
  name: "projectType" | "budget" | "timeline";
  label: string;
  required?: boolean;
  placeholder: string;
  options: { value: string; label: string }[];
  triggerClass: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-ink">
            {label} {required && <span className="text-accent-ink">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange} value={field.value || undefined}>
            <FormControl>
              <SelectTrigger className={triggerClass}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
