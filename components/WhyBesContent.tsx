"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  Target,
  Smartphone,
  Shield,
  TrendingUp,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import WhyBesHero from "@/components/WhyBesHero";

export default function WhyBesContent() {
  const differentiators = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "80% Implementation | 20% Planning",
      description:
        "Shop-floor systems your teams use daily—not paperwork exercises.",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Digital Integration Mandatory",
      description:
        "Cloud platforms, mobile apps, dashboards, and real-time reporting included in every service.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "One-Year Assurance Included",
      description:
        "Continuous support, audit handholding, and digital system stabilization post-implementation.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Outcomes Focused",
      description:
        "Productivity gains, risk reduction, error elimination, and sustainable growth—not just certificates.",
    },
  ];

  const valueDelivered = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Error Elimination",
      description:
        "Digital mistake-proofing, automated workflows, and process controls reduce defects and rework.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resource Optimization",
      description:
        "Efficient use of time, materials, and personnel through streamlined processes and data-driven decisions.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Best Practices Embedded",
      description:
        "International standards translated into practical, shop-floor operations with clear accountability.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Real-Time Visibility",
      description:
        "Dashboards and mobile apps provide instant access to performance metrics, audit status, and compliance data.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Reduction",
      description:
        "Proactive identification and mitigation of quality, safety, and compliance risks.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Morale & Engagement",
      description:
        "Clear processes, fair evaluations, and competency development improve team confidence and satisfaction.",
    },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      <WhyBesHero />

      {/* Core Differentiators */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              What Sets BESCERT Apart
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              We don't just certify—we build systems that grow businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                    {diff.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-bes-primary">
                    {diff.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {diff.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Delivered */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
              Value We Deliver
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Measurable improvements across productivity, quality, safety, and
              cost
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueDelivered.map((value, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-6 space-y-4">
                  <div className="p-3 rounded-full bg-bes-primary text-white w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-bes-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm text-black/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Commitment */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            Our Client Commitment
          </h2>

          <div className="space-y-4">
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-3">
                  100% Satisfaction Focus
                </h3>
                <p className="text-black/70 leading-relaxed">
                  We measure success by your success—improved operations, faster
                  audits, stronger compliance, and sustainable growth.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-3">
                  Long-Term Partnership
                </h3>
                <p className="text-black/70 leading-relaxed">
                  One-year assurance, continuous support, and ongoing guidance
                  ensure your systems evolve with your business without losing
                  audit readiness.
                </p>
              </CardBody>
            </Card>

            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold text-bes-primary mb-3">
                  Ethical & Transparent Practices
                </h3>
                <p className="text-black/70 leading-relaxed">
                  Honest guidance, clear pricing, and transparent processes—no
                  hidden fees, no overselling, no surprises.
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
            Experience the BESCERT Difference
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
                Learn More About BESCERT
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
