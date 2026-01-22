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
      title: "ISO Management System Consultancy",
      description:
        "Design audit-ready systems improving control and reducing risk across ISO 9001, 14001, 45001, 27001, and 17025 standards.",
      href: "/services/iso",
      features: [
        "80% implementation, 20% planning",
        "Digital reporting and approvals",
        "PDCA and risk integration",
        "One-year assurance included",
      ],
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "API Compliance & Technical Consultancy",
      description:
        "Oil & gas/EPC compliance via API Q1 gap analysis, MOC controls, traceability, and audit readiness programs.",
      href: "/services/api-q1",
      features: [
        "Product realization focus",
        "Supplier and MOC controls",
        "Nonconformity closure",
        "Customer confidence building",
      ],
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: "NDT Training, Certification & Technical Services",
      description:
        "Competent personnel for RT, UT, MT, PT, VT (Levels I/II) with digital examinations and procedure guidance.",
      href: "/services/ndt",
      features: [
        "Field-oriented training",
        "Digital instant-result exams",
        "Inspection readiness",
        "Compliance verification",
      ],
    },
    {
      icon: <Flame className="w-12 h-12" />,
      title: "Welding Training, Certification & Technical Services",
      description:
        "Welder qualification, defect analysis, WPS/PQR development, and code compliance for reliable fabrication.",
      href: "/services/welding",
      features: [
        "Welder qualification testing",
        "WPS/PQR review",
        "Inspection and audits",
        "Rework reduction",
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Digital Systems & Continuous Support",
      description:
        "Management software, dashboards, mobile apps integrated into all services for error-free reporting and sustained control.",
      href: "/services/digital",
      features: [
        "Cloud-based platforms",
        "Mobile approvals and tracking",
        "Real-time KPI dashboards",
        "System stabilization post-implementation",
      ],
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Inspection & Audit Management",
      description:
        "Internal audits, supplier assessments, gap analysis, NCR tracking, and corrective action programs.",
      href: "/services/inspection",
      features: [
        "Internal audit programs",
        "Supplier assessments",
        "Gap analysis",
        "Digital tracking systems",
      ],
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
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/services.jpg')",
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
              Comprehensive compliance, technical services, and digital systems
              for industrial excellence
            </p>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed opacity-95">
              Each service includes digital integration and one-year consultancy
              assurance for measurable improvement from your current maturity
              level.
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
              provide end-to-end solutions integrated with digital systems.
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

      {/* Why Choose BESCERT Services */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Why Choose BESCERT Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">80/20</div>
              <h3 className="text-xl font-semibold">Implementation Focus</h3>
              <p className="text-black/70">
                80% practical execution, 20% planning—systems operate on the
                shop floor
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">100%</div>
              <h3 className="text-xl font-semibold">Digital Integration</h3>
              <p className="text-black/70">
                Digital platforms, mobile apps, and dashboards included in every
                service
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="text-4xl font-bold text-bes-primary">1 Year</div>
              <h3 className="text-xl font-semibold">Assurance Included</h3>
              <p className="text-black/70">
                Continuous support, audit handholding, and system stabilization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="px-4 md:px-8 space-y-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-bes-primary">
            Global Delivery
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Services across <strong>India</strong> (Chennai, Trichy, Coimbatore,
            PAN-India) and <strong>international markets</strong> including
            Nepal, Singapore, Malaysia, KSA, UAE, Kuwait, Qatar, and Bahrain.
          </p>
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
                Why Choose BESCERT
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
