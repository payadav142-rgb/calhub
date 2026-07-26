import { Metadata } from "next";
import AsphaltCalculatorClient from "./AsphaltCalculatorClient";

export const metadata: Metadata = {
  title:
    "Asphalt Calculator for Roads, Driveways & Paving | CalHub",

  description:
    "Free asphalt calculator to estimate asphalt volume for roads, driveways, parking lots, and paving projects. Calculate asphalt quantity using length, width, and thickness.",

  keywords: [
    "asphalt calculator",
    "asphalt volume calculator",
    "asphalt quantity calculator",
    "driveway asphalt calculator",
    "road asphalt calculator",
    "paving calculator",
    "asphalt thickness calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/asphalt-calculator",
  },

  openGraph: {
    title:
      "Asphalt Calculator | CalHub",

    description:
      "Calculate asphalt volume for roads, driveways, parking lots, and paving projects with CalHub's free asphalt calculator.",

    url: "https://calhub.in/asphalt-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Asphalt Calculator | CalHub",

    description:
      "Free asphalt calculator for roads, driveways, parking lots, and paving projects.",
  },
};

export default function Page() {
  return <AsphaltCalculatorClient />;
}