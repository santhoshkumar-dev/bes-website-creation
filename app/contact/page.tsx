"use client";

import { Metadata } from "next";
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "ISO Certification & Consultancy",
    "API Q1 Consultancy",
    "NDT Services",
    "Welding Services",
    "Inspection & Audit Management",
    "Digital Enablement",
    "General Inquiry",
  ];

  return (
    <main className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(0,51,102,0.85), rgba(0,51,102,0.85)), url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 h-full text-white flex items-center">
          <div className="p-4 md:p-12 space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl leading-relaxed">
              Ready to transform your compliance approach? Let's discuss your
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border border-bes-primary/20">
              <CardBody className="p-8">
                <h2 className="text-3xl font-bold text-bes-primary mb-6">
                  Request a Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-bes-primary font-semibold",
                    }}
                  />

                  <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    required
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-bes-primary font-semibold",
                    }}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    required
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-bes-primary font-semibold",
                    }}
                  />

                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-bes-primary font-semibold",
                    }}
                  />

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-bes-primary">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border-2 border-default-200 rounded-lg focus:border-bes-primary outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your certification needs, current challenges, or any questions you have..."
                    minRows={5}
                    variant="bordered"
                    classNames={{
                      input: "text-black",
                      label: "text-bes-primary font-semibold",
                    }}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-bes-primary text-white font-semibold"
                    endContent={<Send className="w-5 h-5" />}
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-6">
                  <h2 className="text-3xl font-bold text-bes-primary">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-bes-primary text-white">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bes-primary">
                          Email Us
                        </h3>
                        <p className="text-black/70">
                          info@bescertification.com
                        </p>
                        <p className="text-black/70">
                          consultancy@bescertification.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-bes-primary text-white">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bes-primary">
                          Call Us
                        </h3>
                        <p className="text-black/70">+1 (555) 123-4567</p>
                        <p className="text-sm text-black/60">
                          Mon - Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-bes-primary text-white">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bes-primary">
                          Global Services
                        </h3>
                        <p className="text-black/70">
                          Serving industrial organizations worldwide
                        </p>
                        <p className="text-sm text-black/60">
                          On-site support available in multiple locations
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Links */}
              <Card className="border border-bes-primary/20">
                <CardBody className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-bes-primary">
                    Quick Actions
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="mailto:info@bescertification.com"
                      className="block p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                    >
                      <p className="font-semibold text-bes-primary">
                        Talk to a Technical Expert
                      </p>
                      <p className="text-sm text-black/60">
                        Get immediate technical guidance
                      </p>
                    </a>

                    <a
                      href="/services"
                      className="block p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                    >
                      <p className="font-semibold text-bes-primary">
                        Explore Our Services
                      </p>
                      <p className="text-sm text-black/60">
                        View our complete service portfolio
                      </p>
                    </a>

                    <a
                      href="/why-bes"
                      className="block p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors"
                    >
                      <p className="font-semibold text-bes-primary">
                        Why Choose BES
                      </p>
                      <p className="text-sm text-black/60">
                        Discover the BES difference
                      </p>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="px-4 md:px-8 py-12 bg-secondary-50 rounded-3xl">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-bes-primary text-center">
            Important Notice
          </h2>

          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              <strong className="text-bes-primary">
                Certification Services:
              </strong>{" "}
              BES Certification and Technical Services provides consultancy and
              implementation support. We do not provide third-party
              certification services. Upon completion of implementation, we
              connect you with accredited certification bodies (such as BSI,
              LRQA, TUV, SGS, etc.) for independent certification audits.
            </p>

            <p>
              <strong className="text-bes-primary">Global Compliance:</strong>{" "}
              Our services are designed to meet internationally recognized
              standards including ISO 9001, ISO 14001, ISO 45001, API Q1, and
              other industry-specific requirements. All consultancy is delivered
              in accordance with the requirements of the applicable standards
              and accreditation criteria.
            </p>

            <p>
              <strong className="text-bes-primary">Confidentiality:</strong> All
              information shared with BES is treated with strict
              confidentiality. We maintain professional ethics and do not
              disclose client information without explicit consent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 bg-bes-primary rounded-3xl">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Whether you're seeking ISO certification, API Q1 licensing, or
            operational excellence, BES is ready to support your journey.
          </p>
          <p className="text-base opacity-80">
            We typically respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
