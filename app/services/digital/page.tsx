"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Database,
  Smartphone,
  BarChart3,
  FileCheck,
  Zap,
  Shield,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function DigitalSystemsPage() {
  const capabilities = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Management Software",
      description:
        "Document control, version management, approval workflows, and full traceability across all management system records.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Apps",
      description:
        "Real-time field data capture, mobile approvals, inspection checklists, and audit apps for iOS and Android.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "KPI Dashboards",
      description:
        "Live performance metrics, compliance status monitoring, NCR tracking, and management reporting dashboards.",
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Digital Training & Exams",
      description:
        "Online assessments with instant results, competency tracking platforms, and certification management systems.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Mistake-Proof Reporting",
      description:
        "Error-free data entry, automated calculations, real-time validation, and digital photo documentation.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "NCR Tracking",
      description:
        "Nonconformity recording, root cause analysis workflows, corrective action tracking, and closure verification.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Full Traceability",
      description:
        "Complete audit trails for all transactions, approvals, changes, and records with timestamp and user tracking.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "System Stabilization",
      description:
        "Post-implementation support, user training refreshers, platform optimization, and ongoing technical maintenance.",
    },
  ];

  const integrationAreas = [
    {
      service: "ISO Management Systems",
      integration:
        "Document control, internal audits, management reviews, NCR tracking, PDCA cycles",
    },
    {
      service: "API Compliance",
      integration:
        "Product traceability, supplier evaluations, MOC workflows, nonconformity management",
    },
    {
      service: "NDT Services",
      integration:
        "Digital examinations, personnel records, inspection reports, competency tracking",
    },
    {
      service: "Welding Services",
      integration:
        "Welder qualifications, WPS/PQR records, inspection reports, defect analysis",
    },
    {
      service: "Inspection & Audit",
      integration:
        "Mobile checklists, finding logs, corrective actions, audit schedules",
    },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/digital.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Digital Systems & Continuous Support
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Core differentiator: management software, dashboards, mobile apps
              integrated into all services for sustained operational control
            </p>
          </div>
        </div>
      </section>

      {/* Core Differentiator */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Not an Add-on—It's Mandatory
          </h2>

          <p className="text-lg text-black/70 leading-relaxed text-center max-w-4xl mx-auto">
            Every BESCERT service includes digital enablement. Software,
            dashboards, mobile apps, and real-time reporting are integrated into
            all implementations (ISO, API, NDT, Welding) for error-free
            reporting, NCR tracking, and sustained operational control.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Platform Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary text-center">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed text-center">
                    {capability.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Across Services */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Integrated Into All Services
          </h2>

          <div className="space-y-4">
            {integrationAreas.map((area, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6">
                  <h3 className="text-lg font-bold text-bes-primary mb-2">
                    {area.service}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {area.integration}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Visibility */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary text-center">
            Real-Time Approvals & Monitoring
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">
                  Instant
                </div>
                <h3 className="text-lg font-semibold">Approvals</h3>
                <p className="text-sm text-black/70">
                  Mobile approvals for documents, inspections, and management
                  reviews
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">Live</div>
                <h3 className="text-lg font-semibold">Dashboards</h3>
                <p className="text-sm text-black/70">
                  Real-time KPIs, compliance status, and performance metrics
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="text-3xl font-bold text-bes-primary">100%</div>
                <h3 className="text-lg font-semibold">Traceability</h3>
                <p className="text-sm text-black/70">
                  Complete audit trails with timestamps and user tracking
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuous Support */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary">
            System Stabilization Post-Implementation
          </h2>

          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Digital platforms require tuning based on actual usage. We monitor
            performance, gather feedback, and optimize workflows to ensure
            maximum user adoption and sustained value delivery.
          </p>

          <Link href="/consultancy-assurance">
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-bes-primary text-bes-primary hover:bg-bes-primary hover:text-white font-semibold"
            >
              Learn About Our One-Year Assurance
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for Digital Transformation?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how digital systems can strengthen your compliance and
            operational control
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
