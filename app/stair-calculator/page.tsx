import type { Metadata } from "next";
import StairCalculatorClient from "./StairCalculatorClient";

export const metadata: Metadata = {
  title: "Stair Calculator | Calculator Hub",
  description:
    "Free stair calculator to estimate the number of steps required for staircases and building construction projects.",
  keywords: [
    "stair calculator",
    "staircase calculator",
    "step calculator",
    "construction calculator",
    "building staircase calculator",
  ],
  alternates: {
    canonical: "/stair-calculator",
  },
};

export default function Page() {
  return <StairCalculatorClient />;
}