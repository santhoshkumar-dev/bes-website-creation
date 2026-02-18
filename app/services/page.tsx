import { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services - ISO, API, NDT, Welding & Digital Systems",
  description:
    "Comprehensive technical services including ISO consultancy, API certification, NDT training, welding inspection, and digital management solutions.",
  alternates: {
    canonical: "https://bescert.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
