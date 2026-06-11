import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | CalHub",
  description:
    "Read the CalHub disclaimer regarding the use of our free online construction calculators and estimation tools.",
  keywords: [
    "disclaimer",
    "calhub disclaimer",
    "construction calculator disclaimer",
    "estimation tools disclaimer",
    "website disclaimer",
  ],
  alternates: {
    canonical:
      "https://calhub.in/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | CalHub",
    description:
      "Important information regarding the use of CalHub and its construction calculators.",
    url: "https://calhub.in/disclaimer",
    siteName: "CalHub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | CalHub",
    description:
      "Important information regarding the use of CalHub and its construction calculators.",
    images: ["/og-image.jpg"],
  },
};