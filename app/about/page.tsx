"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { CheckCircle2, Target, Award, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const promises = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Practical Implementation",
      description:
        "We don't just create documentation. We build systems that are used daily by your teams to control processes and improve performance.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital-First Approach",
      description:
        "Management software, mobile apps, real-time dashboards, and cloud-based documentation for audit confidence and operational efficiency.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Audit-Ready Systems",
      description:
        "Our systems are designed from an auditor's perspective, ensuring zero-surprise audits and smooth certification processes.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Performance-Driven Results",
      description:
        "We measure success through measurable improvements in productivity, quality, delivery, morale, and cost reduction.",
    },
  ];

  const differentiators = [
    {
      title: "Paperwork Compliance",
      subtitle: "Traditional Approach",
      points: [
        "Documentation for audit day only",
        "Manual files and spreadsheets",
        "Disconnected from daily operations",
        "High audit failure risk",
        "Limited performance insights",
      ],
      negative: true,
    },
    {
      title: "Real Systems",
      subtitle: "BES Approach",
      points: [
        "Systems used daily in operations",
        "Digital platforms and mobile apps",
        "Integrated with business processes",
        "Audit-ready at all times",
        "Measurable business outcomes",
      ],
      negative: false,
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
              About BES Certification and Technical Services
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Building practical, digital, audit-ready management systems for
              global industrial organizations
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Who We Are
          </h2>

          <div className="space-y-4 text-lg text-black/70 leading-relaxed">
            <p>
              BES Certification and Technical Services is a multidisciplinary
              organization providing certification, consultancy, training,
              inspection, and audit support services to industrial,
              manufacturing, EPC, and oil & gas organizations worldwide.
            </p>

            <p>
              We deliver internationally compliant, audit-ready, and risk-based
              management system solutions across Quality (ISO 9001), Environment
              (ISO 14001), Occupational Health & Safety (ISO 45001), API Q1,
              NDT, Welding, and Inspection disciplines.
            </p>

            <p className="font-semibold text-bes-primary text-xl">
              Our focus is not documentation for compliance—but building systems
              that control processes, reduce risk, and improve performance.
            </p>
          </div>
        </div>
      </section>

      {/* What Problems We Solve */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            What Problems We Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  item.negative
                    ? "border-red-200 bg-red-50/30"
                    : "border-green-200 bg-green-50/30"
                }`}
              >
                <CardBody className="p-8 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-black/60 uppercase tracking-wide">
                      {item.subtitle}
                    </p>
                    <h3
                      className={`text-2xl font-bold ${
                        item.negative ? "text-red-700" : "text-green-700"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className={`mt-1 ${
                            item.negative ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          {item.negative ? "✗" : "✓"}
                        </span>
                        <span className="text-black/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BES Promise */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            The BES Promise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {promise.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-bes-primary">
                    {promise.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {promise.description}
                  </p>
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
            Ready to Build Real Systems?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how BES can transform your compliance approach into a
            competitive advantage.
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
