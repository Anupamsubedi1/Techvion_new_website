import type { Metadata } from "next";
import { ServicesPage } from "./services-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web & e-commerce, digital marketing and maintenance, plus mobile, cloud, AI, DevOps and QA. End-to-end delivery from one team.",
  alternates: { canonical: "/services" },
};

export default function Services() {
  return <ServicesPage />;
}
