import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";
import { services } from "@/content/services";

const s = services["maintenance-support"];

export const metadata: Metadata = {
  title: s.name,
  description: s.summary,
  alternates: { canonical: "/services/maintenance-support" },
};

export default function Page() {
  return <ServiceDetailPage slug="maintenance-support" />;
}
