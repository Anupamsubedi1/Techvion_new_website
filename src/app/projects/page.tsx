import type { Metadata } from "next";
import { ProjectsPage } from "./projects-page";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected Techvion work: web platforms, storefronts and mobile apps in production today, built with care, craft and a focus on outcomes.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return <ProjectsPage />;
}
