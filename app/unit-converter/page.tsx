import type { Metadata } from "next";
import UnitConverter from "./UnitConverterClient";

export const metadata: Metadata = {
  title: "Unit Converter | Calculator Hub",

  description:
    "Free unit converter for construction and engineering projects. Convert meters to feet and other measurement units quickly and accurately.",

  keywords: [
    "unit converter",
    "meters to feet converter",
    "construction unit converter",
    "measurement converter",
    "engineering converter",
  ],

  alternates: {
    canonical:
      "https://calhub.in/unit-converter",
  },
};

export default function Page() {
  return <UnitConverter />;
}