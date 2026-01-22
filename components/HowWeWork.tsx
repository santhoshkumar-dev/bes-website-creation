"use client";

import { Card, CardBody } from "@heroui/react";
import { CheckCircle2, Cog, LineChart, Headphones } from "lucide-react";

export default function HowWeWork() {
  const workPhases = [
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Assessment & Planning",
      description:
        "We assess your current maturity and design a practical roadmap focused on your business priorities.",
      percentage: "20%",
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: "Implementation on Shop Floor",
      description:
        "Shop-floor integration, digital enablement, process control—systems your teams use daily.",
      percentage: "80%",
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Audit Readiness & Certification",
      description:
        "Internal audits, gap closure, and coordination with accredited certification bodies.",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "One-Year Assurance",
      description:
        "Continuous support, surveillance audit assistance, digital system stabilization, and performance guidance.",
      highlight: true,
    },
  ];

  return (
    <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            How We Work
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            Our implementation model ensures systems work on the shop floor, not
            just in files.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workPhases.map((phase, index) => (
            <Card
              key={index}
              className={`border ${
                phase.highlight
                  ? "border-2 border-bes-accent bg-default-50"
                  : "border-bes-primary/20"
              }`}
            >
              <CardBody className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-full bg-bes-primary text-white">
                    {phase.icon}
                  </div>
                  {phase.percentage && (
                    <div className="text-2xl font-bold text-bes-accent">
                      {phase.percentage}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-bes-primary">
                  {phase.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {phase.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-base text-black/70 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-bes-primary">Our philosophy:</strong>{" "}
            Documentation must support operations, not replace them. Digital
            tools are mandatory for real-time visibility and control.
          </p>
        </div>
      </div>
    </section>
  );
}
