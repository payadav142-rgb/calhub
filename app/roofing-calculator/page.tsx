import type { Metadata } from "next";
import Client from "./RoofingCalculatorClient";

export const metadata: Metadata = {
  title:
    "Roofing Calculator | Roof Area & Roofing Cost Estimator",

  description:
    "Free online roofing calculator to estimate roof area, roofing material requirements, and roofing costs for residential and commercial construction projects.",

  keywords: [
    "roofing calculator",
    "roof area calculator",
    "roofing cost calculator",
    "roof cost estimator",
    "roof material calculator",
    "construction calculator",
    "roof measurement calculator",
    "building roofing calculator",
  ],

  alternates: {
    canonical:
      "https://buildingcalculator.in/roofing-calculator",
  },

  openGraph: {
    title:
      "Roofing Calculator | Roof Area & Roofing Cost Estimator",

    description:
      "Calculate roof area and estimate roofing costs instantly with our free online roofing calculator.",

    url:
      "https://buildingcalculator.in/roofing-calculator",

    siteName: "Building Calculator",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roofing Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Roofing Calculator | Roof Area & Roofing Cost Estimator",

    description:
      "Estimate roofing area, materials, and project costs instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <Client />;
}