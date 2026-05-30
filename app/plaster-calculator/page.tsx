import type { Metadata } from "next";
import PlasterCalculator from "./PlasterCalculatorClient";

export const metadata: Metadata = {
  title:
    "Plaster Calculator | Wall & Ceiling Plaster Estimator",

  description:
    "Free online plaster calculator to estimate plaster volume for walls, ceilings, rooms, and construction projects. Calculate plaster quantity instantly.",

  keywords: [
    "plaster calculator",
    "plaster volume calculator",
    "wall plaster calculator",
    "ceiling plaster calculator",
    "plaster quantity calculator",
    "construction calculator",
    "wall finishing calculator",
    "building plaster estimator",
  ],

  alternates: {
    canonical:
      "https://buildingcalculator.in/plaster-calculator",
  },

  openGraph: {
    title:
      "Plaster Calculator | Wall & Ceiling Plaster Estimator",

    description:
      "Calculate plaster volume required for walls, ceilings, and construction projects with our free online plaster calculator.",

    url:
      "https://buildingcalculator.in/plaster-calculator",

    siteName: "Building Calculator",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plaster Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Plaster Calculator | Wall & Ceiling Plaster Estimator",

    description:
      "Estimate plaster volume instantly for walls, ceilings, and construction projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PlasterCalculator />;
}