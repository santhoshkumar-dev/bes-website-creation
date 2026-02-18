"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Microscope,
  CheckCircle2,
  Award,
  Smartphone,
  FileCheck,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function NDTServicesPage() {
  const ndtMethods = [
    { code: "RT", name: "Radiographic Testing", levels: "I / II" },
    { code: "UT", name: "Ultrasonic Testing", levels: "I / II" },
    { code: "MT", name: "Magnetic Particle Testing", levels: "I / II" },
    { code: "PT", name: "Liquid Penetrant Testing", levels: "I / II" },
    { code: "VT", name: "Visual Testing", levels: "I / II" },
  ];

  const servicesIncluded = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Field-Oriented Training",
      description:
        "Practical, hands-on training programs aligned with international standards and industry requirements.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Examination System",
      description:
        "Instant-result exams with full transparency, eliminating manual grading errors and providing immediate competency verification.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Compliance Verification",
      description:
        "Procedure guidance, technical audits, and alignment with code requirements for inspection programs.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Error-Free Reporting",
      description:
        "Digital inspection reports with automated calculations, photo documentation, and real-time validation.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Personnel Certification Support",
      description:
        "Preparation and coordination with certification bodies for NDT personnel qualification.",
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Technical Inspection Support",
      description:
        "On-site inspection guidance, procedure development, and quality assurance programs.",
    },
  ];

  const advantages = [
    "Audit and client acceptance through certified, competent personnel",
    "Reliable inspections reducing defect escapes and rework",
    "Digital exam results with instant transparency",
    "Procedure compliance ensuring code alignment",
    "Technical support for inspection readiness",
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/services (5).jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              NDT Training, Certification & Technical Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Competent personnel for RT, UT, MT, PT, VT (Levels I/II) with
              digital examinations and procedure guidance
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Comprehensive NDT Services
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            BESCERT provides training and support for non-destructive testing
            personnel across radiographic, ultrasonic, magnetic particle, liquid
            penetrant, and visual testing methods at Levels I and II. Our
            digital examination system provides immediate, transparent results,
            eliminating delays and ensuring competency verification. We also
            offer procedure guidance, technical audits, and inspection readiness
            programs.
          </p>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            NDT Methods Supported
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ndtMethods.map((method, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3 text-center">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-bes-accent">
                    {method.code}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {method.name}
                  </h3>
                  <p className="text-sm text-black/60">
                    Levels: {method.levels}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Services Included
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIncluded.map((service, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Key Advantages
          </h2>

          <Card className="border border-bes-primary/20">
            <CardBody className="p-8">
              <ul className="space-y-3">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bes-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-black/70">{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Digital Training */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary">
            Digital Training Platform
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Our digital examination system provides instant results with
            complete transparency—no delays, no manual errors. Trainees receive
            immediate feedback, and organizations get verified competency
            records for audit confidence.
          </p>
          <Link href="/services/digital">
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-bes-primary text-bes-primary hover:bg-bes-primary hover:text-white font-semibold"
            >
              Learn About Digital Systems
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build NDT Competency?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss your NDT training, certification, and inspection
            support needs
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
