import Hero from "@/components/Hero";
import About from "@/components/About";
import Cataglog from "../components/Cataglog";
import HowWeWork from "@/components/HowWeWork";
import DigitalEnablement from "@/components/DigitalEnablement";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import IndustriesServed from "@/components/IndustriesServed";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BESCERT - Global ISO Certification & Technical Services",
  description:
    "Leading provider of ISO consultancy, API compliance, NDT, welding, and digital management systems. Trusted by industries worldwide for business growth and compliance.",
  alternates: {
    canonical: "https://bescert.com",
  },
};

export default function Home() {
  return (
    <main className="space-y-6 md:space-y-12">
      <Hero />
      <About />
      <HowWeWork />
      <Cataglog />
      <DigitalEnablement />
      <BusinessOutcomes />
      <IndustriesServed />
    </main>
  );
}
