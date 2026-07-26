import { Metadata } from "next";
import ConstructionCostCalculatorClient from "./ConstructionCostCalculatorClient";

export const metadata: Metadata = {
  title:
    "Construction Cost Calculator for House & Building Projects | CalHub",

  description:
    "Free construction cost calculator to estimate house, residential, commercial, and renovation project costs. Calculate total construction cost using area and cost per square foot or square meter.",

  keywords: [
    "construction cost calculator",
    "house construction cost calculator",
    "building cost calculator",
    "construction estimate calculator",
    "cost per square foot calculator",
    "construction budgeting calculator",
    "home construction calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/construction-cost-calculator",
  },

  openGraph: {
    title:
      "Construction Cost Calculator | CalHub",

    description:
      "Estimate construction costs for houses, buildings, apartments, and renovation projects with CalHub's free construction cost calculator.",

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
      "Free construction cost calculator for estimating house and building project costs.",
  },
};

export default function Page() {
  return <ConstructionCostCalculatorClient />;
}