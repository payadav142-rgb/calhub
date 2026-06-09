import { Metadata } from "next";
import DrywallCalculatorClient from "./DrywallCalculatorClient";

export const metadata: Metadata = {
  title:
    "Drywall Calculator | Sheetrock & Wall Panel Estimator | CalHub",

  description:
    "Free drywall calculator to estimate drywall sheets needed for walls and ceilings using wall dimensions and drywall sheet area.",

  keywords: [
    "drywall calculator",
    "sheetrock calculator",
    "drywall sheet estimator",
    "wall panel calculator",
    "gypsum board calculator",
    "construction drywall calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/drywall-calculator",
  },

  openGraph: {
    title:
      "Drywall Calculator | CalHub",

    description:
      "Estimate drywall sheets required for walls and ceilings instantly.",

    url:
      "https://calhub.in/drywall-calculator",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Drywall Calculator | CalHub",

    description:
      "Free drywall sheet estimator for construction projects.",
  },
};

export default function Page() {
  return <DrywallCalculatorClient />;
}