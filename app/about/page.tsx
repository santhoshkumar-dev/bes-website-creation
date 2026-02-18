import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About BESCERT - Our Mission, Vision & Values",
  description:
    "Learn about BESCERT's commitment to quality, safety, and business growth. We provide expert consultancy in ISO, API, NDT, and welding services.",
  alternates: {
    canonical: "https://bescert.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
