"use client";

import { Card, CardBody } from "@heroui/react";
import { Factory, Zap, Wrench, Droplet, Briefcase } from "lucide-react";

export default function IndustriesServed() {
  const industries = [
    {
      icon: <Factory className="w-10 h-10" />,
      title: "Manufacturing",
      description:
        "ISO 9001/14001/45001, process control, supplier management, and continuous improvement.",
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Engineering & Fabrication",
      description:
        "API Q1, welding qualifications, NDT services, and technical compliance.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "EPC Contractors",
      description:
        "Project-based systems, inspection support, audit readiness, and digital tracking.",
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Oil & Gas",
      description:
        "API compliance, technical audits, personnel certification, and reliability programs.",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Service Industries",
      description:
        "Management systems, operational excellence, compliance programs, and performance improvement.",
    },
  ];

  return (
    <section className="px-4 md:px-8 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-bes-primary">
            Industries We Serve
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            Sector-specific compliance solutions for PAN-India and global
            operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.slice(0, -1).map((industry, index) => (
            <Card key={index} className="border border-bes-primary/20">
              <CardBody className="p-6 space-y-4">
                <div className="p-4 rounded-full bg-bes-primary text-white w-fit">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-bes-primary">
                  {industry.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {industry.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Service Industries - Full Width */}
        <Card className="border border-bes-primary/20">
          <CardBody className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-full bg-bes-primary text-white">
              {industries[4].icon}
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-bes-primary">
                {industries[4].title}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">
                {industries[4].description}
              </p>
            </div>
          </CardBody>
        </Card>

        <div className="text-center pt-4">
          <p className="text-base text-black/70 max-w-2xl mx-auto leading-relaxed">
            Serving organizations across{" "}
            <strong className="text-bes-primary">India</strong> (Chennai,
            Trichy, Coimbatore, PAN-India) and{" "}
            <strong className="text-bes-primary">international markets</strong>{" "}
            including Nepal, Singapore, Malaysia, KSA, UAE, Kuwait, Qatar, and
            Bahrain.
          </p>
        </div>
      </div>
    </section>
  );
}
