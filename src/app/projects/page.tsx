import type { Metadata } from "next";
import { ProjectsPage } from "./projects-page";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of Techvion projects featuring modern stacks and measurable outcomes.",
};

export default function Projects() {
  return <ProjectsPage />;
}
