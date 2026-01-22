"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Award,
  FileCheck,
  Microscope,
  Flame,
  ClipboardCheck,
  Database,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "ISO Certification & Consultancy",
      description:
        "ISO 9001, 14001, and 45001 certification support with practical implementation packages tailored to your business needs.",
      href: "/services/iso",
      features: [
        "End-to-end certification support",
        "Digital documentation systems",
        "Internal audit programs",
        "NC closure assistance",
      ],
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "API Q1 Consultancy",
      description:
        "Specialized API Q1 quality management system implementation for oil & gas manufacturing and service organizations.",
      href: "/services/api-q1",
      features: [
        "Risk-based approach",
        "Product realization focus",
        "Integration with ISO systems",
        "Audit readiness programs",
      ],
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: "NDT Services",
      description:
        "Comprehensive Non-Destructive Testing services including training, certification, and inspection support.",
      href: "/services/ndt",
      features: [
        "PT, MT, RT, UT, VT methods",
        "NDT Level I, II, III training",
        "Personnel certification",
        "Technical inspection support",
      ],
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Welding Services",
      description:
        "Welding training, qualification, and procedure development aligned with international standards.",
      href: "/services/welding",
      features: [
        "Welder training programs",
        "WPS/PQR development",
        "Welder qualification testing",
        "Technical audits",
      ],
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Inspection & Audit Management",
      description:
        "Internal audits, supplier assessments, gap analysis, and continuous improvement tracking.",
      href: "/services/inspection",
      features: [
        "Internal audit programs",
        "Supplier audits",
        "Gap analysis",
        "Corrective action tracking",
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Digital Enablement",
      description:
        "Management software, mobile apps, and digital platforms for audit-ready compliance and real-time reporting.",
      href: "/services/digital",
      features: [
        "Cloud-based management systems",
        "Mobile inspection apps",
        "KPI dashboards",
        "Document control systems",
      ],
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
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Comprehensive certification, consultancy, and technical services
              for industrial excellence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              From ISO certification to specialized technical services, we
              provide end-to-end solutions for your compliance and performance
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-bes-primary/20 hover:border-bes-primary transition-all duration-300 hover:shadow-xl"
              >
                <CardBody className="p-8 space-y-6">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {service.icon}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-bes-primary">
                      {service.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-bes-accent mt-1">✓</span>
                        <span className="text-sm text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href}>
                    <Button
                      className="w-full bg-bes-primary text-white font-semibold"
                      endContent={<ArrowRight className="w-4 h-4" />}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why BES Services */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Why Choose BES Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">80/20</div>
              <h3 className="text-xl font-semibold">Implementation Focus</h3>
              <p className="text-black/70">
                80% practical execution, 20% planning and documentation
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">100%</div>
              <h3 className="text-xl font-semibold">Digital Systems</h3>
              <p className="text-black/70">
                Cloud-based platforms and mobile apps for all services
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">Zero</div>
              <h3 className="text-xl font-semibold">NC Target</h3>
              <p className="text-black/70">
                Zero-nonconformity mindset in all certification projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss which services best fit your organization's needs
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
            <Link href="/why-bes">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                Why Choose BES
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
