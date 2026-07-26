import { Metadata } from "next";
import CementCalculatorClient from "./CementCalculatorClient";

export const metadata: Metadata = {
  title:
    "Cement Calculator for Concrete & Construction | CalHub",

  description:
    "Free cement calculator to estimate cement bags required for concrete slabs, foundations, floors, and construction projects. Includes formulas, examples, unit conversion, FAQs, and PDF reports.",

  keywords: [
    "cement calculator",
    "cement bag calculator",
    "cement quantity calculator",
    "cement calculator for concrete",
    "concrete cement calculator",
    "cement bags required calculator",
    "construction cement calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/cement-calculator",
  },

  openGraph: {
    title:
      "Cement Calculator for Concrete & Construction | CalHub",

    description:
      "Estimate cement bags for concrete and construction projects with CalHub's free cement calculator.",

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
      "Free online cement calculator for estimating cement bags required for concrete and construction projects.",
  },
};

export default function Page() {
  return <CementCalculatorClient />;
}