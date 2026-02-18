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
  metadataBase: new URL("https://bescert.com"),
  title: {
    default: "BESCERT - ISO Certification | API | NDT | Welding | Inspection",
    template: "%s | BESCERT",
  },
  description:
    "BES Certification and Technical Services (BESCERT) delivers ISO consultancy, API compliance, welding and NDT services, inspection, audit, and digital management systems. Building systems that grow businesses.",
  keywords: [
    "BESCERT",
    "ISO Certification",
    "ISO Consultancy India",
    "API Compliance",
    "NDT Services",
    "Welding Certification",
    "Industrial Inspection",
    "Digital Management Systems",
    "Audit Services",
    "Chennai",
    "Oil and Gas",
    "EPC",
  ],
  authors: [{ name: "BESCERT" }],
  creator: "BESCERT",
  publisher: "BESCERT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bescert.com",
    title: "BESCERT - Global Certification & Technical Services",
    description:
      "Your partner for ISO, API, NDT, Welding, and Digital Management Systems. We ensure compliance and business growth.",
    siteName: "BESCERT",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "BESCERT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BESCERT - ISO | API | Technical Services",
    description:
      "Specialized certification and technical services for industrial, manufacturing, and energy sectors.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
      </head>
      <body className={`${manrope.variable} antialiased p-4 md:p-8 mx-auto`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BESCERT",
              image: "https://bescert.com/logo.png",
              description:
                "BES Certification and Technical Services (BESCERT) delivers ISO consultancy, API compliance, welding and NDT services.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "No.13, 2nd Floor, 2nd Main Road, Officers Colony, Adambakkam",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600088",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9868,
                longitude: 80.2078,
              },
              url: "https://bescert.com",
              telephone: "+919444417337",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
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
