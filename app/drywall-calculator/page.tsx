import type { Metadata } from "next";
import DrywallCalculatorClient from "./DrywallCalculatorClient";

export const metadata: Metadata = {
  title:
    "Drywall Calculator - Free Drywall Sheet Estimator",

  description:
    "Calculate drywall sheets required for walls and ceilings. Free drywall calculator for contractors, builders, and homeowners.",

  keywords: [
    "drywall calculator",
    "sheetrock calculator",
    "drywall sheet estimator",
    "wall drywall calculator",
    "ceiling drywall calculator",
    "construction calculator",
    "drywall quantity calculator",
    "building material calculator",
  ],

  alternates: {
    canonical: "/drywall-calculator",
  },

  openGraph: {
    title:
      "Drywall Calculator - Free Drywall Sheet Estimator",

    description:
      "Estimate drywall sheets required for walls and ceilings instantly.",

    url:
      "https://calculator-hub-murex.vercel.app/drywall-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drywall Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Drywall Calculator - Free Drywall Sheet Estimator",

    description:
      "Calculate drywall sheet requirements instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <DrywallCalculatorClient />;
}