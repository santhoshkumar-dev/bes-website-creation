"use client";

import { Card, CardBody } from "@heroui/react";
import { Target, Smartphone, Shield } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "80% Implementation | 20% Planning",
      description:
        "Systems operate on the shop floor, supported by documentation—not the other way around.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital Tools Mandatory",
      description:
        "Real-time visibility through management software, mobile apps, dashboards, and automated reporting.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sustainable Outcomes",
      description:
        "Control, consistency, confidence, and growth—not just certificates.",
    },
  ];

  return (
    <section className="px-4 md:px-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-4xl mx-auto leading-relaxed">
            BES Certification and Technical Services (BESCERT) delivers ISO
            consultancy, API compliance, welding and NDT technical services,
            inspection, audit, and digital management systems to manufacturing,
            engineering, EPC, oil & gas, and service industries across India and
            global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4 text-center">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  {item.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {item.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-bes-primary to-bes-primary-light text-white p-8 md:p-12 rounded-3xl space-y-4 text-center">
          <p className="text-xl md:text-2xl font-bold">
            Every service includes one-year consultancy assurance
          </p>
          <p className="text-lg opacity-95 leading-relaxed max-w-3xl mx-auto">
            Continuous technical support, audit & compliance handholding, and
            digital system stabilization to ensure sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
