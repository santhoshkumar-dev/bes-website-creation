import { Metadata } from "next";
import InspectionContent from "@/components/InspectionContent";

export const metadata: Metadata = {
  title: "Inspection & Audit Services - Internal Audits & Gap Analysis",
  description:
    "Third-party inspection, internal audits, supplier assessments, and gap analysis services. Digital reporting and corrective action tracking included.",
  alternates: {
    canonical: "https://bescert.com/services/inspection",
  },
};

export default function InspectionPage() {
  return <InspectionContent />;
}
