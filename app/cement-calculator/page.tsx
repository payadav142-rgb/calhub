import { Metadata } from "next";
import CementCalculator from "./CementCalculatorClient";

export const metadata: Metadata = {
  title:
    "Cement Calculator for Construction Projects | CalHub",

  description:
    "Free cement calculator for estimating cement bags required for slabs, foundations, concrete, and construction projects.",

  keywords: [
    "cement calculator",
    "cement bags calculator",
    "construction cement calculator",
    "concrete cement calculator",
    "cement estimation calculator",
    "cement quantity calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/cement-calculator",
  },

  openGraph: {
    title:
      "Cement Calculator | CalHub",

    description:
      "Estimate cement bags required for construction and concrete work instantly.",

    url:
      "https://calhub.in/cement-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cement Calculator | CalHub",

    description:
      "Free cement calculator for concrete and construction projects.",
  },
};

export default function Page() {
  return <CementCalculator />;
}