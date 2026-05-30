import type { Metadata } from "next";
import PaintCalculatorClient from "./PaintCalculatorClient";

export const metadata: Metadata = {
  title:
    "Paint Calculator | Wall Paint Estimator",
  description:
    "Free online paint calculator to estimate wall paint quantity for rooms, houses, and construction projects.",
  keywords: [
    "paint calculator",
    "wall paint calculator",
    "room paint estimator",
    "construction calculator",
    "paint quantity calculator",
  ],
  alternates: {
    canonical:
      "https://calculator-hub-seven.vercel.app/paint-calculator",
  },
};

export default function Page() {
  return <PaintCalculatorClient />;
}