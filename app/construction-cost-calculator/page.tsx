import { Metadata } from "next";
import ConstructionCostCalculator from "./ConstructionCostCalculatorClient";

export const metadata: Metadata = {
  title:
    "Construction Cost Calculator | House & Building Estimator | CalHub",

  description:
    "Free construction cost calculator to estimate building, house, and renovation project costs instantly using area and cost per square foot.",

  keywords: [
    "construction cost calculator",
    "building cost calculator",
    "house construction calculator",
    "construction estimator",
    "home building cost calculator",
    "construction budget calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/construction-cost-calculator",
  },

  openGraph: {
    title:
      "Construction Cost Calculator | CalHub",

    description:
      "Estimate construction costs for buildings, houses, and renovation projects instantly.",

    url:
      "https://calhub.in/construction-cost-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Construction Cost Calculator | CalHub",

    description:
      "Free construction cost estimator for houses and buildings.",
  },
};

export default function Page() {
  return (
    <ConstructionCostCalculator />
  );
}