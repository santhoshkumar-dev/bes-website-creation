"use client";

import { Button } from "@heroui/react";
import { Building2, Factory, Zap, Wrench, Hammer } from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    { name: "Oil & Gas", icon: <Zap className="w-6 h-6" /> },
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
    { name: "EPC & Construction", icon: <Building2 className="w-6 h-6" /> },
    { name: "Power & Energy", icon: <Zap className="w-6 h-6" /> },
    { name: "Engineering & Fabrication", icon: <Wrench className="w-6 h-6" /> },
  ];

  return (
    <section className="flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold">Industries We Serve</h2>
        <p className="text-lg text-black/60">
          Trusted by organizations across critical industrial sectors
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 rounded-full bg-white border-2 border-bes-primary/20 hover:border-bes-primary hover:bg-bes-primary/5 transition-all w-full md:w-auto"
          >
            <div className="text-bes-primary">{industry.icon}</div>
            <span className="font-semibold text-gray-800">{industry.name}</span>
          </div>
        ))}
      </div>

      {/* Final CTA integrated */}
      <div className="flex flex-col gap-6 items-center mt-12 p-12 rounded-3xl bg-linear-to-r from-bes-primary to-bes-primary-light text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Ready to Build Systems That Grow Your Business?
        </h2>
        <p className="text-xl text-center text-white/90">
          From compliance to control. From control to growth.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Button
            size="lg"
            className="bg-white text-bes-primary font-semibold text-lg px-8"
          >
            Request a Consultation
          </Button>
          <Button
            size="lg"
            variant="bordered"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
          >
            Talk to a Technical Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
