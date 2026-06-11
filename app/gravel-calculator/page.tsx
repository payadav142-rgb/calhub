import { Metadata } from "next";
import GravelCalculatorClient from "./GravelCalculatorClient";

export const metadata: Metadata = {
  title:
    "Gravel Calculator for Driveways, Landscaping & Construction | CalHub",

  description:
    "Free online gravel calculator to estimate gravel volume for driveways, pathways, foundations, landscaping, drainage systems, and construction projects. Calculate gravel requirements instantly with formulas, examples, FAQs, and material estimates.",

  keywords: [
    "gravel calculator",
    "gravel volume calculator",
    "driveway gravel calculator",
    "landscaping gravel calculator",
    "construction gravel calculator",
    "foundation gravel calculator",
    "stone calculator",
    "aggregate calculator",
    "gravel quantity calculator",
    "material estimation calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/gravel-calculator",
  },

  openGraph: {
    title:
      "Gravel Calculator | CalHub",

    description:
      "Calculate gravel volume for driveways, landscaping, foundations, and construction projects instantly with CalHub's free gravel calculator.",

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
      "Free online gravel calculator for driveways, landscaping, foundations, and construction projects.",
  },
};

export default function Page() {
  return (
    <GravelCalculatorClient />
  );
}