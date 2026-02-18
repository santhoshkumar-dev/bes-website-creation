"use client";

import React from "react";
import { Divider, Link } from "@heroui/react";
import { Linkedin, Mail, Phone, MapPin, PhoneCall } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "ISO Management Systems", href: "/services/iso" },
    { name: "API Compliance & Technical", href: "/services/api-q1" },
    { name: "NDT Services", href: "/services/ndt" },
    { name: "Welding Services", href: "/services/welding" },
    { name: "Inspection & Audit", href: "/services/inspection" },
    { name: "Digital Systems", href: "/services/digital" },
  ],
  company: [
    { name: "About BESCERT", href: "/about" },
    { name: "Why BESCERT", href: "/why-bes" },
    { name: "Industries Served", href: "/industries" },
    { name: "Global Presence", href: "/global-presence" },
  ],
  support: [
    { name: "Consultancy Assurance Model", href: "/consultancy-assurance" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bes-certification-and-technical-services-globally-ab80783a3/",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:connect@bescert.com", icon: Mail },
    { name: "WhatsApp", href: "https://wa.me/9444417337", icon: PhoneCall },
  ],
};

export default function Footer() {
  const renderList = React.useCallback(
    ({
      title,
      items,
    }: {
      title: string;
      items: { name: string; href: string }[];
    }) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                className="text-default-400 hover:text-bes-primary transition"
                href={item.href}
                size="sm"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer className="flex w-full flex-col">
      <div className="px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-16">
                  <img src="/logo.png" alt="BESCERT Logo" />
                </div>
                <div>
                  <h1 className="font-bold text-xl text-bes-primary">
                    BESCERT
                  </h1>
                  <p className="text-sm text-gray-600">Technical Services</p>
                </div>
              </div>
            </div>

            {/* GST  */}
            <p className="text-small text-default-500 leading-relaxed font-medium">
              GSTIN: 33ACCPE4171G1Z4
            </p>

            <p className="text-small text-default-500 leading-relaxed">
              ISO | API | Welding | NDT | Inspection | Audit | Digital Systems
              <br />
              Building systems that grow businesses.
            </p>
            <div className="flex items-start gap-2 text-small text-default-500">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Chennai, India</span>
            </div>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    isExternal
                    className="text-default-400 hover:text-bes-primary transition"
                    href={item.href}
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "Services",
                  items: footerNavigation.services,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({
                  title: "Company",
                  items: footerNavigation.company,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                {renderList({
                  title: "Support",
                  items: footerNavigation.support,
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Disclaimer */}
        <div className="mt-12 p-6 bg-default-100 rounded-lg">
          <h4 className="text-sm font-semibold text-default-700 mb-2">
            Professional Compliance Disclaimer
          </h4>
          <p className="text-xs text-default-500 leading-relaxed">
            BES Certification and Technical Services (BESCERT) provides
            consultancy, inspection, training, and technical support services
            aligned with international standards. Certification is issued by
            independent, accredited certification bodies. BESCERT supports
            organizations in achieving audit readiness and maintaining
            compliance but does not provide certification services directly.
          </p>
        </div>

        <Divider className="mt-16 sm:mt-20 lg:mt-24" />
        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; {new Date().getFullYear()} BES Certification and Technical
            Services (BESCERT). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
