import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BESCERT - ISO | API | Welding | NDT | Inspection | Audit | Digital Systems",
  description:
    "BES Certification and Technical Services (BESCERT) delivers ISO consultancy, API compliance, welding and NDT services, inspection, audit, and digital management systems. Building systems that grow businesses. Assuring Your Business Growth.",
  keywords: [
    "BESCERT",
    "BES Certification",
    "ISO consultancy India",
    "API compliance services",
    "NDT training certification",
    "Welding qualification",
    "Management Systems",
    "Audit Ready",
    "Digital Systems",
    "Chennai",
    "Oil and Gas",
    "Manufacturing",
    "EPC",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "API Q1",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="BESCERT - Building systems that grow businesses. ISO, API, Welding, NDT, Inspection, Audit, Digital Systems."
        />
        <meta
          name="keywords"
          content="BESCERT, BES Certification, ISO consultancy India, API compliance, NDT training, Welding certification, Digital Systems, Chennai, Manufacturing, Oil Gas, EPC"
        />
        {/* Favicon */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${manrope.variable} antialiased p-4 md:p-8 mx-auto`}>
        <Providers>
          <NavBar />

          {children}

          <Footer />
          <FloatingContact />
        </Providers>
      </body>
    </html>
  );
}
