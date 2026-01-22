"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Flame,
  FileText,
  Users,
  Award,
  Shield,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function WeldingServicesPage() {
  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Welder Training Programs",
      description:
        "Comprehensive training for various welding processes and positions.",
      details: [
        "SMAW (Shielded Metal Arc Welding)",
        "GTAW/TIG (Gas Tungsten Arc Welding)",
        "GMAW/MIG (Gas Metal Arc Welding)",
        "FCAW (Flux-Cored Arc Welding)",
        "SAW (Submerged Arc Welding)",
      ],
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "WPS/PQR Development",
      description:
        "Welding Procedure Specification and Procedure Qualification Record preparation.",
      details: [
        "Procedure development per codes (ASME, AWS, API)",
        "Qualification testing and documentation",
        "Essential variable analysis",
        "pWPS (Preliminary WPS) preparation",
      ],
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Welder Qualification Testing",
      description:
        "Welder performance qualification per international standards.",
      details: [
        "ASME Section IX qualification",
        "AWS D1.1 qualification",
        "API 1104 qualification",
        "ISO 9606 qualification",
        "Test piece evaluation and documentation",
      ],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Technical Audits & Inspection",
      description:
        "Welding quality audits and process compliance verification.",
      details: [
        "Welding procedure compliance audits",
        "Welder qualification verification",
        "Equipment and consumable control",
        "WPS implementation review",
      ],
    },
  ];

  const standards = [
    {
      code: "ASME Section IX",
      description: "Welding, Brazing, and Fusing Qualifications",
    },
    {
      code: "AWS D1.1",
      description: "Structural Welding Code - Steel",
    },
    {
      code: "API 1104",
      description: "Welding of Pipelines and Related Facilities",
    },
    {
      code: "ISO 9606",
      description: "Qualification Testing of Welders",
    },
    {
      code: "ISO 15614",
      description: "Specification and Qualification of Welding Procedures",
    },
  ];

  const processes = [
    "SMAW - Stick Welding",
    "GTAW/TIG - Tungsten Inert Gas",
    "GMAW/MIG - Metal Inert Gas",
    "FCAW - Flux-Cored Arc Welding",
    "SAW - Submerged Arc Welding",
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
              Welding Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Training, qualification, and procedure development for welding
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Comprehensive Welding Services
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              From training to qualification and technical support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {service.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-bes-primary">
                      {service.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-bes-primary/10">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-bes-accent mt-0.5 flex-shrink-0" />
                        <span className="text-black/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Welding Processes */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Welding Processes Covered
            </h2>
            <p className="text-lg text-black/70">
              Training and qualification for all major welding processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processes.map((process, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 flex items-center gap-4">
                  <Flame className="w-8 h-8 text-bes-primary flex-shrink-0" />
                  <p className="text-black/70 font-medium">{process}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Codes */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Relevant Standards & Codes
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Our services align with internationally recognized welding codes
              and standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <Card
                key={index}
                className="border border-bes-primary/20 hover:border-bes-primary transition-all duration-300"
              >
                <CardBody className="p-6 flex items-start gap-4">
                  <FileText className="w-8 h-8 text-bes-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-bes-primary">
                      {standard.code}
                    </h3>
                    <p className="text-sm text-black/70 mt-1">
                      {standard.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BES */}
      <section className="px-4 md:px-8 py-12 bg-bes-accent/10 rounded-3xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Why Choose BES for Welding Services
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-bes-primary">
                  Experienced Instructors
                </h3>
                <p className="text-sm text-black/70">
                  Our trainers are certified welding inspectors (CWI) and
                  qualified welding supervisors with decades of industry
                  experience.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-bes-primary">
                  Code Compliance
                </h3>
                <p className="text-sm text-black/70">
                  All procedures and qualifications strictly follow applicable
                  codes (ASME, AWS, API, ISO) for acceptance by clients and
                  regulatory bodies.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-bes-primary">
                  Practical Approach
                </h3>
                <p className="text-sm text-black/70">
                  Hands-on training with real welding equipment and
                  project-based scenarios that mirror actual work conditions.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-bes-primary">
                  Documentation Support
                </h3>
                <p className="text-sm text-black/70">
                  Complete documentation packages including WPS, PQR, welder
                  qualification records, and continuity logs.
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
            Need Welding Services?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Contact us for training, qualification testing, or technical support
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
