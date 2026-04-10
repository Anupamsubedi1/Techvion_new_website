import type { Metadata } from "next";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Techvion, our mission, values, and growth timeline.",
};

export default function About() {
  return <AboutPage />;
}
