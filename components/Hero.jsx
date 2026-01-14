"use client";

import { Button } from "@heroui/react";

function Hero() {
  return (
    <section className="relative h-[80vh] rounded-3xl overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-4 md:p-12 space-y-6 max-w-4xl">
          <h1 className="md:text-7xl text-4xl font-extrabold leading-tight">
            Certification. <br />
            Compliance. <br />
            Confidence.
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
            Practical, digital, audit-ready management systems that improve real
            business performance.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
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
      </div>
    </section>
  );
}

export default Hero;
