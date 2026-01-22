"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  ClipboardCheck,
  Search,
  Users,
  TrendingUp,
  FileText,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function InspectionAuditPage() {
  const services = [
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Internal Audit Programs",
      description:
        "Comprehensive internal audit planning, execution, and reporting for ISO, API, and custom management systems.",
      features: [
        "Annual audit program development",
        "Risk-based audit planning",
        "On-site audit execution",
        "Detailed audit reports",
        "Finding categorization (NC, OFI)",
        "Follow-up and verification",
      ],
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Supplier Audits",
      description:
        "Second-party audits to evaluate supplier quality systems and ensure supply chain compliance.",
      features: [
        "Supplier qualification audits",
        "Ongoing performance audits",
        "Corrective action tracking",
        "Supplier risk assessment",
        "Approved vendor list management",
      ],
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Gap Analysis",
      description:
        "Systematic evaluation of your current systems against ISO, API, or custom requirements.",
      features: [
        "Standard compliance assessment",
        "Gap identification and prioritization",
        "Implementation roadmap",
        "Resource requirement analysis",
        "Timeline and milestone planning",
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Continuous Improvement Tracking",
      description:
        "Structured tracking of corrective actions, preventive actions, and improvement initiatives.",
      features: [
        "CAPA (Corrective and Preventive Action) management",
        "Root cause analysis facilitation",
        "Effectiveness verification",
        "Trend analysis and reporting",
        "Performance improvement monitoring",
      ],
    },
  ];

  const auditTypes = [
    {
      type: "ISO 9001 Quality Audits",
      description:
        "Process-based audits covering all QMS requirements and clause-by-clause compliance.",
    },
    {
      type: "ISO 14001 Environmental Audits",
      description:
        "Environmental aspect evaluation, legal compliance, and EMS effectiveness.",
    },
    {
      type: "ISO 45001 Safety Audits",
      description:
        "Hazard identification, risk assessment, and OH&S management system review.",
    },
    {
      type: "API Q1 Audits",
      description:
        "Product realization focus, APQP conformance, and API-specific requirements.",
    },
    {
      type: "Process Audits",
      description:
        "Deep-dive audits into specific processes (production, inspection, calibration, etc.).",
    },
    {
      type: "Product Audits",
      description:
        "Final product conformance verification against specifications and standards.",
    },
  ];

  const benefits = [
    "Objective third-party assessment",
    "Early identification of nonconformities",
    "Reduced certification audit failures",
    "Continuous improvement culture",
    "Documented compliance evidence",
    "Enhanced operational efficiency",
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
              Inspection & Audit Management
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Systematic audits and inspections for compliance assurance and
              continuous improvement
            </p>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Our Audit & Inspection Services
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Comprehensive audit programs to maintain compliance and drive
              improvement
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
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-bes-accent mt-0.5">✓</span>
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Types of Audits We Conduct
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditTypes.map((audit, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-bes-primary mt-1 flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-bes-primary">
                        {audit.type}
                      </h3>
                      <p className="text-sm text-black/70">
                        {audit.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Benefits of Regular Audits
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 flex items-center gap-4">
                  <AlertCircle className="w-8 h-8 text-bes-primary flex-shrink-0" />
                  <p className="text-black/70 font-medium">{benefit}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="px-4 md:px-8 py-12 bg-bes-accent/10 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Our Audit Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">01</div>
                <h3 className="text-lg font-bold text-bes-primary">Planning</h3>
                <p className="text-sm text-black/70">
                  Audit scope, criteria, schedule, and checklist preparation
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">02</div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Execution
                </h3>
                <p className="text-sm text-black/70">
                  On-site audit, interviews, document review, and evidence
                  collection
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">03</div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Reporting
                </h3>
                <p className="text-sm text-black/70">
                  Detailed audit report with findings, observations, and
                  recommendations
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">04</div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Follow-Up
                </h3>
                <p className="text-sm text-black/70">
                  Corrective action verification and effectiveness confirmation
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
            Need Audit Support?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss your internal audit, supplier audit, or gap analysis
            needs
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
