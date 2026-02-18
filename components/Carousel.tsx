"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CarouselItemData {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const items: CarouselItemData[] = [
  {
    title: "ISO Certification & Consultancy",
    subtitle: "ISO 9001, 14001, 45001",
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

export default function ServicesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Link href={item.href} className="block">
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative h-[400px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
}
