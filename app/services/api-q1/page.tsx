"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  FileCheck,
  CheckCircle2,
  TrendingUp,
  Shield,
  BarChart3,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function APICompliancePage() {
  const keyFocusAreas = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Gap Analysis & Roadmap",
      description:
        "Assessment of current practices against API Q1 requirements with practical implementation plan.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Nonconformity Management",
      description:
        "Robust NC tracking, root cause analysis, and corrective action programs for continuous improvement.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Process Control Compliance",
      description:
        "Product realization, supplier control, MOC procedures, and traceability systems.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supplier & MOC Controls",
      description:
        "Supplier evaluation, monitoring programs, and management of change procedures.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Audit Readiness Programs",
      description:
        "Internal audit systems, NC closure support, and certification body coordination.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continual Improvement",
      description:
        "PDCA integration, risk-based thinking, and performance monitoring for sustained compliance.",
    },
  ];

  const businessValue = [
    "Stronger accountability through documented processes",
    "Stakeholder confidence via API compliance",
    "Reduced risk through traceability systems",
    "Customer acceptance for oil & gas projects",
    "Competitive advantage in EPC markets",
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
              API Compliance & Technical Consultancy
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Oil & gas/EPC compliance via API Q1 gap analysis, MOC controls,
              traceability, and audit readiness programs
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            API Q1 for Oil & Gas Excellence
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            BESCERT supports fabrication and engineering organizations with API
            Q1 implementation—a quality management system specifically designed
            for oil & gas manufacturing and service companies. Our focus is on
            product realization, supplier control, management of change (MOC),
            and audit readiness, ensuring reliability through traceability,
            continual improvement, and reduced risks.
          </p>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFocusAreas.map((area, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {area.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {area.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Business Value Delivered
          </h2>

          <Card className="border border-bes-primary/20">
            <CardBody className="p-8">
              <ul className="space-y-3">
                {businessValue.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bes-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-black/70">{value}</span>
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
            Digital Dashboards Included
          </h2>

          <p className="text-lg text-black/70 text-center max-w-3xl mx-auto leading-relaxed">
            All API Q1 implementations include digital dashboards for real-time
            tracking of nonconformities, supplier performance, audit status, and
            regulatory compliance. Mobile apps enable field inspections and
            instant NCR logging.
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

      {/* One-Year Assurance */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary">
            One-Year Assurance Included
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Continuous technical support, surveillance audit assistance, and
            system stabilization to ensure sustained API Q1 compliance and
            business growth.
          </p>
          <Link href="/consultancy-assurance">
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-bes-primary text-bes-primary hover:bg-bes-primary hover:text-white font-semibold"
            >
              Learn About Our Assurance Model
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for API Q1 Compliance?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how we can build audit-ready systems for your oil &
            gas operations
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
