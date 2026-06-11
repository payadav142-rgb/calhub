import { Metadata } from "next";
import TileCalculatorClient from "./TileCalculatorClient";

export const metadata: Metadata = {
  title:
    "Tile Calculator for Flooring & Wall Tiles | CalHub",

  description:
    "Free online tile calculator to estimate floor and wall tile requirements. Calculate tiles needed instantly with formulas, examples, FAQs, and PDF reports.",

  keywords: [
    "tile calculator",
    "floor tile calculator",
    "wall tile calculator",
    "tile estimator",
    "flooring calculator",
    "construction tile calculator",
    "bathroom tile calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/tile-calculator",
  },

  openGraph: {
    title:
      "Tile Calculator | CalHub",

    description:
      "Calculate floor and wall tile requirements instantly with CalHub's free tile calculator.",

    url:
      "https://calhub.in/tile-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Tile Calculator | CalHub",

    description:
      "Free online tile calculator for flooring, walls, kitchens, and bathrooms.",
  },
};

export default function Page() {
  return <TileCalculatorClient />;
}