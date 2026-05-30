import type { Metadata } from "next";
import PaverCalculatorClient from "./PaverCalculatorClient";

export const metadata: Metadata = {
  title: "Paver Calculator | Calculator Hub",
  description:
    "Free online paver calculator to estimate the number of pavers required for patios, driveways, pathways, sidewalks, and landscaping projects.",
};

export default function Page() {
  return <PaverCalculatorClient />;
}