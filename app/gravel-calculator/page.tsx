import { Metadata } from "next";
import GravelCalculatorClient from "./GravelCalculatorClient";

export const metadata: Metadata = {
  title:
    "Gravel Calculator for Driveways, Landscaping & Construction | CalHub",

  description:
    "Free gravel calculator to estimate gravel volume and weight for driveways, landscaping, drainage, foundations, patios, and construction projects using length, width, and depth.",

  keywords: [
    "gravel calculator",
    "gravel volume calculator",
    "gravel weight calculator",
    "driveway gravel calculator",
    "landscaping gravel calculator",
    "gravel estimator",
    "gravel quantity calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/gravel-calculator",
  },

  openGraph: {
    title:
      "Gravel Calculator | CalHub",

    description:
      "Calculate gravel volume and estimated weight for driveways, landscaping, foundations, and construction projects with CalHub's free gravel calculator.",

    url:
      "https://calhub.in/gravel-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Gravel Calculator | CalHub",

    description:
      "Free gravel calculator for driveways, landscaping, foundations, and construction projects.",
  },
};

export default function Page() {
  return <GravelCalculatorClient />;
}