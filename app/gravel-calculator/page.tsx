import { Metadata } from "next";
import GravelCalculatorClient from "./GravelCalculatorClient";

export const metadata: Metadata = {
  title:
    "Gravel Calculator - Estimate Gravel Volume Online",
    
  description:
    "Free online gravel calculator to calculate gravel volume for driveways, landscaping, foundations, and construction projects.",

  keywords: [
    "gravel calculator",
    "gravel volume calculator",
    "construction calculator",
    "driveway gravel calculator",
    "landscaping calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/gravel-calculator",
  },
};

export default function Page() {
  return (
    <GravelCalculatorClient />
  );
}