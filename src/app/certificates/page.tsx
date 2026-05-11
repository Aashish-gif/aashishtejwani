import type { Metadata } from "next";
import CertificatesPageClient from "./CertificatesPageClient";

export const metadata: Metadata = {
  title: "Certificates | TAJ — Software Engineer",
  description: "View all technical certifications and industry-recognized credentials earned by TAJ.",
};

export default function CertificatesPage() {
  return <CertificatesPageClient />;
}
