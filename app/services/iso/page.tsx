import { Metadata } from "next";
import IsoContent from "@/components/IsoContent";

export const metadata: Metadata = {
  title: "ISO Consultancy - 9001, 14001, 45001, 27001 & 17025",
  description:
    "Expert ISO consultancy for Quality, Environment, Safety, Information Security, and Laboratory Competence. Audit-ready systems that improve business performance.",
  alternates: {
    canonical: "https://bescert.com/services/iso",
  },
};

export default function ISOCertificationPage() {
  return <IsoContent />;
}
