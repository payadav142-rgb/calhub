import { Metadata } from "next";
import DrywallCalculatorClient from "./DrywallCalculatorClient";

export const metadata: Metadata = {
  title:
    "Drywall Calculator – Estimate Drywall Sheets for Walls & Ceilings | CalHub",

  description:
    "Free Drywall Calculator to estimate the number of drywall sheets needed for walls and ceilings. Calculate drywall requirements quickly using wall dimensions and sheet size.",

  keywords: [
    "drywall calculator",
    "drywall sheet calculator",
    "sheetrock calculator",
    "wall drywall calculator",
    "ceiling drywall calculator",
    "drywall estimator",
    "drywall material calculator",
  ],

  alternates: {
    canonical:
      "https://calhub.in/drywall-calculator",
  },

  openGraph: {
    title:
      "Drywall Calculator | CalHub",

    description:
      "Estimate drywall sheets required for walls and ceilings with CalHub's free Drywall Calculator.",

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
      "Free Drywall Calculator to estimate drywall sheets for construction and remodeling projects.",
  },
};

export default function Page() {
  return <DrywallCalculatorClient />;
}