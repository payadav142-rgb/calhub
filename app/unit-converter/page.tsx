import { Metadata } from "next";
import UnitConverterClient from "./UnitConverterClient";

export const metadata: Metadata = {
  title:
    "Unit Converter for Construction & Engineering | CalHub",

  description:
    "Free online unit converter for meters, feet, inches, and centimeters. Convert measurements instantly with formulas, examples, FAQs, and PDF reports.",

  keywords: [
    "unit converter",
    "meters to feet",
    "feet to meters",
    "measurement converter",
    "construction unit converter",
    "engineering converter",
    "length converter",
  ],

  alternates: {
    canonical:
      "https://calhub.in/unit-converter",
  },

  openGraph: {
    title:
      "Unit Converter | CalHub",

    description:
      "Convert meters, feet, inches, and centimeters instantly with CalHub's free online unit converter.",

    url:
      "https://calhub.in/unit-converter",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Unit Converter | CalHub",

    description:
      "Free online measurement converter for construction and engineering projects.",
  },
};

export default function Page() {
  return <UnitConverterClient />;
}