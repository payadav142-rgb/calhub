import { Metadata } from "next";
import FlooringCalculatorClient from "./FlooringCalculatorClient";

export const metadata: Metadata = {
  title:
    "Flooring Calculator for Tiles, Wood, Vinyl & Laminate | CalHub",

  description:
    "Free flooring calculator to estimate flooring area and total flooring cost for tile, wood, laminate, vinyl, marble, and renovation projects using room length and width.",

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
      "Calculate flooring area and estimated flooring cost for tiles, wood, laminate, vinyl, and marble flooring projects.",

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
      "Free flooring calculator for estimating floor area and flooring cost.",
  },
};

export default function Page() {
  return <FlooringCalculatorClient />;
}