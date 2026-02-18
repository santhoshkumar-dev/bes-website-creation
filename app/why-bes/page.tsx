import { Metadata } from "next";
import WhyBesContent from "@/components/WhyBesContent";

export const metadata: Metadata = {
  title: "Why Choose BESCERT? - Quality, Trust & Expertise",
  description:
    "Discover why businesses choose BESCERT for their certification and technical service needs. We offer global expertise with local delivery.",
  alternates: {
    canonical: "https://bescert.com/why-bes",
  },
};

export default function WhyBESCERTPage() {
  return <WhyBesContent />;
}
