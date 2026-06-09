import { Metadata } from "next";
import AreaCalculatorClient from "./AreaCalculatorClient";

export const metadata: Metadata = {
  title:
    "Area Calculator for Rooms, Flooring & Construction | CalHub",

  description:
    "Free online area calculator for rooms, flooring, plots, land, and construction projects. Calculate square feet instantly with formulas, examples, FAQs, and PDF reports.",

  keywords: [
    "area calculator",
    "square feet calculator",
    "room area calculator",
    "flooring area calculator",
    "construction area calculator",
    "plot area calculator",
    "land area calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/area-calculator",
  },

  openGraph: {
    title:
      "Area Calculator | CalHub",

    description:
      "Calculate room, flooring, plot, and construction area instantly with CalHub's free online area calculator.",

    url: "https://calhub.in/area-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Area Calculator | CalHub",

    description:
      "Free online area calculator for construction, flooring, rooms, and plots.",
  },
};

export default function Page() {
  return <AreaCalculatorClient />;
}