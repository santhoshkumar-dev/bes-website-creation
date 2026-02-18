"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  CheckCircle2,
  Target,
  Heart,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import AboutHero from "@/components/AboutHero";

export default function AboutContent() {
  const coreCommitments = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "People-First Philosophy",
      description:
        "Systems, processes, and competency programs built around people—80% understanding through practice, 20% theory.",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Practical Implementation",
      description:
        "We don't just create documentation. We build systems that operate daily on the shop floor with digital enablement.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Continuous Improvement",
      description:
        "Focus on productivity, quality, safety, and growth—not just passing audits.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Long-Term Partnerships",
      description:
        "One-year assurance, ongoing support, and commitment to your sustained success.",
    },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      <AboutHero />

      {/* Who WeAre */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Who We Are
          </h2>

          <div className="space-y-4 text-lg text-black/70 leading-relaxed">
            <p>
              <strong className="text-bes-primary text-xl">
                BES Certification and Technical Services (BESCERT)
              </strong>{" "}
              delivers ISO consultancy, API compliance, welding and NDT
              technical services, inspection, audit, and digital management
              systems to manufacturing, engineering, EPC, oil & gas, and service
              industries across India and global markets.
            </p>

            <p>
              Headquartered in <strong>Chennai, India</strong>, we bring over{" "}
              <strong>28 years of collective experience</strong> in building
              systems that improve real business performance—not just satisfy
              audit requirements.
            </p>

            <p className="font-semibold text-bes-primary text-xl">
              Our focus is not documentation for compliance—but building systems
              that control processes, reduce risk, and improve performance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Our Core Commitments
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {coreCommitments.map((commitment, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {commitment.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-bes-primary">
                    {commitment.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {commitment.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            What We Do
          </h2>

          <div className="space-y-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  ISO Management Systems
                </h3>
                <p className="text-black/70 leading-relaxed">
                  End-to-end implementation of ISO 9001, 14001, 45001, 27001,
                  and 17025 with digital tools, risk integration, and
                  operational alignment.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  API Compliance & Technical Consultancy
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Oil & gas compliance via API Q1, MOC controls, supplier
                  management, and audit readiness programs for fabricators and
                  EPC contractors.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  NDT & Welding Services
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Training, certification, and technical support for
                  non-destructive testing and welding personnel, procedures, and
                  compliance programs.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-4">
                  Digital Systems & Continuous Support
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Cloud platforms, mobile apps, KPI dashboards, and digital
                  training systems integrated into all services for sustained
                  operational control.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Integrity
                </h3>
                <p className="text-sm text-black/70">
                  Ethical practices, transparency, and honest guidance in all
                  interactions.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Excellence
                </h3>
                <p className="text-sm text-black/70">
                  Commitment to quality, continuous improvement, and exceeding
                  expectations.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-3 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-bes-primary">
                  Customer Focus
                </h3>
                <p className="text-sm text-black/70">
                  100% satisfaction through real business improvement and
                  sustained support.
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
            Ready to Build Real Systems?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss how BESCERT can transform your compliance approach
            into a competitive advantage.
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
