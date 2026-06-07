import type { Metadata } from "next";
import TileCalculator from "./TileCalculatorClient";

export const metadata: Metadata = {
  title: "Tile Calculator | Calculator Hub",

  description:
    "Free tile calculator to estimate the number of floor and wall tiles required for homes, bathrooms, kitchens, and construction projects.",

  keywords: [
    "tile calculator",
    "floor tile calculator",
    "wall tile calculator",
    "tile quantity calculator",
    "construction calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/tile-calculator",
  },
};

export default function Page() {
  return <TileCalculator />;
}