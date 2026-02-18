"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Factory,
  Droplet,
  Zap,
  Building2,
  Cog,
  UtensilsCrossed,
  GraduationCap,
  Truck,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import IndustriesHero from "@/components/IndustriesHero";

export default function IndustriesContent() {
  const industries = [
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Oil & Gas",
      description:
        "Upstream, midstream, and downstream operations requiring API Q1, ISO, and specialized technical services.",
      challenges: [
        "API monogram licensing requirements",
        "Product realization and traceability",
        "Supply chain quality assurance",
        "Regulatory and safety compliance",
      ],
      solutions: [
        "API Q1 certification consultancy",
        "NDT and welding services",
        "Supplier audit programs",
        "Digital quality management systems",
      ],
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Manufacturing",
      description:
        "Discrete and process manufacturers seeking quality, environmental, and safety certifications.",
      challenges: [
        "ISO 9001/14001/45001 compliance",
        "Process control and consistency",
        "Customer audit readiness",
        "Continuous improvement culture",
      ],
      solutions: [
        "ISO certification packages",
        "Process mapping and optimization",
        "Internal audit programs",
        "KPI dashboards and reporting",
      ],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "EPC & Construction",
      description:
        "Engineering, Procurement, and Construction firms managing complex projects and multiple stakeholders.",
      challenges: [
        "Multi-site quality management",
        "Project-specific documentation",
        "Welding and inspection requirements",
        "Client specification compliance",
      ],
      solutions: [
        "Project-based QMS implementation",
        "Welding procedure development",
        "On-site inspection services",
        "Mobile audit and inspection apps",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Power & Energy",
      description:
        "Power generation, transmission, and renewable energy organizations with critical quality and safety needs.",
      challenges: [
        "Asset integrity and reliability",
        "Environmental compliance (ISO 14001)",
        "Safety management (ISO 45001)",
        "Equipment qualification and testing",
      ],
      solutions: [
        "Integrated management systems (ISO 9001/14001/45001)",
        "NDT services for asset inspection",
        "Risk-based audit programs",
        "Digital compliance platforms",
      ],
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Engineering & Fabrication",
      description:
        "Metal fabricators, machine shops, and engineering services requiring technical certifications.",
      challenges: [
        "Customer-specific certifications",
        "Welding procedure qualification",
        "Material traceability",
        "Quality documentation for projects",
      ],
      solutions: [
        "ISO 9001 and API Q1 consultancy",
        "WPS/PQR development",
        "Welder qualification testing",
        "Digital document control",
      ],
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Food & Beverage",
      description:
        "Food processing, packaging, and beverage manufacturers requiring food safety and quality certifications.",
      challenges: [
        "HACCP and ISO 22000 compliance",
        "Hygiene and sanitation standards",
        "Traceability and recall procedures",
        "Allergen and contamination control",
      ],
      solutions: [
        "ISO 22000 and HACCP certification",
        "Food safety management systems",
        "Supplier qualification programs",
        "Digital traceability platforms",
      ],
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Education",
      description:
        "Educational institutions, training centers, and e-learning platforms seeking quality management and accreditation.",
      challenges: [
        "Accreditation requirements",
        "Quality assurance frameworks",
        "Operational consistency across campuses",
        "Student satisfaction and outcomes",
      ],
      solutions: [
        "ISO 9001 for educational institutions",
        "Quality management system design",
        "Process standardization",
        "Performance monitoring dashboards",
      ],
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transportation & Mobility",
      description:
        "Fleet operators, logistics providers, and mobility services requiring safety and operational excellence.",
      challenges: [
        "Road safety management (ISO 39001)",
        "Fleet maintenance and reliability",
        "Driver competency and training",
        "Environmental impact reduction",
      ],
      solutions: [
        "ISO 39001 road traffic safety certification",
        "Fleet management system integration",
        "Driver training and qualification programs",
        "Digital compliance and tracking tools",
      ],
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "IT Services",
      description:
        "Software development, IT consulting, and technology service providers requiring information security and service quality.",
      challenges: [
        "Information security management (ISO 27001)",
        "Data protection and privacy compliance",
        "Service delivery consistency",
        "Cybersecurity threat management",
      ],
      solutions: [
        "ISO 27001 ISMS certification",
        "ISO 20000 IT service management",
        "Security audit and gap assessment",
        "Digital security management platforms",
      ],
    },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      <IndustriesHero />

      {/* Industries Overview */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Enterprise-Focused Expertise
          </h2>
          <p className="text-lg text-black/70 leading-relaxed max-w-3xl mx-auto">
            BESCERT serves organizations across diverse sectors where quality,
            safety, and compliance are critical to operations. We understand the
            technical requirements, regulatory landscape, and operational
            challenges of each industry we serve.
          </p>
        </div>
      </section>

      {/* Industry Details */}
      <section className="px-4 md:px-8 space-y-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="border border-bes-primary/20 hover:border-bes-primary transition-all duration-300"
            >
              <CardBody className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className="p-6 rounded-full bg-bes-primary text-white w-fit">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-bes-primary">
                        {industry.title}
                      </h3>
                      <p className="text-black/70 mt-3 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-bes-accent uppercase tracking-wide">
                      Common Challenges
                    </h4>
                    <ul className="space-y-3">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-black/70 text-sm">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-bes-accent uppercase tracking-wide">
                      BESCERT Solutions
                    </h4>
                    <ul className="space-y-3">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-black/70 text-sm">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Common Needs */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Common Across All Industries
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <h3 className="text-xl font-bold text-bes-primary">
                  Audit Readiness
                </h3>
                <p className="text-sm text-black/70">
                  Certification audits, customer audits, regulatory inspections—
                  digital systems ensure continuous readiness.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <h3 className="text-xl font-bold text-bes-primary">
                  Operational Excellence
                </h3>
                <p className="text-sm text-black/70">
                  Compliance should improve performance—productivity, quality,
                  delivery, safety, and cost.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <h3 className="text-xl font-bold text-bes-primary">
                  Digital Transformation
                </h3>
                <p className="text-sm text-black/70">
                  Move from paper-based to digital systems for efficiency,
                  visibility, and control.
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
            Ready to Transform Your Compliance?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how BESCERT can support your industry-specific needs
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
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
