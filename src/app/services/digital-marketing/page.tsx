import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";
import { services } from "@/content/services";

const s = services["digital-marketing"];

export const metadata: Metadata = {
  title: s.name,
  description: s.summary,
  alternates: { canonical: "/services/digital-marketing" },
};

export default function Page() {
  return <ServiceDetailPage slug="digital-marketing" />;
}
