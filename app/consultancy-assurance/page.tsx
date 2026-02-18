import ConsultancyContent from "@/components/ConsultancyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy Assurance Model - Sustained Compliance & Growth",
  description:
    "One-year post-implementation support for ISO and API systems. Ensuring your management systems stabilize, improve, and deliver business outcomes.",
  alternates: {
    canonical: "https://bescert.com/consultancy-assurance",
  },
};

export default function ConsultancyAssurancePage() {
  return <ConsultancyContent />;
}
