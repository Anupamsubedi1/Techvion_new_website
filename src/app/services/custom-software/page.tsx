import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";
import { services } from "@/content/services";

const s = services["custom-software"];

export const metadata: Metadata = {
  title: s.name,
  description: s.summary,
  alternates: { canonical: "/services/custom-software" },
};

export default function Page() {
  return <ServiceDetailPage slug="custom-software" />;
}
