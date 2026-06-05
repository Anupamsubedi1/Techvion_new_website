import type { Metadata } from "next";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Techvion is a remote-first product studio founded in 2024, known for disciplined engineering, transparent delivery and long-term client success.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return <AboutPage />;
}
