"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Award,
  CheckCircle2,
  FileText,
  Users,
  Smartphone,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function ISOCertificationPage() {
  const isoStandards = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management Systems",
      description:
        "Proven framework for consistent quality, customer satisfaction, and continuous improvement in manufacturing and service organizations.",
      benefits: [
        "Improved customer satisfaction",
        "Consistent product/service quality",
        "Reduced operational costs",
        "Enhanced process efficiency",
      ],
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management Systems",
      description:
        "Systematic approach to environmental responsibility, compliance, and sustainability aligned with business objectives.",
      benefits: [
        "Regulatory compliance",
        "Reduced environmental impact",
        "Resource optimization",
        "Stakeholder confidence",
      ],
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description:
        "Worker safety and health framework that reduces workplace risks and creates safer working conditions.",
      benefits: [
        "Reduced workplace incidents",
        "Lower insurance costs",
        "Improved employee morale",
        "Legal compliance",
      ],
    },
  ];

  const packages = [
    {
      name: "Basic",
      duration: "3-4 months",
      description: "Essential certification support",
      features: [
        "Gap analysis and planning",
        "Documentation development",
        "Internal audit training",
        "Certification audit support",
      ],
      ideal: "Small organizations with existing systems",
    },
    {
      name: "Basic Plus",
      duration: "4-6 months",
      description: "Comprehensive implementation",
      features: [
        "Everything in Basic",
        "Digital documentation system",
        "Process mapping and improvement",
        "Monthly on-site visits",
        "NC closure support",
      ],
      ideal: "Mid-sized organizations seeking digital transformation",
      recommended: true,
    },
    {
      name: "Classic",
      duration: "6-9 months",
      description: "Full implementation with deep integration",
      features: [
        "Everything in Basic Plus",
        "Mobile application deployment",
        "KPI dashboard setup",
        "Bi-weekly on-site support",
        "Management review facilitation",
      ],
      ideal: "Large organizations or complex operations",
    },
    {
      name: "Master",
      duration: "9-12 months",
      description: "Enterprise-wide transformation",
      features: [
        "Everything in Classic",
        "Multi-site implementation",
        "Custom software development",
        "Integrated management systems",
        "Continuous improvement programs",
        "Annual surveillance support",
      ],
      ideal: "Enterprise organizations with multiple facilities",
    },
  ];

  const digitalTools = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Control",
      description: "Cloud-based document management with version control",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Field inspection and audit apps for real-time data capture",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "KPI Dashboards",
      description: "Real-time performance metrics and management reporting",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Training Portal",
      description: "Online training modules and competency tracking",
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
              ISO Certification & Consultancy
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Practical ISO 9001, 14001, and 45001 implementation with digital
              systems that improve business performance
            </p>
          </div>
        </div>
      </section>

      {/* Certification vs Consultancy */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Certification vs. Consultancy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-bes-primary/30 bg-blue-50/30">
              <CardBody className="p-8 space-y-4">
                <Award className="w-12 h-12 text-bes-primary" />
                <h3 className="text-2xl font-bold text-bes-primary">
                  Certification
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Independent third-party audit by accredited certification
                  bodies (like BSI, LRQA, TUV, SGS) to verify your management
                  system meets ISO standards.
                </p>
                <p className="text-sm text-black/60 italic">
                  BES does not provide certification services. We connect you
                  with trusted certification bodies.
                </p>
              </CardBody>
            </Card>

            <Card className="border-2 border-green-500/30 bg-green-50/30">
              <CardBody className="p-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
                <h3 className="text-2xl font-bold text-green-700">
                  Consultancy (BES Service)
                </h3>
                <p className="text-black/70 leading-relaxed">
                  We help you build, implement, and maintain ISO-compliant
                  management systems so your organization is ready for
                  certification and achieves real business benefits.
                </p>
                <p className="text-sm font-semibold text-green-700">
                  This is what BES provides—practical implementation support.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* ISO Standards */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            ISO Standards We Support
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {isoStandards.map((standard, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-bes-accent uppercase tracking-wide">
                      {standard.standard}
                    </div>
                    <h3 className="text-xl font-bold text-bes-primary">
                      {standard.title}
                    </h3>
                  </div>

                  <p className="text-black/70 text-sm leading-relaxed">
                    {standard.description}
                  </p>

                  <div className="pt-4 border-t border-bes-primary/10">
                    <p className="text-xs font-semibold text-black/60 uppercase mb-3">
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {standard.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="text-bes-accent mt-0.5">✓</span>
                          <span className="text-black/70">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Packages */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Consultancy Packages
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Choose the implementation package that matches your organization's
              needs and maturity level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`${
                  pkg.recommended
                    ? "border-2 border-bes-primary shadow-lg"
                    : "border border-bes-primary/20"
                }`}
              >
                <CardBody className="p-6 space-y-4">
                  {pkg.recommended && (
                    <div className="bg-bes-primary text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
                      RECOMMENDED
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-bes-primary">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-bes-accent font-semibold">
                      {pkg.duration}
                    </p>
                    <p className="text-sm text-black/60 mt-2">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-bes-accent mt-0.5">✓</span>
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-bes-primary/10">
                    <p className="text-xs font-semibold text-black/60">
                      IDEAL FOR:
                    </p>
                    <p className="text-sm text-black/70 mt-1">{pkg.ideal}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Digital Tools Included
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              All packages above Basic include digital enablement tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {digitalTools.map((tool, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3 text-center">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-black/70">{tool.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready for ISO Certification?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss which package fits your needs and timeline
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
