import { Metadata } from "next";
import AsphaltCalculatorClient from "./AsphaltCalculatorClient";

export const metadata: Metadata = {
  title:
    "Asphalt Calculator for Roads & Driveways | CalHub",

  description:
    "Free asphalt calculator for estimating asphalt quantity for roads, parking lots, paving, and driveways. Calculate asphalt volume instantly.",

  keywords: [
    "asphalt calculator",
    "paving calculator",
    "road asphalt calculator",
    "driveway asphalt calculator",
    "asphalt volume calculator",
    "parking lot asphalt calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/asphalt-calculator",
  },

  openGraph: {
    title:
      "Asphalt Calculator | CalHub",

    description:
      "Estimate asphalt quantity for paving and construction projects instantly.",

    url:
      "https://calhub.in/asphalt-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Asphalt Calculator | CalHub",

    description:
      "Free asphalt calculator for roads, parking lots, paving, and driveways.",
  },
};

export default function Page() {
  return (
    <AsphaltCalculatorClient />
  );
}