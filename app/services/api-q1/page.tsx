"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Shield,
  FileCheck,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function APIQ1Page() {
  const keyAreas = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Product Realization",
      description:
        "Comprehensive control of design, manufacturing, and purchase order requirements specific to API products.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Risk Management",
      description:
        "Risk-based thinking applied to product quality, supply chain, and process control.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Technical Requirements",
      description:
        "Compliance with API specifications, material traceability, and technical documentation.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continual Improvement",
      description:
        "Nonconformance management, corrective/preventive actions, and performance monitoring.",
    },
  ];

  const implementation = [
    {
      phase: "Phase 1: Gap Analysis",
      duration: "2-3 weeks",
      activities: [
        "Review current QMS against API Q1",
        "Identify gaps and risks",
        "Develop implementation roadmap",
        "Resource planning",
      ],
    },
    {
      phase: "Phase 2: System Design",
      duration: "4-6 weeks",
      activities: [
        "Process mapping and documentation",
        "Risk assessment and controls",
        "Procedure development",
        "Digital platform setup",
      ],
    },
    {
      phase: "Phase 3: Implementation",
      duration: "8-12 weeks",
      activities: [
        "On-site implementation support",
        "Team training and competency",
        "Trial runs and verification",
        "Internal audit program setup",
      ],
    },
    {
      phase: "Phase 4: Audit Readiness",
      duration: "4-6 weeks",
      activities: [
        "Pre-assessment audit",
        "NC closure and verification",
        "Management review preparation",
        "Certification audit support",
      ],
    },
  ];

  const benefits = [
    "Access to API monogram licensing",
    "Enhanced customer confidence in oil & gas sector",
    "Improved product quality and consistency",
    "Reduced warranty and rework costs",
    "Systematic risk management",
    "Competitive advantage in API market",
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
              API Q1 Consultancy
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Specialized quality management system implementation for oil & gas
              manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* What is API Q1 */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            What is API Q1?
          </h2>

          <div className="space-y-4 text-lg text-black/70 leading-relaxed">
            <p>
              <strong>API Spec Q1 (9th Edition)</strong> is the American
              Petroleum Institute's quality management system specification for
              manufacturers of API-specified products.
            </p>

            <p>
              It extends ISO 9001 requirements with industry-specific controls
              for product realization, material traceability, technical
              requirements, and risk management critical to oil & gas
              operations.
            </p>

            <p className="font-semibold text-bes-primary">
              API Q1 certification is a prerequisite for organizations seeking
              API monogram licensing—the recognized mark of quality in the oil &
              gas industry.
            </p>
          </div>
        </div>
      </section>

      {/* Key Implementation Areas */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Key Implementation Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {keyAreas.map((area, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-bes-primary">
                    {area.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {area.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Implementation Roadmap
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Structured approach from gap analysis to certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {implementation.map((phase, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-bes-accent uppercase">
                        {phase.phase}
                      </div>
                      <div className="text-xs text-black/60">
                        {phase.duration}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-bes-primary">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-bes-accent mt-0.5 flex-shrink-0" />
                        <span className="text-black/70">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Benefits of API Q1 Certification
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 flex flex-row items-center gap-4">
                  <Shield className="w-8 h-8 text-bes-primary flex-shrink-0" />
                  <p className="text-black/70">{benefit}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with ISO */}
      <section className="px-4 md:px-8 py-12 bg-bes-accent/10 rounded-3xl">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Integration with ISO Systems
          </h2>

          <p className="text-lg text-black/70 leading-relaxed text-center">
            Already have ISO 9001? We integrate API Q1 requirements into your
            existing quality management system, avoiding duplication and
            maintaining a single, unified system.
          </p>

          <div className="bg-white p-6 rounded-2xl border border-bes-primary/20">
            <p className="text-black/70 leading-relaxed">
              <strong className="text-bes-primary">BES Approach:</strong> We
              don't create separate systems. We enhance your ISO 9001 QMS with
              API Q1-specific requirements (product realization, risk
              assessment, technical specifications) using the same digital
              platforms and processes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for API Q1 Certification?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss your API Q1 implementation and monogram licensing path
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
            <Link href="/services/iso">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                View ISO Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
