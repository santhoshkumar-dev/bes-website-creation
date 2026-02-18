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

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-4 md:p-12 space-y-6 max-w-4xl">
          <h1 className="md:text-xl text-lg font-extrabold leading-tight">
            BES CERTIFICATION AND TECHNICAL SERVICES (BESCERT)
          </h1>

          <h1 className="md:text-5xl text-4xl font-extrabold leading-tight">
            Building Management Systems That Drive Sustainable Business Growth.
          </h1>

          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            <span className="text-4xl">ISO • API • NDT • WELDING</span> <br />{" "}
            CONSULTANCY • AUDIT • CERTIFICATION • TRAINING • INSPECTION •
            DIGITAL
            <br />
          </p>

          {/* <p className="text-base md:text-lg max-w-2xl leading-relaxed opacity-95">
            BESCERT delivers practical, digital, audit-ready management systems
            to manufacturing, engineering, EPC, oil & gas, and service
            industries across India and global markets.
          </p> */}

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

          <div className="pt-2">
            <Button
              as="a"
              href="https://1drv.ms/b/c/B6F55A1E6BEC4AA2/IQCyUU7bPe7hQJRV9TJCOtTRAUlT8irOwmeLVe0GnfM3bIc?e=5Y0J46"
              target="_blank"
              size="lg"
              variant="flat"
              className="text-white font-semibold text-lg px-8"
            >
              Download Company Profile <Download />
            </Button>
          </div>

          <span className="font-semibold text-4xl">
            Assuring Your Business Growth.
          </span>
        </div>
      </div>
    </section>
  );
}
