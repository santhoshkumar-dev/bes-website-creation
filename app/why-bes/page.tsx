"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Target,
  Smartphone,
  Shield,
  TrendingUp,
  CheckCircle2,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function WhyBESPage() {
  const differentiators = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "80% Implementation | 20% Planning",
      description:
        "We don't create documents that sit on shelves. We build systems your teams use daily to control processes and improve performance.",
      details: [
        "Practical, hands-on implementation",
        "On-site training and support",
        "Process integration, not paperwork",
        "Measurable operational impact",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Digital-First Approach",
      description:
        "Paper-based systems cannot compete. We digitize compliance with cloud platforms, mobile apps, and real-time dashboards.",
      details: [
        "Cloud-based management software",
        "Mobile inspection and audit apps",
        "Real-time KPI dashboards",
        "Automated workflows and alerts",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Audit-Ready at All Times",
      description:
        "Our consultants are experienced auditors. We know what certification bodies look for, eliminating audit surprises.",
      details: [
        "Auditor-led consulting approach",
        "Zero-nonconformity mindset",
        "Continuous audit readiness",
        "NC closure support and verification",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance-Driven Results",
      description:
        "We measure success by business outcomes—productivity, quality, delivery, morale, and cost reduction—not just certificates.",
      details: [
        "KPI tracking and improvement",
        "Root-cause problem solving",
        "Data-driven decision making",
        "Continuous improvement culture",
      ],
    },
  ];

  const comparisons = [
    {
      aspect: "Focus",
      traditional: "Document creation for audit day",
      bes: "Systems used daily in operations",
    },
    {
      aspect: "Tools",
      traditional: "Paper files and spreadsheets",
      bes: "Digital platforms and mobile apps",
    },
    {
      aspect: "Integration",
      traditional: "Separate from daily work",
      bes: "Embedded in business processes",
    },
    {
      aspect: "Audit Readiness",
      traditional: "Preparation required before audits",
      bes: "Always audit-ready",
    },
    {
      aspect: "Value",
      traditional: "Certificate on the wall",
      bes: "Measurable business improvement",
    },
  ];

  const results = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Reduced Audit Failures",
      stat: "Zero-NC",
      description:
        "Target for certification audits through rigorous preparation",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improved Efficiency",
      stat: "20-30%",
      description: "Productivity gains through process optimization",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Faster Response",
      stat: "Real-Time",
      description: "Instant access to compliance data and performance metrics",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Higher Quality",
      stat: "50%+",
      description: "Reduction in defects and rework",
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
              Why Choose BES
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Practical implementation, digital systems, and measurable business
              results
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Our Core Philosophy
          </h2>
          <div className="bg-gradient-to-br from-bes-primary to-bes-primary-light text-white p-8 md:p-12 rounded-3xl space-y-4">
            <p className="text-xl md:text-2xl font-bold">
              Compliance Should Improve Real Performance
            </p>
            <p className="text-lg opacity-95 leading-relaxed">
              ISO, API, and industry standards are practical tools, not
              paperwork exercises. When implemented correctly, they become
              competitive advantages that drive productivity, quality, and
              profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            What Sets BES Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {diff.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-bes-primary">
                      {diff.title}
                    </h3>
                    <p className="text-black/70 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-3 border-t border-bes-primary/10">
                    {diff.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-bes-accent mt-0.5">✓</span>
                        <span className="text-black/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Traditional Approach vs. BES Approach
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-bes-primary">
                  <th className="py-4 px-4 text-left text-bes-primary font-bold">
                    Aspect
                  </th>
                  <th className="py-4 px-4 text-left text-red-700 font-bold">
                    Traditional Compliance
                  </th>
                  <th className="py-4 px-4 text-left text-green-700 font-bold">
                    BES Approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr
                    key={index}
                    className="border-b border-bes-primary/20 hover:bg-white transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-bes-primary">
                      {comp.aspect}
                    </td>
                    <td className="py-4 px-4 text-black/70">
                      {comp.traditional}
                    </td>
                    <td className="py-4 px-4 text-black/70 font-medium">
                      {comp.bes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Typical Results
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Organizations that implement BES systems see measurable
              improvements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-3 text-center">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    {result.icon}
                  </div>
                  <div className="text-3xl font-bold text-bes-primary">
                    {result.stat}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {result.title}
                  </h3>
                  <p className="text-sm text-black/70">{result.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-Style Quote */}
      <section className="px-4 md:px-8 py-12 bg-bes-accent/10 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-6xl text-bes-primary opacity-20">"</div>
          <p className="text-xl md:text-2xl text-bes-primary font-semibold leading-relaxed">
            BES doesn't just help us pass audits. They've built systems that
            make our operations better—fewer errors, faster delivery, and
            happier teams.
          </p>
          <div className="text-6xl text-bes-primary opacity-20 rotate-180">
            "
          </div>
          <p className="text-sm text-black/60">
            — Typical feedback from BES clients
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Experience the BES Difference
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how we can transform your compliance approach into a
            competitive advantage
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
            <Link href="/about">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                Learn More About BES
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
