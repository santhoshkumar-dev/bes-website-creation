"use client";

import { Button } from "@heroui/react";
import { useEffect, useState } from "react";

function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // parallax strength
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[80vh] rounded-3xl overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
          willChange: "transform",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full text-white flex items-center">
        <div className="p-4 md:p-12 space-y-4">
          <h1 className="md:text-6xl text-4xl font-extrabold">
            Real Estate <br />
            For Business
          </h1>

          <p className="text-xl max-w-xl">
            Rent, sale, and selection of properties from offices to warehouses
          </p>

          <Button className="bg-white text-black text-xl">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
