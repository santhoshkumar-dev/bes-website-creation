"use client";

import Link from "next/link";
import Carousel from "./Carousel";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "ISO Certification & Consultancy",
    subtitle: "ISO 9001, 14001, 45001, 27001, 17025",
    image: "/iso.jpg",
    href: "/services/iso",
  },
  {
    title: "API Q1 Consultancy",
    subtitle: "Oil & Gas Sector",
    image: "/services (2).jpg",
    href: "/services/api-q1",
  },
  {
    title: "NDT Training & Certification",
    subtitle: "Technical Services",
    image: "/services (3).jpg",
    href: "/services/ndt",
  },
  {
    title: "Welding Training & Certification",
    subtitle: "Professional Development",
    image: "/services (4).jpg",
    href: "/services/welding",
  },
  {
    title: "Inspection Services",
    subtitle: "Quality Assurance",
    image: "/services (5).jpg",
    href: "/services/inspection",
  },
  {
    title: "Audit & Compliance Management",
    subtitle: "Risk Management",
    image: "/services (6).jpg",
    href: "/services/inspection",
  },
];

function Catalog() {
  return (
    <section className="flex flex-col justify-between gap-12 py-12">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our Professional Services
        </h2>

        <p className="text-lg text-black/60">
          Comprehensive certification, training, and compliance solutions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="h-full">
            <Link href={item.href} className="block h-full group">
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
