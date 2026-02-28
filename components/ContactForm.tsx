"use client";

import { Card, CardBody } from "@heroui/react";

export default function ContactForm() {
  return (
    <Card className="border border-bes-primary/20 bg-white overflow-hidden shadow-md">
      <CardBody className="p-2 md:p-4">
        <iframe
          src="https://forms.office.com/r/36Gku8gwms?origin=lprLink"
          width="100%"
          style={{ border: "none", minHeight: "800px" }}
          allowFullScreen
          title="Contact Form"
        />
      </CardBody>
    </Card>
  );
}
