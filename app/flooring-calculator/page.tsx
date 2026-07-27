import { Metadata } from "next";
import FlooringCalculatorClient from "./FlooringCalculatorClient";

export const metadata: Metadata = {
  title:
    "Flooring Calculator for Tile, Wood & Vinyl Flooring | CalHub",

  description:
    "Free flooring calculator to estimate floor area and flooring cost for tile, laminate, vinyl, hardwood, marble, and renovation projects.",

  keywords: [
    "flooring calculator",
    "floor area calculator",
    "tile flooring calculator",
    "wood flooring calculator",
    "vinyl flooring calculator",
    "laminate flooring calculator",
    "flooring cost calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/flooring-calculator",
  },

  openGraph: {
    title:
      "Flooring Calculator | CalHub",

    description:
      "Calculate flooring area and estimated flooring cost for tile, wood, vinyl, laminate, and marble flooring projects.",

    url:
      "https://calhub.in/flooring-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Flooring Calculator | CalHub",

    description:
      "Free flooring calculator to estimate floor area and flooring installation cost.",
  },
};

export default function Page() {
  return <FlooringCalculatorClient />;
}