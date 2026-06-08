import type { Metadata } from "next";
import CementCalculatorClient from "./CementCalculatorClient";

export const metadata: Metadata = {
  title: "Cement Calculator - Free Cement Estimation Tool",

  description:
    "Calculate cement bags required for construction projects. Free online cement calculator for builders, contractors, engineers, and homeowners.",

  keywords: [
    "cement calculator",
    "cement estimation",
    "cement bags calculator",
    "construction calculator",
    "building materials calculator",
  ],

  alternates: {
    canonical: "/cement-calculator",
  },

  openGraph: {
    title: "Cement Calculator - Free Cement Estimation Tool",

    description:
      "Estimate cement bags required for construction projects quickly and accurately.",

    url:
      "https://calhub.in/cement-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cement Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cement Calculator - Free Cement Estimation Tool",

    description:
      "Calculate cement bags required for construction projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <CementCalculatorClient />;
}