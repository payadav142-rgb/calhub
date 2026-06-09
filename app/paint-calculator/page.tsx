import { Metadata } from "next";
import PaintCalculator from "./PaintCalculatorClient";

export const metadata: Metadata = {
  title:
    "Paint Calculator - Estimate Paint Quantity Online",

  description:
    "Free online paint calculator to estimate paint required for walls, rooms, ceilings, and renovation projects.",

  keywords: [
    "paint calculator",
    "wall paint calculator",
    "paint quantity calculator",
    "room paint calculator",
    "construction calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/paint-calculator",
  },
};

export default function Page() {
  return <PaintCalculator />;
}