"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/kpi.jpg", "/digital training.jpg", "/all-services.png"];

export default function IndustriesHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] rounded-3xl overflow-hidden">
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
        <div className="p-4 md:p-12 space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
            Specialized certification and technical services across industrial,
            manufacturing, technology, and service sectors
          </p>
        </div>
      </div>
    </section>
  );
}
