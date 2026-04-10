import type { Metadata } from "next";
import { InquiryPage } from "./inquiry-page";

export const metadata: Metadata = {
  title: "Send Inquiry",
  description: "Submit a project inquiry to Techvion with details about your goals and timeline.",
};

export default function Inquiry() {
  return <InquiryPage />;
}
