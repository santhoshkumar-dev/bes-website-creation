"use client";

import React from "react";
import { Divider, Link } from "@heroui/react";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerNavigation = {
  services: [
    { name: "ISO Certification", href: "#" },
    { name: "API Q1 Consultancy", href: "#" },
    { name: "NDT Services", href: "#" },
    { name: "Welding Certification", href: "#" },
    { name: "Inspection Services", href: "#" },
    { name: "Audit Management", href: "#" },
  ],
  supportOptions: [
    { name: "Contact Us", href: "#" },
    { name: "Request Quote", href: "#" },
    { name: "Training Calendar", href: "#" },
    { name: "Resources", href: "#" },
  ],
  aboutUs: [
    { name: "Our Story", href: "#" },
    { name: "Team", href: "#" },
    { name: "Certifications", href: "#" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Email", href: "mailto:info@bescertification.com", icon: Mail },
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
    []
  );

  return (
    <footer className="flex w-full flex-col">
      <div className="px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-16">
                  <img src="logo.png" alt="BES Logo" />
                </div>
                <div>
                  <h1 className="font-bold text-xl text-bes-primary">
                    BES Certification
                  </h1>
                  <p className="text-sm text-gray-600">Technical Services</p>
                </div>
              </div>
            </div>
            <p className="text-small text-default-500 leading-relaxed">
              Certification | Compliance | Confidence
              <br />
              Building audit-ready management systems that improve real business
              performance.
            </p>
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
                  title: "Support",
                  items: footerNavigation.supportOptions,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "About Us",
                  items: footerNavigation.aboutUs,
                })}
              </div>
              <div className="mt-10 md:mt-0">
                {renderList({ title: "Legal", items: footerNavigation.legal })}
              </div>
            </div>
          </div>
        </div>
        <Divider className="mt-16 sm:mt-20 lg:mt-24" />
        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; {new Date().getFullYear()} BES Certification and Technical
            Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
