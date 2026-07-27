import { Metadata } from "next";
import ExcavationCalculatorClient from "./ExcavationCalculatorClient";

export const metadata: Metadata = {
  title:
    "Excavation Calculator for Foundations, Trenches & Earthwork | CalHub",

  description:
    "Free excavation calculator to estimate excavation volume for foundations, trenches, basements, landscaping, and earthwork projects using length, width, and depth.",

  keywords: [
    "excavation calculator",
    "excavation volume calculator",
    "earthwork calculator",
    "foundation excavation calculator",
    "trench volume calculator",
    "soil excavation calculator",
    "excavation estimator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/excavation-calculator",
  },

  openGraph: {
    title:
      "Excavation Calculator | CalHub",

    description:
      "Calculate excavation volume for foundations, trenches, basements, and earthwork projects with CalHub's free excavation calculator.",

    url:
      "https://calhub.in/excavation-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Excavation Calculator | CalHub",

    description:
      "Free excavation calculator for foundations, trenches, basements, and earthwork projects.",
  },
};

export default function Page() {
  return <ExcavationCalculatorClient />;
}