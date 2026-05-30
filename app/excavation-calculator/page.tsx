import type { Metadata } from "next";
import ExcavationCalculatorClient from "./ExcavationCalculatorClient";

export const metadata: Metadata = {
  title: "Excavation Calculator | Calculator Hub",

  description:
    "Calculate excavation volume for foundations, trenches, basements, and earthwork projects with our free excavation calculator.",

  keywords: [
    "excavation calculator",
    "earthwork calculator",
    "trench excavation calculator",
    "foundation excavation",
    "construction calculator",
    "soil volume calculator",
  ],

  alternates: {
    canonical: "/excavation-calculator",
  },

  openGraph: {
    title: "Excavation Calculator | Calculator Hub",

    description:
      "Estimate excavation volume instantly for construction and earthwork projects.",

    url:
      "https://calculator-hub-murex.vercel.app/excavation-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Excavation Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Excavation Calculator | Calculator Hub",

    description:
      "Calculate excavation volume for foundations, trenches, and earthwork projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ExcavationCalculatorClient />;
}