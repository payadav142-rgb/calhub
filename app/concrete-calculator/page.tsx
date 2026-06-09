import { Metadata } from "next";
import ConcreteCalculator from "./ConcreteCalculatorClient";

export const metadata: Metadata = {
  title:
    "Concrete Calculator for Slabs & Foundations | CalHub",

  description:
    "Free concrete calculator to estimate concrete volume for slabs, footings, foundations, and construction projects.",

  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "slab concrete calculator",
    "foundation concrete calculator",
    "construction concrete calculator",
    "cement concrete calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/concrete-calculator",
  },

  openGraph: {
    title:
      "Concrete Calculator | CalHub",

    description:
      "Estimate concrete volume for slabs, foundations, and construction projects instantly.",

    url:
      "https://calhub.in/concrete-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Concrete Calculator | CalHub",

    description:
      "Free concrete calculator for slabs, footings, and foundations.",
  },
};

export default function Page() {
  return <ConcreteCalculator />;
}