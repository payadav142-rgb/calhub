import type { Metadata } from "next";

import PaverCalculator from "./PaverCalculatorClient";

export const metadata: Metadata = {
  title:
    "Paver Calculator - Calculate Pavers Needed Online",
  description:
    "Use this free Paver Calculator to estimate the number of pavers required for patios, driveways, pathways, landscaping, and outdoor flooring projects.",
};

export default function Page() {
  return <PaverCalculator />;
}