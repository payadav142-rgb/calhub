import type { Metadata } from "next";
import StairCalculator from "./StairCalculatorClient";

export const metadata: Metadata = {
  title: "Stair Calculator | Calculator Hub",

  description:
    "Free stair calculator to estimate the number of stairs required for residential and commercial construction projects.",

  keywords: [
    "stair calculator",
    "stairs calculator",
    "step calculator",
    "staircase calculator",
    "construction calculator",
  ],

  alternates: {
    canonical:
      "https://buildingcalculator.in/stair-calculator",
  },
};

export default function Page() {
  return <StairCalculator />;
}