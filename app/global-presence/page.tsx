import { Metadata } from "next";
import GlobalContent from "@/components/GlobalContent";

export const metadata: Metadata = {
  title: "Global Presence - Operating Across India, Middle East & Asia",
  description:
    "BESCERT operates in Chennai, Trichy, Coimbatore, and international markets including Singapore, Malaysia, KSA, UAE, and Qatar.",
  alternates: {
    canonical: "https://bescert.com/global-presence",
  },
};

export default function GlobalPresencePage() {
  return <GlobalContent />;
}
