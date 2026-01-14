"use client";

import {
  TrendingUp,
  Award,
  Clock,
  Users,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const BusinessOutcomes = () => {
  const outcomes = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Improved productivity",
    },
    { icon: <Award className="w-8 h-8" />, label: "Consistent quality" },
    { icon: <Clock className="w-8 h-8" />, label: "On-time delivery" },
    { icon: <Users className="w-8 h-8" />, label: "Improved employee morale" },
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: "Reduced rejection and rework costs",
    },
    { icon: <ShieldCheck className="w-8 h-8" />, label: "Lower audit risk" },
  ];

  return (
    <section className="flex flex-col gap-8 py-12">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold">
          Measurable Business Results
        </h2>
        <p className="text-lg text-black/60">
          Real outcomes that impact your bottom line and operational excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {outcomes.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-linear-to-br from-bes-primary to-bes-primary-light text-white hover:scale-105 transition-transform"
          >
            <div className="p-4 rounded-full bg-white/20">{item.icon}</div>
            <p className="text-center font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessOutcomes;
