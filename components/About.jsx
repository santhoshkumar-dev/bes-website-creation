"use client";

function About() {
  const highlights = [
    {
      value: "80%",
      label: "Implementation Focus",
      subtext: "20% Planning | 80% Execution",
    },
    {
      value: "Digital",
      label: "Management Systems",
      subtext: "Mobile & Web Applications",
    },
    {
      value: "Zero",
      label: "Error Documentation",
      subtext: "Audit-Ready Reporting",
    },
    {
      value: "Reduced",
      label: "Operational Risk",
      subtext: "Lower Audit Failures",
    },
    {
      value: "KPI",
      label: "Performance Tracking",
      subtext: "Measurable Improvements",
    },
  ];

  return (
    <section className="flex justify-around gap-12 flex-col md:flex-row py-12">
      <div className="flex flex-col gap-4 basis-1/2">
        <h2 className="text-4xl md:text-6xl font-bold">
          About BES Certification and Technical Services
        </h2>

        <p className="text-lg text-black/60 leading-relaxed">
          BES Certification and Technical Services is a multidisciplinary
          organization providing certification, consultancy, training,
          inspection, and audit support services.
        </p>

        <p className="text-lg text-black/60 leading-relaxed">
          We deliver internationally compliant, audit-ready, and risk-based
          management system solutions across Quality, Environment, Occupational
          Health & Safety, API Q1, NDT, Welding, and Inspection disciplines.
        </p>

        <p className="text-lg text-black/60 leading-relaxed">
          Our focus is not documentation for compliance—but building systems
          that control processes, reduce risk, and improve performance.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 basis-1/2">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-3xl md:text-6xl font-extrabold text-bes-primary">
              {item.value}
            </p>
            <p className="text-lg font-semibold text-black/80">{item.label}</p>
            <p className="text-sm text-black/60">{item.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
