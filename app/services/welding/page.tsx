import { Metadata } from "next";
import WeldingContent from "@/components/WeldingContent";

export const metadata: Metadata = {
  title: "Welding Services - WPS/PQR, Welder Qualification & Inspection",
  description:
    "Complete welding support including WPS/PQR development, welder qualification testing, and defect analysis per ASME, AWS, and ISO standards.",
  alternates: {
    canonical: "https://bescert.com/services/welding",
  },
};

export default function WeldingPage() {
  return <WeldingContent />;
}
