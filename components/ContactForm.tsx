"use client";

import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
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
  );
}
