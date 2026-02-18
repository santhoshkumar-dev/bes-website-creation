import { Metadata } from "next";
import DigitalContent from "@/components/DigitalContent";

export const metadata: Metadata = {
  title: "Digital Management Systems - Software, Apps & Dashboards",
  description:
    "Transform compliance with digital tools. Document control software, mobile inspection apps, and real-time KPI dashboards for ISO and API systems.",
  alternates: {
    canonical: "https://bescert.com/services/digital",
  },
};

export default function DigitalPage() {
  return <DigitalContent />;
}
