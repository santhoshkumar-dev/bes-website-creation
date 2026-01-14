import {
  Award,
  Shield,
  Target,
  Database,
  CheckCircle,
  BarChart3,
} from "lucide-react";

const HowWeWork = () => {
  const values = [
    {
      title: "End-to-end certification readiness",
      icon: <Award />,
      description:
        "Complete support from initial assessment through certification audit and beyond, ensuring your organization is fully prepared at every stage.",
    },
    {
      title: "Auditor-led consulting approach",
      icon: <Shield />,
      description:
        "Our consultants are experienced auditors who understand exactly what certification bodies look for, eliminating surprises and nonconformities.",
    },
    {
      title: "Practical, site-based implementation",
      icon: <Target />,
      description:
        "We work on-site with your teams to implement systems that integrate with your actual operations, not theoretical documentation.",
    },
    {
      title: "Digital documentation and reporting systems",
      icon: <Database />,
      description:
        "Cloud-based platforms and mobile apps ensure your compliance documentation is accessible, current, and audit-ready at all times.",
    },
    {
      title: "Zero-nonconformity audit mindset",
      icon: <CheckCircle />,
      description:
        "Our rigorous approach aims for perfect audits through comprehensive preparation, internal audits, and continuous improvement.",
    },
    {
      title: "KPI dashboards for management review",
      icon: <BarChart3 />,
      description:
        "Real-time performance metrics and analytics transform compliance data into actionable business intelligence for leadership decisions.",
    },
  ];

  return (
    <section className="flex justify-between flex-col md:flex-row py-12 md:gap-18">
      <div className="flex flex-col gap-4 basis-1/3">
        <h2 className="text-4xl md:text-6xl font-bold">
          Why Organizations Choose BES
        </h2>

        <p className="text-lg text-black/60">
          Practical implementation backed by certified expertise
        </p>

        <div className="h-[700px] hidden md:block">
          <img
            src="hero.jpg"
            alt="BES Certification Services"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center py-4 gap-2 basis-1/2 divide-y divide-secondary-100 md:py-8">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 p-6 transition-all duration-300 hover:bg-secondary-50 group cursor-pointer"
          >
            <div>
              <div className="p-4 rounded-full bg-bes-primary text-white transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-black/60">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
