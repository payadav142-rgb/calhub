import type { Metadata } from "next";
import PaverCalculator from "./PaverCalculatorClient";

export const metadata: Metadata = {
  title: "Paver Calculator | Calculator Hub",

  description:
    "Calculate the number of pavers required for patios, driveways, pathways, sidewalks, and landscaping projects with our free paver calculator.",

  keywords: [
    "paver calculator",
    "patio paver calculator",
    "driveway paver calculator",
    "paving stone calculator",
    "landscaping calculator",
    "construction calculator",
  ],

  alternates: {
    canonical: "/paver-calculator",
  },

  openGraph: {
    title: "Paver Calculator | Calculator Hub",

    description:
      "Estimate pavers needed for patios, pathways, driveways, and landscaping projects instantly.",

    url:
      "https://calculator-hub-seven.vercel.app/paver-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Paver Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Paver Calculator | Calculator Hub",

    description:
      "Calculate paving blocks required for landscaping and construction projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <PaverCalculator />;
}