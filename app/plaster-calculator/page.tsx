import type { Metadata } from "next";
import PlasterCalculator from "./PlasterCalculatorClient";

export const metadata: Metadata = {
  title: "Plaster Calculator | Calculator Hub",
  description:
    "Calculate plaster volume required for walls, ceilings, and construction projects with our free online plaster calculator.",
  keywords: [
    "plaster calculator",
    "plaster volume calculator",
    "wall plaster calculator",
    "ceiling plaster calculator",
    "construction calculator",
  ],
  alternates: {
    canonical:
      "https://buildingcalculator.in/plaster-calculator",
  },
};

export default function Page() {
  return <PlasterCalculator />;
}