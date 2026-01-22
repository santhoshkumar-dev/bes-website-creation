"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Headphones,
  Shield,
  CheckCircle2,
  LineChart,
  Smartphone,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function ConsultancyAssurancePage() {
  const assuranceComponents = [
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Continuous Technical Support",
      description:
        "Post-implementation guidance on process control, documentation, and system optimization.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Audit & Compliance Handholding",
      description:
        "Surveillance audit preparation, gap closure support, and nonconformity resolution assistance.",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Digital System Stabilization",
      description:
        "Software maintenance, user training refreshers, mobile app updates, and dashboard refinements.",
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Performance Guidance",
      description:
        "KPI tracking assistance, improvement opportunity identification, and PDCA facilitation.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Document Control Support",
      description:
        "Updates to procedures, work instructions, and management system records as operations evolve.",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Certification Maintenance",
      description:
        "Coordination with certification bodies, surveillance audit scheduling, and scope expansion guidance.",
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
              Consultancy Assurance Model
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              One-year post-implementation support for sustained compliance and
              continuous improvement
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              What's Included in One-Year Assurance
            </h2>
            <p className="text-lg text-black/70 max-w-4xl mx-auto leading-relaxed">
              Every BESCERT service includes one year of consultancy
              assurance—ensuring your systems stabilize, improve, and deliver
              the intended business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assuranceComponents.map((component, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {component.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bes-primary">
                    {component.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {component.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why One Year */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Why One Year?
          </h2>

          <div className="space-y-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  Certification isn't the finish line
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Achieving certification is a milestone, but the real value
                  comes from sustaining and improving the systems over time.
                  Most organizations face challenges in the first year
                  post-certification—surveillance audits, process changes, scope
                  expansions, and team turnover.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  Systems must stabilize and evolve
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Your operations won't stay static. New projects, customers,
                  regulations, and business priorities emerge. Our one-year
                  assurance ensures your management systems adapt to these
                  changes without losing audit readiness or operational control.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  Digital systems require optimization
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Software, dashboards, and mobile apps need tuning based on
                  actual usage patterns. We monitor system performance, gather
                  user feedback, and make refinements to ensure tools deliver
                  maximum value and adoption.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            How the Assurance Works
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bes-primary text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-bes-primary mb-2">
                  Regular Check-ins
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Scheduled reviews (monthly/quarterly based on service) to
                  assess system performance, address challenges, and plan
                  improvements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bes-primary text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-bes-primary mb-2">
                  On-Demand Support
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Email and phone access to technical consultants for urgent
                  queries, audit preparation, or process clarifications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bes-primary text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-bes-primary mb-2">
                  Audit Assistance
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Surveillance audit pre-checks, NC closure support, and
                  coordination with certification bodies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bes-primary text-white flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-bes-primary mb-2">
                  System Updates
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Digital platform enhancements, documentation updates, and
                  process adjustments as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Implementation + Assurance = Sustainable Growth
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            This is what sets BESCERT apart—we don't just certify and leave. We
            stay with you until the systems are truly working.
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
