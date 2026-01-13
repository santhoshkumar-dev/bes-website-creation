"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import ParallaxCard from "./ParallaxCard";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  title: string;
  subtitle: string;
  image: string;
}

const items: CarouselItem[] = [
  {
    title: "Office Spaces",
    subtitle: "4000+ objects",
    image: "/hero.jpg",
  },
  {
    title: "Warehouses",
    subtitle: "1000+ objects",
    image: "/hero.jpg",
  },
  {
    title: "Land Plots",
    subtitle: "2000+ objects",
    image: "/hero.jpg",
  },
  {
    title: "Retail",
    subtitle: "800+ objects",
    image: "/hero.jpg",
  },
  {
    title: "Commercial",
    subtitle: "1500+ objects",
    image: "/hero.jpg",
  },
];

// Duplicate for seamless loop
const duplicatedItems = [...items, ...items];

export default function InfiniteParallaxCarousel() {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 320;
  const cardGap = 24;
  const totalWidth = (cardWidth + cardGap) * items.length;

  // Wrap around transform
  const x = useTransform(baseX, (v) => {
    const wrapped = ((v % totalWidth) + totalWidth) % totalWidth;
    return -wrapped;
  });

  // Navigation handlers with smooth animation
  const handlePrevious = () => {
    const newValue = baseX.get() + cardWidth + cardGap;
    animate(baseX, newValue, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  const handleNext = () => {
    const newValue = baseX.get() - cardWidth - cardGap;
    animate(baseX, newValue, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl w-full"
      >
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragElastic={0.05}
          dragMomentum={false}
          onDrag={(_, info) => {
            const newValue = baseX.get() + info.delta.x;
            baseX.set(newValue);
          }}
        >
          {duplicatedItems.map((item, i) => (
            <ParallaxCard key={i} item={item} carouselX={baseX} />
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-end gap-4 justify-end">
        <motion.button
          onClick={handlePrevious}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-black hover:text-white hover:shadow-xl transition-shadow border border-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous"
        >
          <ChevronLeft />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white hover:bg-black hover:text-white hover:shadow-xl transition-shadow border border-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
}
