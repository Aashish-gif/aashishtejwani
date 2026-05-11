import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects | TAJ — Software Engineer",
  description: "Explore all projects built by TAJ across web development, DevOps, AI, and more.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
