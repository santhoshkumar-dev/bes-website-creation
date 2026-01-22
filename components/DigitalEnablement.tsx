"use client";

import { Card, CardBody } from "@heroui/react";
import {
  Smartphone,
  BarChart3,
  FileCheck,
  Zap,
  Database,
  Shield,
} from "lucide-react";

export default function DigitalEnablement() {
  const digitalCapabilities = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Management Software",
      description:
        "Document control, version management, approval workflows, and full traceability.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Real-time approvals, inspection data capture, audit checklists, and field reporting.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "KPI Dashboards",
      description:
        "Live performance metrics, NCR tracking, compliance status, and management reporting.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Digital Training & Exams",
      description:
        "Online assessments with instant results, competency tracking, and certification management.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Mistake-Proof Reporting",
      description:
        "Error-free data entry, automated calculations, and real-time validation.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Continuous Support",
      description:
        "Post-implementation stabilization, system maintenance, and ongoing technical support.",
    },
  ];

  return (
    <section className="px-4 md:px-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Digital Systems—A Core Differentiator
          </h2>
          <p className="text-lg text-black/70 max-w-4xl mx-auto leading-relaxed">
            Every BESCERT service includes digital enablement. Software,
            dashboards, mobile apps, and real-time reporting are integrated into
            all implementations for sustained operational control and audit
            confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalCapabilities.map((capability, index) => (
            <Card key={index} className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-bes-primary">
                  {capability.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {capability.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="bg-linear-to-br from-bes-primary to-bes-primary-light text-white p-8 md:p-12 rounded-3xl text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Not an Add-on—It's Mandatory
          </h3>
          <p className="text-lg opacity-95 max-w-3xl mx-auto leading-relaxed">
            In today's compliance environment, digital systems aren't optional.
            They're essential for real-time visibility, error prevention, and
            sustained growth.
          </p>
        </div>
      </div>
    </section>
  );
}
