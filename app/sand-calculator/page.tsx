import type { Metadata } from "next";
import SandCalculatorClient from "./SandCalculatorClient";

export const metadata: Metadata = {
  title:
    "Sand Calculator | Sand Volume & Quantity Estimator",

  description:
    "Free online sand calculator to estimate sand volume and quantity required for construction, plastering, masonry, flooring, concrete, and landscaping projects.",

  keywords: [
    "sand calculator",
    "sand volume calculator",
    "sand quantity calculator",
    "construction sand calculator",
    "sand estimator",
    "building sand calculator",
    "masonry sand calculator",
    "concrete sand calculator",
    "flooring sand calculator",
    "landscaping sand calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/sand-calculator",
  },

  openGraph: {
    title:
      "Sand Calculator | Sand Volume & Quantity Estimator",

    description:
      "Calculate sand volume and quantity instantly for construction, plastering, flooring, concrete, and landscaping projects.",

    url:
      "https://calhub.in/sand-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sand Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sand Calculator | Sand Volume & Quantity Estimator",

    description:
      "Estimate sand requirements instantly for construction and landscaping projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <SandCalculatorClient />;
}