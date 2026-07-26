import { Metadata } from "next";
import AreaCalculatorClient from "./AreaCalculatorClient";

export const metadata: Metadata = {
  title:
    "Area Calculator for Rooms, Flooring & Construction | CalHub",

  description:
    "Free online area calculator for rooms, flooring, plots, land, and construction projects. Calculate area in square feet with unit conversion, formulas, examples, FAQs, and PDF reports.",

  keywords: [
    "area calculator",
    "square feet calculator",
    "room area calculator",
    "flooring area calculator",
    "construction area calculator",
    "plot area calculator",
    "land area calculator",
    "square meter calculator",
    "square foot calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/area-calculator",
  },

  openGraph: {
    title:
      "Area Calculator for Rooms, Flooring & Construction | CalHub",

    description:
      "Calculate room, flooring, plot, land, and construction area with unit conversion using CalHub's free area calculator.",

    url:
      "https://calhub.in/area-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Area Calculator for Rooms, Flooring & Construction | CalHub",

    description:
      "Free area calculator for rooms, flooring, plots, land, and construction projects with unit conversion and PDF reports.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AreaCalculatorClient />;
}