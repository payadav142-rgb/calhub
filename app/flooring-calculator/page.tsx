import type { Metadata } from "next";
import FlooringCalculatorClient from "./FlooringCalculatorClient";

export const metadata: Metadata = {
  title: "Flooring Calculator | Calculator Hub",

  description:
    "Calculate flooring area and estimate flooring costs instantly for homes, offices, renovation projects, and construction work.",

  keywords: [
    "flooring calculator",
    "flooring cost calculator",
    "tile flooring calculator",
    "floor area calculator",
    "construction flooring calculator",
    "flooring estimate",
  ],

  alternates: {
    canonical: "/flooring-calculator",
  },

  openGraph: {
    title: "Flooring Calculator | Calculator Hub",

    description:
      "Estimate flooring area and flooring costs instantly for residential and commercial projects.",

    url:
      "https://calculator-hub-murex.vercel.app/flooring-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flooring Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Flooring Calculator | Calculator Hub",

    description:
      "Calculate flooring area and total flooring cost instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <FlooringCalculatorClient />;
}