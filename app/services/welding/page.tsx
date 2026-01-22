"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Flame,
  CheckCircle2,
  FileCheck,
  Award,
  TrendingDown,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function WeldingServicesPage() {
  const servicesOffered = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Welder Qualification Testing",
      description:
        "Performance qualification tests per international codes (ASME, AWS, ISO) with documented records.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "WPS/PQR Review & Development",
      description:
        "Welding procedure specifications and procedure qualification records aligned with project requirements.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Inspection & Technical Audits",
      description:
        "Weld quality inspections, procedure compliance audits, and defect analysis for continuous improvement.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Rework Reduction Programs",
      description:
        "Root cause analysis of welding defects and implementation of corrective actions to reduce rework costs.",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Welder Training Programs",
      description:
        "Hands-on training for welders across various processes (SMAW, GMAW, GTAW, SAW, FCAW) and materials.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Code Compliance Support",
      description:
        "Guidance on international welding codes and standards for reliable fabrication control.",
    },
  ];

  const outcomes = [
    "Weld consistency through qualified welders and approved procedures",
    "Lower rework costs via defect prevention and root cause analysis",
    "Project confidence with documented welder qualifications",
    "Code alignment ensuring client and regulatory acceptance",
    "Fabrication control through inspection and audit programs",
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/welder.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welding Training, Certification & Technical Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Welder qualification, defect analysis, WPS/PQR development, and
              code compliance for reliable fabrication
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Comprehensive Welding Services
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            BESCERT provides welder qualification testing, procedure review and
            development, technical inspections, and root cause analysis per
            international codes. Our services reduce defects, ensure fabrication
            reliability, and maintain code compliance for projects across
            manufacturing, oil & gas, and EPC sectors.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Services Offered
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesOffered.map((service, index) => (
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

      {/* Outcomes */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Business Outcomes
          </h2>

          <Card className="border border-bes-primary/20">
            <CardBody className="p-8">
              <ul className="space-y-3">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bes-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-black/70">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Digital Integration */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Digital Tracking Integrated
          </h2>

          <p className="text-lg text-black/70 text-center max-w-3xl mx-auto leading-relaxed">
            Welder qualifications, procedure records, inspection reports, and
            corrective actions are tracked digitally with full traceability and
            audit readiness. Mobile apps enable field inspections with instant
            NCR logging.
          </p>

          <div className="text-center pt-4">
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
        </div>
      </section>

      {/* Code Compliance */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            International Code Compliance
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-bes-primary">ASME</h3>
                <p className="text-sm text-black/70 mt-2">
                  ASME Section IX welding qualifications
                </p>
              </CardBody>
            </Card>
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-bes-primary">AWS</h3>
                <p className="text-sm text-black/70 mt-2">
                  AWS D1.1, D1.6 structural welding codes
                </p>
              </CardBody>
            </Card>
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-bes-primary">ISO</h3>
                <p className="text-sm text-black/70 mt-2">
                  ISO 9606, ISO 15614 welder/procedure qualifications
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
            Ready to Improve Welding Quality?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss welder qualification, procedure development, and
            inspection support for your projects
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
