import type { Metadata } from "next";
import AsphaltCalculatorClient from "./AsphaltCalculatorClient";

export const metadata: Metadata = {
  title:
    "Asphalt Calculator | Free Asphalt Volume Calculator",

  description:
    "Calculate asphalt volume for roads, driveways, parking lots, and paving projects. Free online asphalt calculator for accurate material estimation.",

  keywords: [
    "asphalt calculator",
    "asphalt volume calculator",
    "paving calculator",
    "driveway asphalt calculator",
    "road construction calculator",
    "asphalt estimation",
  ],

  alternates: {
    canonical: "/asphalt-calculator",
  },

  openGraph: {
    title:
      "Asphalt Calculator | Calculator Hub",

    description:
      "Free online asphalt calculator for paving, roads, driveways, and parking lots.",

    url:
      "https://calhub.in/asphalt-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asphalt Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Asphalt Calculator | Calculator Hub",

    description:
      "Free asphalt calculator for construction and paving projects.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <AsphaltCalculatorClient />;
}