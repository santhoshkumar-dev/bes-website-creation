"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

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

      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-6 md:p-10 lg:p-16 space-y-6 max-w-5xl w-full">
          {/* Small Heading */}
          <h1 className="font-extrabold leading-tight text-[clamp(0.8rem,1.2vw,1rem)] tracking-wide">
            BES CERTIFICATION AND TECHNICAL SERVICES (BESCERT)
          </h1>

          {/* Main Heading */}
          <h1 className="font-extrabold leading-tight text-[clamp(1.8rem,4vw,3.5rem)]">
            Building Management Systems That Drive Sustainable Business Growth.
          </h1>

          {/* Sub Content */}
          <div className="leading-relaxed space-y-3 max-w-3xl">
            <p className="font-semibold text-[clamp(1.2rem,2.5vw,2rem)]">
              ISO • API • NDT • WELDING
            </p>

            <p className="text-[clamp(0.85rem,1.3vw,1.1rem)] opacity-90">
              CONSULTANCY • AUDIT • CERTIFICATION • TRAINING • INSPECTION •
              DIGITAL
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-bes-primary font-semibold px-8 py-3 text-base"
              >
                Request a Consultation
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="bordered"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-base"
              >
                Explore Our Services
              </Button>
            </Link>

            <a
              href="https://1drv.ms/b/c/B6F55A1E6BEC4AA2/IQDP02mJixKMQIu3BEkwSI9nARTCJMEVcu2TSPe23aCTeKs?e=CV0Grt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="bordered"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 flex items-center justify-center gap-2 text-base"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
            </a>
          </div>

          <p className="font-semibold text-[clamp(1.2rem,2.5vw,2rem)] pt-4">
            Assuring Your Business Growth.
          </p>
        </div>
      </div>
    </section>
  );
}
