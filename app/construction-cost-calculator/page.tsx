import type { Metadata } from "next";
import ConstructionCostCalculatorClient from "./ConstructionCostCalculatorClient";

export const metadata: Metadata = {
  title:
    "Construction Cost Calculator - Free Building Cost Estimator",

  description:
    "Calculate total construction cost based on area and cost per square foot. Free online construction cost calculator for builders, contractors, and homeowners.",

  keywords: [
    "construction cost calculator",
    "building cost calculator",
    "house construction calculator",
    "construction estimator",
    "cost per square foot calculator",
    "building budget calculator",
  ],

  alternates: {
    canonical: "/construction-cost-calculator",
  },

  openGraph: {
    title:
      "Construction Cost Calculator - Free Building Cost Estimator",

    description:
      "Estimate total building construction costs instantly using area and cost per square foot.",

    url:
      "https://calhub.in/construction-cost-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Cost Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Construction Cost Calculator - Free Building Cost Estimator",

    description:
      "Estimate total building construction costs instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ConstructionCostCalculatorClient />;
}