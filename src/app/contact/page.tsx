import type { Metadata } from "next";
import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project, book a free intro call, or ask a question. Techvion replies within 24 hours, by email, form or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return <ContactPage />;
}
