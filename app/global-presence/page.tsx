"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { MapPin, Globe, Flag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function GlobalPresencePage() {
  const indiaLocations = [
    { city: "Chennai", status: "Headquarters", state: "Tamil Nadu" },
    { city: "Trichy", status: "Regional Office", state: "Tamil Nadu" },
    { city: "Coimbatore", status: "Service Center", state: "Tamil Nadu" },
    { city: "PAN-India", status: "Service Delivery", state: "All States" },
  ];

  const internationalMarkets = [
    { country: "Nepal", region: "South Asia" },
    { country: "Singapore", region: "Southeast Asia" },
    { country: "Malaysia", region: "Southeast Asia" },
    { country: "Saudi Arabia (KSA)", region: "Middle East" },
    { country: "United Arab Emirates (UAE)", region: "Middle East" },
    { country: "Kuwait", region: "Middle East" },
    { country: "Qatar", region: "Middle East" },
    { country: "Bahrain", region: "Middle East" },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,51,102,0.85), rgba(0,51,102,0.85)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Global Presence
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Enterprise delivery capabilities across India and international
              markets
            </p>
          </div>
        </div>
      </section>

      {/* India Presence */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-bes-primary" />
              <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
                India Operations
              </h2>
            </div>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Headquartered in Chennai with service delivery across Tamil Nadu
              and PAN-India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indiaLocations.map((location, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-bes-primary">
                    {location.city}
                  </h3>
                  <p className="text-sm font-semibold text-bes-accent">
                    {location.status}
                  </p>
                  <p className="text-sm text-black/70">{location.state}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Markets */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-bes-primary" />
              <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
                International Markets
              </h2>
            </div>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Serving organizations across Asia and the Middle East with global
              standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalMarkets.map((market, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    <Flag className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {market.country}
                  </h3>
                  <p className="text-sm text-black/70">{market.region}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Delivery Capabilities */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Enterprise Delivery Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Local Support
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  On-site implementation support and audit readiness programs
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Global Standards
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  ISO, API, and international code compliance expertise
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Multi-Site Projects
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  Coordinated implementation across multiple facilities
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Work with BESCERT?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Whether you're in India or international markets, we bring the same
            commitment to practical implementation and sustained results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
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
        </div>
      </section>
    </main>
  );
}
