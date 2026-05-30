import type { Metadata } from "next";
import Client from "./RoofingCalculatorClient";

export const metadata: Metadata = {
  title: "Roofing Calculator | Calculator Hub",
  description:
    "Free roofing calculator to estimate roof area and roofing costs for residential and commercial construction projects.",
  keywords: [
    "roofing calculator",
    "roof area calculator",
    "roofing cost calculator",
    "roof estimate calculator",
    "construction roofing calculator",
  ],
  alternates: {
    canonical:
      "https://calculator-hub-plum.vercel.app/roofing-calculator",
  },
};

export default function Page() {
  return <Client />;
}