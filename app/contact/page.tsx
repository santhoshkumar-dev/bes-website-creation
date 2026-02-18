import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact BESCERT - Get In Touch",
  description:
    "Contact BESCERT for your ISO certification, API compliance, and technical service needs. Reach us via phone, email, or visit our Chennai office.",
  alternates: {
    canonical: "https://bescert.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
