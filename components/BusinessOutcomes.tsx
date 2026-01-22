"use client";

import { Card, CardBody } from "@heroui/react";
import { TrendingUp, Shield, CheckCircle2, Zap } from "lucide-react";

export default function BusinessOutcomes() {
  const outcomes = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Control",
      description:
        "Processes operate consistently with clear accountability and traceability.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10" />,
      title: "Consistency",
      description:
        "Predictable outputs, reduced variation, and reliable performance across operations.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Confidence",
      description:
        "Audit-ready systems that eliminate surprises and strengthen stakeholder trust.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Growth",
      description:
        "Sustainable business improvement through productivity gains and risk reduction.",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-12 bg-default-50 rounded-3xl">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Business Outcomes
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            Certification isn't the end goal. It's a foundation for measurable
            improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  {outcome.icon}
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  {outcome.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {outcome.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-base text-black/70 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-bes-primary">
              Our measure of success:
            </strong>{" "}
            Improved productivity, reduced defects, faster delivery, stronger
            morale, and lower operational costs.
          </p>
        </div>
      </div>
    </section>
  );
}
