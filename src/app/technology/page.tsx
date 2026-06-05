import type { Metadata } from "next";
import { TechnologyPage } from "./technology-page";

export const metadata: Metadata = {
  title: "How we build",
  description:
    "The Techvion engineering standard: a modern, proven stack plus disciplined architecture, QA, DevOps, security and performance on every project.",
  alternates: { canonical: "/technology" },
};

export default function Technology() {
  return <TechnologyPage />;
}
