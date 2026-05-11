import type { Metadata } from "next";
import SkillsPageClient from "./SkillsPageClient";

export const metadata: Metadata = {
  title: "Skills | TAJ — Software Engineer",
  description: "Explore the technical skills and expertise of TAJ - from frontend frameworks to backend technologies and development tools.",
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
