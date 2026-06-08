import type { Metadata } from "next";
import AreaCalculatorClient from "./AreaCalculatorClient";

export const metadata: Metadata = {
  title:
    "Area Calculator | Free Square Foot Area Calculator",

  description:
    "Calculate area instantly using length and width. Free online area calculator for rooms, flooring, land measurement, construction projects, and material estimation.",

  keywords: [
    "area calculator",
    "square foot calculator",
    "room area calculator",
    "land area calculator",
    "floor area calculator",
    "construction area calculator",
  ],

  alternates: {
    canonical: "/area-calculator",
  },

  openGraph: {
    title:
      "Area Calculator | Calculator Hub",

    description:
      "Free online area calculator for rooms, flooring, land measurement, and construction projects.",

    url:
      "https://calhub.in/area-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Area Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Area Calculator | Calculator Hub",

    description:
      "Free online area calculator for construction and flooring projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <AreaCalculatorClient />;
}