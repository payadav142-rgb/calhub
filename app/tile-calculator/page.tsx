import type { Metadata } from "next";
import TileCalculatorClient from "./TileCalculatorClient";

export const metadata: Metadata = {
  title: "Tile Calculator | Calculator Hub",
  description:
    "Calculate tiles needed for flooring, bathrooms, kitchens, and wall installations instantly.",
  keywords: [
    "tile calculator",
    "floor tile calculator",
    "wall tile calculator",
    "tile estimator",
    "construction calculator",
  ],
};

export default function Page() {
  return <TileCalculatorClient />;
}