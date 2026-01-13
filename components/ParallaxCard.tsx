"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface CarouselItem {
  title: string;
  subtitle: string;
  image: string;
}

interface ParallaxCardProps {
  item: CarouselItem;
  carouselX: MotionValue<number>;
}

export default function ParallaxCard({ item, carouselX }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // card position relative to viewport center
  const imageX = useTransform(carouselX, (x) => {
    if (!cardRef.current) return 0;

    const rect = cardRef.current.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const viewportCenter = window.innerWidth / 2;

    const distance = cardCenter - viewportCenter;

    // Reduced parallax strength to prevent overflow
    return Math.max(Math.min(distance * -0.05, 20), -20);
  });

  return (
    <motion.div
      ref={cardRef}
      className="min-w-[300px] rounded-2xl bg-white shadow-md overflow-hidden"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-[400px] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ x: imageX }}
          draggable={false}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.subtitle}</p>
      </div>
    </motion.div>
  );
}
