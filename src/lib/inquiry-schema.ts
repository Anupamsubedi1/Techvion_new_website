import { z } from "zod";

/** Shared inquiry schema: used by both the client form and the server route. */
export const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(10, "A sentence or two helps us help you"),
});

export type InquiryValues = z.infer<typeof inquirySchema>;
