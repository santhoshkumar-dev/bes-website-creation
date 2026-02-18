"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Award,
  CheckCircle2,
  FileText,
  Users,
  Smartphone,
  BarChart3,
  Target,
  Cog,
} from "lucide-react";
import Link from "next/link";

export default function ISOCertificationPage() {
  const isoStandards = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management Systems",
      description:
        "Systematic approach to customer satisfaction, process control, and continuous improvement.",
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management Systems",
      description:
        "Environmental responsibility, regulatory compliance, and sustainability aligned with business objectives.",
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description:
        "Worker safety framework reducing workplace risks and creating safer conditions.",
    },
    {
      standard: "ISO 27001:2022",
      title: "Information Security",
      description:
        "Information security controls, risk management, and data protection for business continuity.",
    },
    {
      standard: "ISO/IEC 17025:2017",
      title: "Testing & Calibration Laboratories",
      description:
        "Competence requirements for testing and calibration laboratories ensuring reliable results.",
    },
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Maturity Assessment & Roadmap",
      description:
        "Gap analysis of current state, identification of improvement areas, and practical implementation roadmap.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "PDCA & Risk Integration",
      description:
        "Plan-Do-Check-Act cycles embedded into operations with risk-based thinking across all processes.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Process Mapping & Documentation",
      description:
        "Clear process flows, work instructions, and digital document control with version management.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Approvals & Monitoring",
      description:
        "Real-time approval workflows, mobile inspection apps, and digital audit checklists.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Internal Audit Training",
      description:
        "Competent internal auditors trained on requirements, audit techniques, and NC closure.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Coordination",
      description:
        "Liaison with accredited certification bodies, audit scheduling, and gap closure support.",
    },
  ];

  const outcomes = [
    "Operational efficiency through streamlined processes",
    "Audit smoothness with zero-surprise readiness",
    "Growth stability via consistent performance",
    "Risk reduction through proactive controls",
    "Customer confidence and stakeholder trust",
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/iso.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              ISO Management System Consultancy
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Design audit-ready systems improving control and reducing risk
              across ISO 9001, 14001, 45001, 27001, and 17025 standards
            </p>
          </div>
        </div>
      </section>

      {/* End-to-End Support */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            End-to-End ISO Implementation
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            BESCERT provides comprehensive support for ISO management
            systems—from gap analysis and process mapping to risk-based
            planning, internal audits, and certification coordination. Our
            implementations emphasize usability, digital documentation, and
            business alignment, resulting in systems that run operations—not
            just pass audits.
          </p>
        </div>
      </section>

      {/* ISO Standards Supported */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            ISO Standards We Support
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isoStandards.map((standard, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3">
                  <div className="text-sm font-semibold text-bes-accent uppercase tracking-wide">
                    {standard.standard}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {standard.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Our Implementation Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {step.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
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

          <div className="text-center pt-4">
            <Link href="/consultancy-assurance">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-bes-primary text-bes-primary hover:bg-bes-primary hover:text-white font-semibold"
              >
                Learn About Our One-Year Assurance Model
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 80/20 Model */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary">
            80% Implementation | 20% Planning
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            We don't create documents that sit on shelves. We build systems your
            teams use daily to control processes, with digital tools for
            real-time visibility and error prevention.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for ISO Certification?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss which ISO standards fit your needs and how we can
            implement audit-ready systems
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
