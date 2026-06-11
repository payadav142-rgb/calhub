import type { Metadata } from "next";

import RoofingCalculatorClient from "./RoofingCalculatorClient";

export const metadata: Metadata = {
  title:
    "Roofing Calculator for Roof Area, Materials & Cost Estimation | CalHub",

  description:
    "Free online roofing calculator to estimate roof area, roofing materials, shingles, and roofing costs. Calculate roofing requirements instantly with formulas, examples, FAQs, and project estimates.",

  keywords: [
    "roofing calculator",
    "roof area calculator",
    "roof cost calculator",
    "roof estimate calculator",
    "roofing material calculator",
    "shingle calculator",
    "roof square calculator",
    "roof measurement calculator",
    "construction roofing calculator",
    "roof replacement calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/roofing-calculator",
  },

  openGraph: {
    title:
      "Roofing Calculator | CalHub",

    description:
      "Calculate roof area, roofing materials, shingles, and roofing costs instantly with CalHub's free roofing calculator.",

    url:
      "https://calhub.in/roofing-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Roofing Calculator | CalHub",

    description:
      "Free roofing calculator for roof area, materials, shingles, and roofing cost estimation.",
  },
};

export default function Page() {
  return <RoofingCalculatorClient />;
}