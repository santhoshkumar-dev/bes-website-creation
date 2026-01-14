"use client";

import {
  Database,
  CheckCircle,
  BarChart3,
  FileCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const DigitalEnablement = () => {
  const capabilities = [
    {
      icon: <Database className="w-8 h-8" />,
      label: "Centralized document control",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      label: "NCR and action tracking",
    },
    { icon: <BarChart3 className="w-8 h-8" />, label: "Real-time dashboards" },
    {
      icon: <Smartphone className="w-8 h-8" />,
      label: "Mobile reporting for key personnel",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      label: "Evidence-based decision making",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Performance analytics",
    },
  ];

  return (
    <section className="flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold">
          Technology-Enabled Management Systems
        </h2>
        <p className="text-lg text-black/60">
          BES integrates management software and mobile applications to convert
          ISO and API systems into daily management tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {capabilities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="p-4 rounded-full bg-bes-primary text-white">
              {item.icon}
            </div>
            <p className="text-center font-medium text-gray-800">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalEnablement;
