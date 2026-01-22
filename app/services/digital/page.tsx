"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Database,
  Smartphone,
  BarChart3,
  FileText,
  Bell,
  Shield,
  Cloud,
  Zap,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function DigitalEnablementPage() {
  const platforms = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Management System Software",
      description:
        "Cloud-based QMS, EMS, and OH&S management platforms with complete ISO/API compliance features.",
      features: [
        "Document control and version management",
        "Process workflow automation",
        "Training and competency management",
        "Equipment and calibration tracking",
        "Multi-site and multi-standard support",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Inspection Apps",
      description:
        "Field-ready mobile applications for inspections, audits, and data collection.",
      features: [
        "Offline data capture",
        "Photo and signature capture",
        "GPS location stamping",
        "Real-time sync to cloud",
        "Customizable checklists and forms",
      ],
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Control Systems",
      description:
        "Centralized document management with access control, approval workflows, and revision tracking.",
      features: [
        "Automatic version control",
        "Approval and review workflows",
        "Access permissions and security",
        "Document search and retrieval",
        "Audit trail and change history",
      ],
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "NCR & Action Tracking",
      description:
        "Nonconformance reporting and corrective action management system.",
      features: [
        "NCR creation and assignment",
        "Root cause analysis tools",
        "CAPA tracking and verification",
        "Escalation and deadline alerts",
        "Effectiveness verification",
      ],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "KPI Dashboards",
      description:
        "Real-time performance metrics and management review reporting.",
      features: [
        "Customizable KPI tracking",
        "Visual charts and graphs",
        "Trend analysis",
        "Export to PDF and Excel",
        "Management review reports",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Audit Management",
      description:
        "Comprehensive audit planning, execution, and follow-up platform.",
      features: [
        "Audit program scheduling",
        "Digital audit checklists",
        "Finding categorization",
        "Follow-up and closure tracking",
        "Audit report generation",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Visibility",
      description:
        "Instant access to compliance data, performance metrics, and system status from anywhere.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Audit-Ready Always",
      description:
        "Digital records, automatic trails, and organized documentation ensure continuous audit readiness.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Measurable Improvement",
      description:
        "Data-driven insights enable fact-based decisions and continuous performance improvement.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reduced Risk",
      description:
        "Automated alerts, approval workflows, and validation checks minimize human error and oversight.",
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
              Digital Enablement
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Transform compliance into a competitive advantage with digital
              management systems
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Why Digital Systems Matter
          </h2>

          <div className="bg-gradient-to-br from-bes-primary to-bes-primary-light text-white p-8 md:p-12 rounded-3xl space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>Paper-based systems cannot compete.</strong> Manual files,
              spreadsheets, and email-based processes create gaps, delays, and
              audit risks.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Digital platforms provide real-time visibility, automated
              workflows, and audit trails that transform compliance from a
              burden into an enabler of operational excellence.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">100%</div>
                <p className="text-sm opacity-90">Digital Documentation</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">24/7</div>
                <p className="text-sm opacity-90">Access & Availability</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold">Real-Time</div>
                <p className="text-sm opacity-90">Performance Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Platforms */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Our Digital Platforms
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Comprehensive suite of tools for complete management system
              digitization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {platform.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-bes-primary">
                      {platform.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-bes-primary/10">
                    {platform.features.map((feature, idx) => (
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

      {/* Benefits */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Business Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3 text-center">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-black/70">{benefit.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Implementation Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8 space-y-4">
                <div className="text-3xl font-bold text-bes-primary">01</div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Requirements Analysis
                </h3>
                <p className="text-black/70">
                  Understand your processes, compliance needs, and user
                  requirements
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8 space-y-4">
                <div className="text-3xl font-bold text-bes-primary">02</div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Platform Configuration
                </h3>
                <p className="text-black/70">
                  Customize workflows, forms, KPIs, and permissions for your
                  organization
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8 space-y-4">
                <div className="text-3xl font-bold text-bes-primary">03</div>
                <h3 className="text-xl font-bold text-bes-primary">
                  Training & Deployment
                </h3>
                <p className="text-black/70">
                  User training, data migration, and phased rollout with ongoing
                  support
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
            Ready to Go Digital?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Transform your management systems with digital platforms
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-bes-primary font-semibold text-lg px-8"
              >
                Request a Demo
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
