"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/custom/1.jpeg", "/custom/2.jpeg", "/custom/3.jpeg"];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[80vh] rounded-3xl overflow-hidden bg-[#003366]">
      {/* Background Carousel */}
      {images.map((src, index) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-4 md:p-8 lg:p-12 space-y-4 md:space-y-6 max-w-4xl w-full">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold leading-tight">
            BES CERTIFICATION AND TECHNICAL SERVICES (BESCERT)
          </h1>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Building Management Systems That Drive Sustainable Business Growth.
          </h1>

          <div className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              ISO • API • NDT • WELDING
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              CONSULTANCY • AUDIT • CERTIFICATION • TRAINING • INSPECTION •
              DIGITAL
            </p>
          </div>

          {/* Optional descriptive paragraph - uncomment if needed */}
          {/* <p className="text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed opacity-95">
      BESCERT delivers practical, digital, audit-ready management systems
      to manufacturing, engineering, EPC, oil & gas, and service
      industries across India and global markets.
    </p> */}

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-bes-primary font-semibold text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
              >
                Request a Consultation
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="bordered"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold text-base md:text-lg px-6 md:px-8 py-2 md:py-3"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          <p className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-2 md:pt-4">
            Assuring Your Business Growth.
          </p>
        </div>
      </div>
    </section>
  );
}
