import Hero from "../components/Hero";
import About from "../components/About";
import Cataglog from "../components/Cataglog";
import HowWeWork from "@/components/HowWeWork";
import DigitalEnablement from "@/components/DigitalEnablement";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import IndustriesServed from "@/components/IndustriesServed";

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
