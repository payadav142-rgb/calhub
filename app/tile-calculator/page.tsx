import { Metadata } from "next";

import TileCalculatorClient from "./TileCalculatorClient";

export const metadata: Metadata = {
  title:
    "Tile Calculator - Floor & Wall Tile Estimator | CalHub",
    
  description:
    "Use the free Tile Calculator by CalHub to estimate tiles required for flooring, bathrooms, kitchens, walls, and construction projects instantly.",

  keywords: [
    "tile calculator",
    "floor tile calculator",
    "wall tile calculator",
    "tiles estimator",
    "construction calculator",
    "tile quantity calculator",
    "CalHub",
  ],

  alternates: {
    canonical:
      "https://calhub.in/tile-calculator",
  },

  openGraph: {
    title:
      "Tile Calculator - Floor & Wall Tile Estimator | CalHub",

    description:
      "Calculate tile quantity instantly for flooring, kitchens, bathrooms, and wall installation projects with CalHub.",

    url:
      "https://calhub.in/tile-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Tile Calculator - Floor & Wall Tile Estimator | CalHub",

    description:
      "Estimate tiles required for flooring and wall installations instantly with CalHub.",
  },
};

export default function Page() {
  return <TileCalculatorClient />;
}