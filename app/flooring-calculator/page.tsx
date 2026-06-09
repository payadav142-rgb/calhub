import type { Metadata } from "next";
import FlooringCalculatorClient from "./FlooringCalculatorClient";

export const metadata: Metadata = {
  title:
    "Flooring Calculator - Estimate Flooring Area & Cost | CalHub",

  description:
    "Free flooring calculator to estimate flooring area and flooring cost for tiles, vinyl, wood, marble, and laminate flooring projects.",

  keywords: [
    "flooring calculator",
    "tile flooring calculator",
    "floor area calculator",
    "flooring cost calculator",
    "laminate flooring calculator",
    "vinyl flooring calculator",
    "marble flooring calculator",
    "construction flooring calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/flooring-calculator",
  },

  openGraph: {
    title:
      "Flooring Calculator | CalHub",

    description:
      "Estimate flooring area and flooring cost instantly for construction and renovation projects.",

    url:
      "https://calhub.in/flooring-calculator",

    siteName: "CalHub",

    type: "website",
  },
};

export default function Page() {
  return (
    <FlooringCalculatorClient />
  );
}