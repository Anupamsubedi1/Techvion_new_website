import type { Metadata } from "next";
import { ServicesPage } from "./services-page";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Techvion services including web development, e-commerce, branding, and hosting.",
};

export default function Services() {
  return <ServicesPage />;
}
