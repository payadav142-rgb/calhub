import { Metadata } from "next";
import BrickCalculatorClient from "./BrickCalculatorClient";

export const metadata: Metadata = {
  title:
    "Brick Calculator for Wall Construction | CalHub",

  description:
    "Free brick calculator to estimate the number of bricks required for wall construction, masonry, and building projects. Calculate brick quantity using wall length and height.",

  keywords: [
    "brick calculator",
    "brick quantity calculator",
    "wall brick calculator",
    "brick estimation calculator",
    "construction brick calculator",
    "masonry calculator",
    "brick calculator for wall",
  ],

  alternates: {
    canonical:
      "https://calhub.in/brick-calculator",
  },

  openGraph: {
    title:
      "Brick Calculator | CalHub",

    description:
      "Estimate the number of bricks required for walls, buildings, and masonry projects with CalHub's free brick calculator.",

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
  return <BrickCalculatorClient />;
}