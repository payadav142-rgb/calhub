import type { Metadata } from "next";
import BrickCalculatorClient from "./BrickCalculatorClient";

export const metadata: Metadata = {
  title:
    "Brick Calculator | Free Brick Quantity Calculator",

  description:
    "Calculate the number of bricks required for walls, houses, rooms, and construction projects. Free online brick calculator.",

  keywords: [
    "brick calculator",
    "brick quantity calculator",
    "wall brick calculator",
    "construction brick calculator",
    "brick estimation",
  ],

  alternates: {
    canonical: "/brick-calculator",
  },

  openGraph: {
    title: "Brick Calculator | Calculator Hub",

    description:
      "Free online brick calculator for construction projects.",

    url:
      "https://calculator-hub-murex.vercel.app/brick-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brick Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brick Calculator | Calculator Hub",

    description:
      "Estimate brick quantity instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <BrickCalculatorClient />;
}