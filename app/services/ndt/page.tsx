import { Metadata } from "next";
import NdtContent from "@/components/NdtContent";

export const metadata: Metadata = {
  title: "NDT Services - Training, Certification & Level III Support",
  description:
    "NDT training and certification for RT, UT, MT, PT, and VT methods. Level III consulting, procedure development, and digital examination systems.",
  alternates: {
    canonical: "https://bescert.com/services/ndt",
  },
};

export default function NDTPage() {
  return <NdtContent />;
}
