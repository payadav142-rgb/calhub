import { Metadata } from "next";
import ConcreteCalculatorClient from "./ConcreteCalculatorClient";

export const metadata: Metadata = {
  title:
    "Concrete Calculator for Slabs, Foundations & Footings | CalHub",

  description:
    "Free concrete calculator to estimate concrete volume for slabs, foundations, footings, columns, and construction projects. Calculate concrete requirements using length, width, and depth.",

  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "concrete slab calculator",
    "foundation concrete calculator",
    "footing concrete calculator",
    "cement concrete calculator",
    "construction concrete calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/concrete-calculator",
  },

  openGraph: {
    title:
      "Concrete Calculator | CalHub",

    description:
      "Calculate concrete volume for slabs, foundations, footings, and construction projects with CalHub's free concrete calculator.",

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
      "Free concrete calculator for slabs, foundations, footings, and construction projects.",
  },
};

export default function Page() {
  return <ConcreteCalculatorClient />;
}