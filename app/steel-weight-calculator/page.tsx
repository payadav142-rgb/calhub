import type { Metadata } from "next";
import SteelWeightCalculator from "./SteelWeightCalculatorClient";

export const metadata: Metadata = {
  title: "Steel Weight Calculator | Calculator Hub",

  description:
    "Free steel weight calculator to estimate reinforcement steel bar weight using diameter and length for construction projects.",

  keywords: [
    "steel weight calculator",
    "rebar weight calculator",
    "steel bar weight calculator",
    "reinforcement steel calculator",
    "construction calculator",
  ],

  alternates: {
    canonical:
      "https://buildingcalculator.in/steel-weight-calculator",
  },
};

export default function Page() {
  return <SteelWeightCalculator />;
}