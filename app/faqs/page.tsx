import FAQsContent from "@/components/FAQsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - BESCERT Services & Processes",
  description:
    "Common questions about BESCERT's ISO consultancy, API compliance, NDT training, and digital system services.",
  alternates: {
    canonical: "https://bescert.com/faqs",
  },
};

export default function FAQsPage() {
  return <FAQsContent />;
}
