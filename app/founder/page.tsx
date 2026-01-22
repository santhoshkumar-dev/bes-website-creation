"use client";

import { Card, CardBody, Button } from "@heroui/react";
import {
  TrendingUp,
  Award,
  Clock,
  Users,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function FounderVisionPage() {
  const philosophyPillars = [
    {
      title: "Practical Execution Over Theory",
      description:
        "Management systems must be tools that teams use daily, not documents that sit in cabinets. We prioritize real-world implementation over theoretical frameworks.",
      stat: "80% Implementation | 20% Planning",
    },
    {
      title: "Digital Systems Enable Compliance",
      description:
        "Paper-based systems cannot compete with digital platforms. Mobile apps, cloud storage, and real-time dashboards transform compliance from a burden to an enabler.",
      stat: "100% Digital Documentation",
    },
    {
      title: "Root-Cause Improvement, Not Quick Fixes",
      description:
        "We don't patch problems—we solve them at their source. Through systematic analysis, process improvement, and capability building, we create lasting change.",
      stat: "Zero-Nonconformity Goal",
    },
  ];

  const successMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Productivity",
      description: "Measured through output per hour, resource utilization",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description:
        "Tracked via defect rates, rework, and customer satisfaction",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Delivery",
      description: "On-time delivery, lead time reduction, schedule adherence",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Morale",
      description: "Team engagement, turnover rates, safety performance",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Waste elimination, efficiency gains, process optimization",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audit Performance",
      description:
        "Zero-NC audits, certification success, compliance confidence",
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
              "linear-gradient(rgba(0,51,102,0.8), rgba(0,51,102,0.9)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Founder's Vision
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Building systems that drive business performance, not just audit
              compliance
            </p>
          </div>
        </div>
      </section>

      {/* Why BES Was Started */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Why BES Was Started
          </h2>

          <div className="space-y-6 text-lg text-black/70 leading-relaxed">
            <p className="text-xl font-semibold text-bes-primary">
              The Problem: Compliance Without Performance
            </p>

            <p>
              Too many organizations approach ISO certification, API Q1, and
              other standards as documentation exercises. They create manuals,
              procedures, and forms that satisfy auditors on certification day
              but fail to improve actual operations.
            </p>

            <p>
              The result? Systems that are expensive to maintain, disconnected
              from daily work, and provide no measurable value beyond the
              certificate on the wall.
            </p>

            <p className="text-xl font-semibold text-bes-primary pt-6">
              The Solution: Real Systems, Real Results
            </p>

            <p>
              BES was founded on a simple principle:{" "}
              <strong>
                compliance should improve business performance, not just satisfy
                auditors.
              </strong>
            </p>

            <p>
              We build management systems that teams actually use—digital
              platforms that control quality, safety, and delivery. Systems that
              reduce errors, improve efficiency, and provide real-time insights
              to leadership.
            </p>

            <p>
              When implemented correctly, ISO standards, API Q1, and other
              frameworks become competitive advantages, not compliance burdens.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="px-4 md:px-8 py-12 bg-[#C7DFF0] rounded-3xl">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Our Core Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar, index) => (
              <Card key={index} className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-bes-primary mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-bold text-bes-primary">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-black/70 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="pt-4 border-t border-bes-primary/20">
                    <p className="text-sm font-semibold text-bes-accent text-center">
                      {pillar.stat}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure Success */}
      <section className="px-4 md:px-8 space-y-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary text-center">
            How We Measure Success
          </h2>

          <p className="text-lg text-black/70 text-center max-w-3xl mx-auto">
            We don't measure success by certificates issued. We measure it by
            tangible improvements in business performance.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {successMetrics.map((metric, index) => (
              <Card
                key={index}
                className="border border-bes-primary/20 hover:border-bes-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardBody className="p-6 space-y-3 text-center">
                  <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                    {metric.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bes-primary">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-black/70">{metric.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-br from-bes-primary to-bes-primary-light rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Our Vision</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95">
            To transform compliance from a cost center into a performance
            driver—where every audit confirms that your systems are not just
            documented, but actively improving your business every single day.
          </p>
          <div className="pt-8 space-y-4">
            <p className="text-lg opacity-90">
              Ready to experience the BES difference?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </main>
  );
}
