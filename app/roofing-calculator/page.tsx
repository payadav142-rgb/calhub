import type { Metadata } from "next";

import RoofingCalculatorClient from "./RoofingCalculatorClient";

export const metadata: Metadata = {
  title:
    "Roofing Calculator | Roof Area & Roofing Cost Estimator",
    
  description:
    "Free roofing calculator to estimate roof area, roofing materials, and roofing cost instantly for construction and renovation projects.",

  keywords: [
    "roofing calculator",
    "roof cost calculator",
    "roof area calculator",
    "roof estimate calculator",
    "construction roofing calculator",
    "roofing material calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/roofing-calculator",
  },
};

export default function Page() {
  return <RoofingCalculatorClient />;
}