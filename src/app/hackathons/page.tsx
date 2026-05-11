import type { Metadata } from "next";
import HackathonsPageClient from "./HackathonsPageClient";

export const metadata: Metadata = {
  title: "Hackathons | TAJ — Software Engineer",
  description: "Explore the hackathons, coding marathons, and innovation challenges participated in by TAJ.",
};

export default function HackathonsPage() {
  return <HackathonsPageClient />;
}
