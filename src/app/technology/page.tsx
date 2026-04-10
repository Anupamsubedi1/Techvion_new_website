import type { Metadata } from "next";
import { TechnologyPage } from "./technology-page";

export const metadata: Metadata = {
  title: "Technology",
  description: "Explore the modern technology stack used by Techvion for scalable digital products.",
};

export default function Technology() {
  return <TechnologyPage />;
}
