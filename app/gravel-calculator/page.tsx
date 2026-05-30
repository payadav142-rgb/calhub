import type { Metadata } from "next";
import GravelCalculatorClient from "./GravelCalculatorClient";

export const metadata: Metadata = {
  title: "Gravel Calculator | Calculator Hub",
  description:
    "Free gravel calculator to estimate gravel quantity for driveways, landscaping, foundations, and construction projects.",
  keywords: [
    "gravel calculator",
    "gravel quantity calculator",
    "construction gravel calculator",
    "driveway gravel calculator",
    "gravel estimate",
  ],
  alternates: {
    canonical:
      "https://buildingcalculator.in/gravel-calculator",
  },
};

export default function Page() {
  return <GravelCalculatorClient />;
}