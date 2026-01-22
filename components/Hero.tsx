"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] rounded-3xl overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-4 md:p-12 space-y-6 max-w-4xl">
          <h1 className="md:text-7xl text-4xl font-extrabold leading-tight">
            Building Systems <br />
            That Grow Businesses
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
            ISO | API | Welding | NDT | Inspection | Audit | Digital Systems
            <br />
            <span className="font-semibold">
              Assuring Your Business Growth.
            </span>
          </p>

          <p className="text-base md:text-lg max-w-2xl leading-relaxed opacity-95">
            BESCERT delivers practical, digital, audit-ready management systems
            to manufacturing, engineering, EPC, oil & gas, and service
            industries across India and global markets.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-bes-primary font-semibold text-lg px-8"
              >
                Request a Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
