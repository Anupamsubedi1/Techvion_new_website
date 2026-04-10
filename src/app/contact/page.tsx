import type { Metadata } from "next";
import { ContactPage } from "./contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Techvion for collaborations, estimates, or general inquiries.",
};

export default function Contact() {
  return <ContactPage />;
}
