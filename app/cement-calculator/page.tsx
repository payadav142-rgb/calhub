import { Metadata } from "next";
import CementCalculator from "./CementCalculatorClient";

export const metadata: Metadata = {
  title:
    "Cement Calculator for Concrete, Slabs & Foundations | CalHub",

  description:
    "Free cement calculator to estimate cement bags required for concrete, slabs, foundations, columns, and construction projects. Calculate cement quantity using length, width, and height.",

  keywords: [
    "cement calculator",
    "cement bag calculator",
    "cement quantity calculator",
    "cement estimation calculator",
    "concrete cement calculator",
    "foundation cement calculator",
    "slab cement calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/cement-calculator",
  },

  openGraph: {
    title:
      "Cement Calculator | CalHub",

    description:
      "Calculate cement bags required for concrete, slabs, foundations, and construction projects with CalHub's free cement calculator.",

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
      "Free cement calculator for concrete, slabs, foundations, and construction projects.",
  },
};

export default function Page() {
  return <CementCalculator />;
}