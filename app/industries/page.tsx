import { Metadata } from "next";
import IndustriesContent from "@/components/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries Served - Oil & Gas, Manufacturing, EPC & More",
  description:
    "Expert technical services for major industries including Oil & Gas, Manufacturing, EPC, Energy, Food & Beverage, and Transportation.",
  alternates: {
    canonical: "https://bescert.com/industries",
  },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
