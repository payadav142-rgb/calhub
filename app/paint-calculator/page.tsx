import type { Metadata } from "next";
import PaintCalculatorClient from "./PaintCalculatorClient";

export const metadata: Metadata = {
  title: "Paint Calculator | Calculator Hub",

  description:
    "Calculate paint quantity required for walls, rooms, ceilings, and renovation projects using our free paint calculator.",

  keywords: [
    "paint calculator",
    "wall paint calculator",
    "paint quantity calculator",
    "paint coverage calculator",
    "house painting calculator",
    "construction calculator",
  ],

  alternates: {
    canonical: "/paint-calculator",
  },

  openGraph: {
    title: "Paint Calculator | Calculator Hub",

    description:
      "Estimate paint quantity instantly for walls, ceilings, rooms, and renovation projects.",

    url:
      "https://calculator-hub-seven.vercel.app/paint-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paint Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Paint Calculator | Calculator Hub",

    description:
      "Calculate paint quantity required for walls and ceilings instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PaintCalculatorClient />;
}