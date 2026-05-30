import type { Metadata } from "next";
import SandCalculatorClient from "./SandCalculatorClient";

export const metadata: Metadata = {
  title: "Sand Calculator | Calculator Hub",
  description:
    "Free sand calculator to estimate sand volume required for construction, plastering, flooring, and concrete projects.",
  keywords: [
    "sand calculator",
    "sand volume calculator",
    "construction sand calculator",
    "sand quantity calculator",
    "building calculator",
  ],
  alternates: {
    canonical: "/sand-calculator",
  },
};

export default function Page() {
  return <SandCalculatorClient />;
}