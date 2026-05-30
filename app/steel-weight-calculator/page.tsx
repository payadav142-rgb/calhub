import type { Metadata } from "next";
import SteelWeightCalculatorClient from "./SteelWeightCalculatorClient";

export const metadata: Metadata = {
  title: "Steel Weight Calculator | Calculator Hub",
  description:
    "Free steel weight calculator to estimate reinforcement steel bar weight using diameter and length for construction projects.",
  keywords: [
    "steel weight calculator",
    "rebar weight calculator",
    "steel bar weight calculator",
    "construction calculator",
    "steel quantity calculator",
  ],
  alternates: {
    canonical: "/steel-weight-calculator",
  },
};

export default function Page() {
  return <SteelWeightCalculatorClient />;
}