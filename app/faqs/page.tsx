"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQsPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is included in the one-year consultancy assurance?",
          a: "One-year assurance includes continuous technical support, surveillance audit assistance, digital system stabilization, performance guidance, document control support, and coordination with certification bodies. This ensures your systems remain effective and audit-ready long after initial implementation.",
        },
        {
          q: "How are digital systems integrated into BESCERT services?",
          a: "Digital integration is mandatory across all services. We deploy management software for document control and approvals, mobile apps for field data capture and inspections, KPI dashboards for real-time performance monitoring, and automated reporting systems that eliminate manual errors.",
        },
        {
          q: "Does BESCERT provide certification services?",
          a: "No. BESCERT is a consultancy and technical services organization. Certification is issued by independent, accredited certification bodies (such as BSI, LRQA, TUV Süd, SGS). We prepare your organization for certification by building audit-ready systems and coordinate with certification bodies on your behalf.",
        },
        {
          q: "What does the 80/20 implementation model mean?",
          a: "80% of our effort goes into practical, shop-floor implementation—training teams, integrating processes, and deploying digital systems. Only 20% focuses on planning and documentation. This ensures systems are used daily in operations, not just filed for audits.",
        },
      ],
    },
    {
      category: "ISO & API Services",
      questions: [
        {
          q: "Which ISO standards does BESCERT support?",
          a: "We support ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Occupational Health & Safety), ISO 27001 (Information Security), and ISO/IEC 17025 (Testing & Calibration Laboratories).",
        },
        {
          q: "What is API Q1, and who needs it?",
          a: "API Q1 is a quality management system standard for oil & gas manufacturing and service organizations. It emphasizes product realization, supplier controls, risk management, and traceability. EPC contractors, fabricators, and service companies serving the oil & gas sector typically require API Q1 compliance.",
        },
        {
          q: "How long does ISO implementation take?",
          a: "Timeline depends on your organization's size and maturity. Typical implementation ranges from 3-6 months for smaller organizations to 9-12 months for complex, multi-site operations. All packages include one year of post-certification assurance.",
        },
      ],
    },
    {
      category: "NDT & Welding Services",
      questions: [
        {
          q: "What NDT methods does BESCERT offer training and certification for?",
          a: "We provide training and certification support for Radiographic Testing (RT), Ultrasonic Testing (UT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), and Visual Testing (VT) at Levels I and II.",
        },
        {
          q: "Are NDT examinations conducted digitally?",
          a: "Yes. We use a digital examination system that provides instant results with full transparency. This eliminates manual grading errors and provides immediate competency verification.",
        },
        {
          q: "Does BESCERT support welder qualification testing?",
          a: "Yes. We provide welder qualification testing, WPS/PQR review and development, defect analysis, and technical audits aligned with international welding codes.",
        },
      ],
    },
    {
      category: "Global Delivery",
      questions: [
        {
          q: "Where is BESCERT located?",
          a: "BESCERT is headquartered in Chennai, India, with additional service centers in Trichy and Coimbatore. We provide PAN-India services and serve international markets including Nepal, Singapore, Malaysia, Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain.",
        },
        {
          q: "Can BESCERT support multi-site implementations?",
          a: "Yes. We have experience delivering coordinated implementations across multiple facilities and geographies, ensuring consistent standards and integrated reporting.",
        },
      ],
    },
    {
      category: "Digital Systems",
      questions: [
        {
          q: "What digital platforms does BESCERT deploy?",
          a: "We deploy cloud-based management software, mobile inspection and audit apps, real-time KPI dashboards, document control systems, NCR tracking platforms, and digital training/examination systems. All platforms are designed for audit readiness and operational control.",
        },
        {
          q: "Can digital systems be customized?",
          a: "Yes. While we use proven platforms, we configure workflows, dashboards, and reports to match your specific processes, KPIs, and business priorities.",
        },
      ],
    },
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Common questions about BESCERT services, processes, and delivery
            </p>
          </div>
        </div>
      </section>

      {/* FAQs by Category */}
      <section className="px-4 md:px-8 space-y-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-bes-primary flex items-center gap-3">
                <HelpCircle className="w-8 h-8" />
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="border border-bes-primary/20">
                    <CardBody className="p-6 md:p-8 space-y-4">
                      <h3 className="text-lg font-bold text-bes-primary">
                        {faq.q}
                      </h3>
                      <p className="text-black/70 leading-relaxed">{faq.a}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Still Have Questions?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Our team is here to provide detailed answers and guide you through
            our services and processes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-bes-primary font-semibold text-lg px-8"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
