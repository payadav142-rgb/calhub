import type { Metadata } from "next";
import ExcavationCalculatorClient from "./ExcavationCalculatorClient";

export const metadata: Metadata = {
  title:
    "Excavation Calculator - Calculate Excavation Volume Easily | CalHub",

  description:
    "Free excavation calculator to estimate excavation volume for foundations, trenches, basements, and earthwork projects. Supports feet, meters, and centimeters.",

  keywords: [
    "excavation calculator",
    "excavation volume calculator",
    "earthwork calculator",
    "foundation excavation calculator",
    "trench excavation calculator",
    "construction calculator",
    "soil excavation calculator",
    "calhub excavation calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/excavation-calculator",
  },

  openGraph: {
    title:
      "Excavation Calculator | CalHub",

    description:
      "Calculate excavation volume instantly for construction and earthwork projects.",

    url:
      "https://calhub.in/excavation-calculator",

    siteName: "CalHub",

    type: "website",
  },
};

export default function Page() {
  return (
    <ExcavationCalculatorClient />
  );
}