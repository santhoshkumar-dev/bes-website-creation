import FounderContent from "@/components/FounderContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder's Vision - BESCERT | Compliance to Performance",
  description:
    "BESCERT was founded to transform compliance from a document exercise into a performance driver. Real systems, real results.",
  alternates: {
    canonical: "https://bescert.com/founder",
  },
};

export default function FounderVisionPage() {
  return <FounderContent />;
}
