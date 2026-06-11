import type { Metadata } from "next";

import PaverCalculator from "./PaverCalculatorClient";

export const metadata: Metadata = {
  title:
    "Paver Calculator for Patios, Driveways & Landscaping | CalHub",

  description:
    "Free online paver calculator to estimate the number of pavers required for patios, driveways, walkways, landscaping, and outdoor flooring projects. Calculate paver quantities instantly with formulas, examples, FAQs, and project estimates.",

  keywords: [
    "paver calculator",
    "patio paver calculator",
    "driveway paver calculator",
    "paving stone calculator",
    "landscaping paver calculator",
    "walkway paver calculator",
    "outdoor flooring calculator",
    "paver quantity calculator",
    "construction paver calculator",
    "patio material calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/paver-calculator",
  },

  openGraph: {
    title:
      "Paver Calculator | CalHub",

    description:
      "Calculate pavers needed for patios, driveways, walkways, and landscaping projects instantly with CalHub's free paver calculator.",

    url:
      "https://calhub.in/paver-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Paver Calculator | CalHub",

    description:
      "Free online paver calculator for patios, driveways, walkways, landscaping, and outdoor flooring projects.",
  },
};

export default function Page() {
  return <PaverCalculator />;
}