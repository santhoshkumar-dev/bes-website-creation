"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  ClipboardCheck,
  CheckCircle2,
  Users,
  FileSearch,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function InspectionAuditPage() {
  const servicesOffered = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Internal Audit Programs",
      description:
        "Scheduled internal audits per ISO/API requirements with competent auditors and digital checklists.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Supplier Assessments",
      description:
        "Supplier evaluation, qualification, and monitoring programs to ensure quality and compliance.",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Gap Analysis",
      description:
        "Current state assessment against standards, identification of gaps, and practical closure plans.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "NCR & Corrective Action Tracking",
      description:
        "Nonconformity recording, root cause analysis, corrective action implementation, and closure verification.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Audit Readiness Programs",
      description:
        "Pre-audit preparation, mock audits, gap closure support, and coordination with certification bodies.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Digital Tracking Systems",
      description:
        "Mobile audit apps, finding logs, action tracking dashboards, and automated closure reminders.",
    },
  ];

  const benefits = [
    "Proactive identification of compliance gaps before external audits",
    "Structured corrective action programs preventing recurring issues",
    "Supplier performance visibility and risk management",
    "Digital tracking ensuring no findings are overlooked",
    "Continuous improvement culture through systematic audits",
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/inspection.jpg')",
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
              Internal audits, supplier assessments, gap analysis, NCR tracking,
              and corrective action programs
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Comprehensive Audit & Inspection Services
          </h2>

          <p className="text-lg text-black/70 leading-relaxed">
            BESCERT provides internal audit programs, supplier assessments, gap
            analysis, and corrective action tracking integrated with digital
            systems. Our approach ensures continuous improvement, proactive gap
            closure, and sustained audit readiness across all management systems
            (ISO, API, NDT, Welding).
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

      {/* Benefits */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Key Benefits
          </h2>

          <Card className="border border-bes-primary/20">
            <CardBody className="p-8">
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-bes-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-black/70">{benefit}</span>
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
            Digital Tracking Systems
          </h2>

          <p className="text-lg text-black/70 text-center max-w-3xl mx-auto leading-relaxed">
            Mobile audit apps enable field inspections with instant finding
            capture. Digital dashboards track all NCRs, corrective actions, and
            closure statuses in real-time. Automated reminders ensure no actions
            are overlooked.
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

      {/* Audit Readiness */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Always Audit-Ready
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <div className="text-3xl font-bold text-bes-primary">Zero</div>
                <h3 className="text-lg font-semibold">Surprises</h3>
                <p className="text-sm text-black/70">
                  Internal audits catch gaps before external bodies arrive
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <div className="text-3xl font-bold text-bes-primary">100%</div>
                <h3 className="text-lg font-semibold">Traceability</h3>
                <p className="text-sm text-black/70">
                  Complete digital records of all findings and closures
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3">
                <div className="text-3xl font-bold text-bes-primary">
                  Continuous
                </div>
                <h3 className="text-lg font-semibold">Improvement</h3>
                <p className="text-sm text-black/70">
                  Systematic audits drive ongoing performance gains
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
            Ready to Strengthen Your Audit Programs?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss internal audits, supplier assessments, and digital
            tracking systems for your organization
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
