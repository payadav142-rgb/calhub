import { Metadata } from "next";
import StairCalculator from "./StairCalculator";

export const metadata: Metadata = {
  title:
    "Stair Calculator | Calculate Number Of Stairs Online Free - CalHub",
    
  description:
    "Use this free stair calculator to calculate the number of stairs required for construction, homes, buildings, and staircase projects instantly.",
    
  keywords: [
    "stair calculator",
    "stairs calculator",
    "step calculator",
    "staircase calculator",
    "construction stair calculator",
    "stair rise calculator",
    "building stair calculator",
    "online stair calculator",
    "calhub stair calculator",
  ],

  alternates: {
    canonical: "https://calhub.in/stair-calculator",
  },

  openGraph: {
    title:
      "Stair Calculator | Calculate Number Of Stairs Online Free - CalHub",
      
    description:
      "Free online stair calculator for calculating staircase steps and stair dimensions instantly.",
      
    url: "https://calhub.in/stair-calculator",
    siteName: "CalHub",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Stair Calculator | Calculate Number Of Stairs Online Free - CalHub",
      
    description:
      "Calculate staircase steps and stair dimensions online with this free stair calculator.",
  },
};

export default function Page() {
  return <StairCalculator />;
}