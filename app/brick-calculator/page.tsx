import { Metadata } from "next";
import BrickCalculatorClient from "./BrickCalculatorClient";

export const metadata: Metadata = {
  title:
    "Brick Calculator for Wall Construction | CalHub",

  description:
    "Free brick calculator to estimate the number of bricks required for wall construction. Calculate brick quantity for walls, buildings, and masonry projects with examples, formulas, and PDF reports.",

  keywords: [
    "brick calculator",
    "brick quantity calculator",
    "brick wall calculator",
    "bricks required calculator",
    "wall brick calculator",
    "brick calculation",
    "construction brick calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/brick-calculator",
  },

  openGraph: {
    title:
      "Brick Calculator for Wall Construction | CalHub",

    description:
      "Estimate bricks required for wall construction, buildings, and masonry projects with CalHub's free brick calculator.",

    url:
      "https://calhub.in/brick-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brick Calculator | CalHub",

    description:
      "Free online brick calculator for estimating bricks required for wall construction.",
  },
};

export default function Page() {
  return <BrickCalculatorClient />;
}