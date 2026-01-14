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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
