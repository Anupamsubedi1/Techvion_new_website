import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";
import { services } from "@/content/services";

const s = services["data-science-ai"];

export const metadata: Metadata = {
  title: s.name,
  description: s.summary,
  alternates: { canonical: "/services/data-science-ai" },
};

export default function Page() {
  return <ServiceDetailPage slug="data-science-ai" />;
}
