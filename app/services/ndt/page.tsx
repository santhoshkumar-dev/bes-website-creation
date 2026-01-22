"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Microscope,
  Eye,
  Radio,
  Waves,
  GraduationCap,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function NDTServicesPage() {
  const methods = [
    {
      icon: <Eye className="w-8 h-8" />,
      method: "PT",
      title: "Penetrant Testing",
      description:
        "Liquid penetrant inspection for detecting surface-breaking defects in non-porous materials.",
      applications: [
        "Weld inspection",
        "Crack detection",
        "Porosity identification",
      ],
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      method: "MT",
      title: "Magnetic Particle Testing",
      description:
        "Electromagnetic inspection for surface and near-surface discontinuities in ferromagnetic materials.",
      applications: [
        "Welded joints",
        "Forgings and castings",
        "Surface crack detection",
      ],
    },
    {
      icon: <Radio className="w-8 h-8" />,
      method: "RT",
      title: "Radiographic Testing",
      description:
        "X-ray and gamma-ray imaging for internal defect detection in welds, castings, and components.",
      applications: [
        "Weld quality assessment",
        "Internal porosity",
        "Inclusion detection",
      ],
    },
    {
      icon: <Waves className="w-8 h-8" />,
      method: "UT",
      title: "Ultrasonic Testing",
      description:
        "High-frequency sound waves for thickness measurement and internal flaw detection.",
      applications: [
        "Thickness gauging",
        "Lamination detection",
        "Corrosion assessment",
      ],
    },
    {
      icon: <Eye className="w-8 h-8" />,
      method: "VT",
      title: "Visual Testing",
      description:
        "Direct visual examination and remote visual inspection (RVI) for surface condition assessment.",
      applications: [
        "Weld surface inspection",
        "Dimensional verification",
        "General condition assessment",
      ],
    },
  ];

  const services = [
    {
      title: "NDT Training",
      icon: <GraduationCap className="w-10 h-10" />,
      description:
        "Comprehensive training programs for NDT Level I, Level II, and Level III certifications aligned with ASNT SNT-TC-1A, ISO 9712, and EN 473.",
      offerings: [
        "Theory and practical training",
        "Method-specific courses (PT, MT, RT, UT, VT)",
        "On-site or facility-based training",
        "Examination preparation",
      ],
    },
    {
      title: "Personnel Certification",
      icon: <Award className="w-10 h-10" />,
      description:
        "NDT personnel qualification and certification in accordance with internationally recognized standards.",
      offerings: [
        "Written and practical examinations",
        "Vision testing coordination",
        "Certification issuance",
        "Recertification support",
      ],
    },
    {
      title: "Inspection & Technical Support",
      icon: <Microscope className="w-10 h-10" />,
      description:
        "On-site NDT inspection services and technical consultancy for projects and operations.",
      offerings: [
        "Project-based NDT services",
        "Third-party inspection",
        "Procedure development",
        "Equipment calibration support",
      ],
    },
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
              NDT Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Non-Destructive Testing training, certification, and inspection
              support for quality assurance
            </p>
          </div>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              NDT Methods We Support
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Comprehensive coverage of critical inspection techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.slice(0, 3).map((method, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-bes-primary text-white">
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-bes-accent">
                        {method.method}
                      </div>
                      <h3 className="text-xl font-bold text-bes-primary">
                        {method.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-black/70 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="pt-3 border-t border-bes-primary/10">
                    <p className="text-xs font-semibold text-black/60 uppercase mb-2">
                      Applications
                    </p>
                    <ul className="space-y-1">
                      {method.applications.map((app, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-bes-accent mt-0.5">•</span>
                          <span className="text-black/70">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {methods.slice(3).map((method, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-bes-primary text-white">
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-bes-accent">
                        {method.method}
                      </div>
                      <h3 className="text-xl font-bold text-bes-primary">
                        {method.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-black/70 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="pt-3 border-t border-bes-primary/10">
                    <p className="text-xs font-semibold text-black/60 uppercase mb-2">
                      Applications
                    </p>
                    <ul className="space-y-1">
                      {method.applications.map((app, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-bes-accent mt-0.5">•</span>
                          <span className="text-black/70">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Our NDT Service Offerings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-bes-primary">
                    {service.title}
                  </h3>

                  <p className="text-black/70 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-bes-primary/10">
                    {service.offerings.map((offering, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-bes-accent mt-0.5">✓</span>
                        <span className="text-black/70">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Standards & Compliance
          </h2>

          <p className="text-lg text-black/70 text-center leading-relaxed">
            Our NDT training and certification programs are aligned with
            internationally recognized standards
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20 bg-bes-primary/5">
              <CardBody className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold text-bes-primary">
                  ASNT SNT-TC-1A
                </h3>
                <p className="text-sm text-black/70">
                  American Society for Nondestructive Testing
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20 bg-bes-primary/5">
              <CardBody className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold text-bes-primary">ISO 9712</h3>
                <p className="text-sm text-black/70">
                  International NDT personnel qualification standard
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20 bg-bes-primary/5">
              <CardBody className="p-6 text-center space-y-2">
                <h3 className="text-xl font-bold text-bes-primary">EN 473</h3>
                <p className="text-sm text-black/70">
                  European NDT certification standard
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Need NDT Services?</h2>
          <p className="text-lg md:text-xl opacity-90">
            Contact us for training, certification, or inspection support
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
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
