import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | TAJ — Software Engineer",
  description: "Learn more about TAJ - a passionate software engineer with expertise in full-stack development, competitive programming, and innovative problem-solving.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
