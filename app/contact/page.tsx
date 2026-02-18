"use client";

import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/global2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Request a Consultation
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Expert-led consultancy for CEOs, Directors, Plant Heads, and
              Compliance Managers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-bes-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                Whether you're exploring ISO certification, API compliance,
                NDT/Welding services, or digital systems—our team is ready to
                discuss practical solutions tailored to your organization's
                needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="border border-bes-primary/20">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-bes-primary text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bes-primary mb-2">
                        Headquarters
                      </h3>
                      <p className="text-black/70">
                        BES Certification and Technical Services (BESCERT)
                        <br />
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border border-bes-primary/20">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-bes-primary text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bes-primary mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:connect@bescert.com"
                        className="text-black/70 hover:text-bes-primary transition"
                      >
                        connect@bescert.com
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="border border-bes-primary/20">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-bes-primary text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-bes-primary mb-2">
                        Phone
                      </h3>
                      <p className="text-black/70">
                        +91 94444 17337 / +91 99626 10605
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-xl font-bold text-bes-primary mb-3">
                Service Areas
              </h3>
              <p className="text-black/70 leading-relaxed">
                <strong>India:</strong> Chennai, Trichy, Coimbatore, PAN-India
                <br />
                <strong>International:</strong> Singapore, Malaysia, KSA, UAE,
                Oman, Kuwait, Qatar, Bahrain
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h2 className="text-2xl font-bold text-bes-primary mb-6">
                  Request Consultation
                </h2>

                <form className="space-y-6">
                  <Input
                    type="text"
                    label="Full Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Input
                    type="text"
                    label="Organization"
                    placeholder="Your company name"
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Input
                    type="text"
                    label="Designation"
                    placeholder="CEO / Plant Head / Manager"
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="you@company.com"
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Input
                    type="tel"
                    label="Phone Number"
                    placeholder="+91 XXXXX XXXXX"
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Input
                    type="text"
                    label="Service Interest"
                    placeholder="ISO / API / NDT / Welding / Digital / Inspection"
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Textarea
                    label="Message / Requirements"
                    placeholder="Tell us about your organization's needs..."
                    variant="bordered"
                    minRows={4}
                    classNames={{
                      input: "text-black",
                      label: "text-black/70",
                    }}
                  />

                  <Button
                    size="lg"
                    className="w-full bg-bes-primary text-white font-semibold"
                    endContent={<Send className="w-4 h-4" />}
                  >
                    Submit Request
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-bes-primary/30 bg-[#C7DFF0]">
            <CardBody className="p-8">
              <h3 className="text-xl font-bold text-bes-primary mb-4">
                Professional Compliance Disclaimer
              </h3>
              <p className="text-black/70 leading-relaxed">
                BES Certification and Technical Services (BESCERT) provides
                consultancy, inspection, training, and technical support
                services aligned with international standards.{" "}
                <strong>
                  Certification is issued by independent, accredited
                  certification bodies
                </strong>{" "}
                (such as BSI, LRQA, TUV, SGS, etc.). BESCERT supports
                organizations in achieving audit readiness and maintaining
                compliance but does not provide certification services directly.
                We coordinate with certification bodies on behalf of our clients
                to ensure smooth audit processes and successful outcomes.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Why Consult BESCERT */}
      <section className="px-4 md:px-8 py-12 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Consult BESCERT?
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            28+ years collective experience • 80% implementation, 20% planning •
            Digital systems mandatory • One-year assurance included •
            Audit-ready systems that grow businesses
          </p>
        </div>
      </section>
    </main>
  );
}
