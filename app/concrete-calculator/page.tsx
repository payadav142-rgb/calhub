import type { Metadata } from "next";
import ConcreteCalculatorClient from "./ConcreteCalculatorClient";

export const metadata: Metadata = {
  title:
    "Concrete Calculator - Free Concrete Volume Calculator",

  description:
    "Calculate concrete volume required for slabs, foundations, footings, columns, and construction projects with our free online concrete calculator.",

  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "slab calculator",
    "foundation calculator",
    "construction calculator",
    "concrete estimation",
  ],

  alternates: {
    canonical: "/concrete-calculator",
  },

  openGraph: {
    title:
      "Concrete Calculator - Free Concrete Volume Calculator",

    description:
      "Estimate concrete volume for slabs, footings, foundations, and construction projects.",

    url:
      "https://calculator-hub-murex.vercel.app/concrete-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Concrete Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Concrete Calculator - Free Concrete Volume Calculator",

    description:
      "Calculate concrete volume instantly for construction projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <ConcreteCalculatorClient />;
}