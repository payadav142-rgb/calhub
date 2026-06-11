import { Metadata } from "next";
import PaintCalculator from "./PaintCalculatorClient";

export const metadata: Metadata = {
  title:
    "Paint Calculator for Walls, Rooms & Ceilings | CalHub",

  description:
    "Free online paint calculator to estimate paint quantity for walls, rooms, ceilings, homes, and renovation projects. Calculate paint requirements instantly with formulas, examples, FAQs, and coverage estimates.",

  keywords: [
    "paint calculator",
    "wall paint calculator",
    "paint quantity calculator",
    "room paint calculator",
    "house paint calculator",
    "ceiling paint calculator",
    "paint coverage calculator",
    "interior paint calculator",
    "exterior paint calculator",
    "construction paint calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/paint-calculator",
  },

  openGraph: {
    title:
      "Paint Calculator | CalHub",

    description:
      "Calculate paint quantity for walls, rooms, ceilings, and renovation projects instantly with CalHub's free paint calculator.",

    url:
      "https://calhub.in/paint-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Paint Calculator | CalHub",

    description:
      "Free online paint calculator for walls, rooms, ceilings, and home renovation projects.",
  },
};

export default function Page() {
  return <PaintCalculator />;
}