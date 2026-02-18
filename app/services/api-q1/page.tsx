import { Metadata } from "next";
import ApiQ1Content from "@/components/ApiQ1Content";

export const metadata: Metadata = {
  title: "API Q1 Compliance - Oil & Gas Quality Management",
  description:
    "Specialized API Q1 consultancy for manufacturing and service organizations. Gap analysis, mock audits, and traceability systems for the energy sector.",
  alternates: {
    canonical: "https://bescert.com/services/api-q1",
  },
};

export default function APICompliancePage() {
  return <ApiQ1Content />;
}
