"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JSX, useRef } from "react";

interface CarouselItem {
  title: string;
  subtitle: string;
  image: string;
}

const items: CarouselItem[] = [
  {
    title: "ISO Certification & Consultancy",
    subtitle: "ISO 9001, 14001, 45001",
    image: "/hero.jpg",
  },
  {
    title: "API Q1 Consultancy",
    subtitle: "Oil & Gas Sector",
    image: "/hero.jpg",
  },
  {
    title: "NDT Training & Certification",
    subtitle: "Technical Services",
    image: "/hero.jpg",
  },
  {
    title: "Welding Training & Certification",
    subtitle: "Professional Development",
    image: "/hero.jpg",
  },
  {
    title: "Inspection Services",
    subtitle: "Quality Assurance",
    image: "/hero.jpg",
  },
  {
    title: "Audit & Compliance Management",
    subtitle: "Risk Management",
    image: "/hero.jpg",
  },
];

export default function Carousel(): JSX.Element {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 300;
  const gap = 24;
  const totalWidth = items.length * (cardWidth + gap);

  const maxDrag = -(totalWidth - cardWidth);

  const slide = (direction: "prev" | "next") => {
    const delta = direction === "next" ? -(cardWidth + gap) : cardWidth + gap;
    const nextX = Math.max(Math.min(x.get() + delta, 0), maxDrag);

    animate(x, nextX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Track */}
      <motion.div
        ref={containerRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: maxDrag, right: 0 }}
        dragElastic={0.1}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="md:min-w-[300px] min-w-full rounded-2xl bg-white shadow-md overflow-hidden"
          >
            <div className="relative h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Navigation */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => slide("prev")}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border hover:bg-black hover:text-white transition"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => slide("next")}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white border hover:bg-black hover:text-white transition"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
