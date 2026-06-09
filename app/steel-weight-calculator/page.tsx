import { Metadata } from "next";
import SteelWeightCalculatorClient from "./SteelWeightCalculatorClient";

export const metadata: Metadata = {
  title:
    "Steel Weight Calculator | Calculate Steel Bar Weight Online - CalHub",

  description:
    "Free online steel weight calculator to calculate steel bar weight instantly for construction and engineering projects.",

  keywords: [
    "steel weight calculator",
    "steel bar weight calculator",
    "rebar weight calculator",
    "steel calculator",
    "construction calculator",
    "steel weight formula",
    "online steel calculator",
    "calhub steel calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/steel-weight-calculator",
  },

  openGraph: {
    title:
      "Steel Weight Calculator | Calculate Steel Bar Weight Online - CalHub",

    description:
      "Calculate steel bar weight instantly using this free online steel weight calculator.",

    url:
      "https://calhub.in/steel-weight-calculator",

    siteName: "CalHub",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Steel Weight Calculator | Calculate Steel Bar Weight Online - CalHub",

    description:
      "Free online steel weight calculator for construction projects.",
  },
};

export default function Page() {
  return (
    <SteelWeightCalculatorClient />
  );
}