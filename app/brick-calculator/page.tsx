import { Metadata } from "next";
import BrickCalculatorClient from "./BrickCalculatorClient";

export const metadata: Metadata = {
  title:
    "Brick Calculator for Wall Construction | CalHub",

  description:
    "Free brick calculator for estimating bricks required for wall construction, masonry, and building projects. Calculate brick quantity instantly.",

  keywords: [
    "brick calculator",
    "wall brick calculator",
    "brick quantity calculator",
    "masonry calculator",
    "construction brick calculator",
    "bricks required calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/brick-calculator",
  },

  openGraph: {
    title:
      "Brick Calculator | CalHub",

    description:
      "Estimate the number of bricks required for construction projects instantly.",

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
      "Free brick calculator for wall construction and masonry projects.",
  },
};

export default function Page() {
  return (
    <BrickCalculatorClient />
  );
}