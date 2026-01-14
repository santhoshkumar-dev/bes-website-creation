import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BES - Certification. Compliance. Confidence.",
  description:
    "Practical, digital, audit-ready management systems that improve real business performance.",
  keywords: [
    "BES",
    "Certification",
    "Compliance",
    "Confidence",
    "Management Systems",
    "Audit Ready",
    "Digital",
    "Practical",
    "Business Performance",
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
          content="BES - Certification. Compliance. Confidence."
        />
        <meta
          name="keywords"
          content="BES, Certification, Compliance, Confidence, Management Systems, Audit Ready, Digital, Practical, Business Performance"
        />
        {/* Favicon */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${manrope.variable} antialiased p-4 md:p-8 mx-auto`}>
        <Providers>
          <NavBar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
