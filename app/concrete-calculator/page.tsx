import type { Metadata } from "next";
import ConcreteCalculatorClient from "./ConcreteCalculatorClient";

export const metadata: Metadata = {
  title: "Concrete Calculator - Calculate Concrete Volume | CalHub",
  description:
    "Use the free concrete calculator to estimate concrete volume for slabs, foundations, footings, driveways, and construction projects.",
  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "cement concrete calculator",
    "slab concrete calculator",
    "foundation concrete calculator",
    "concrete quantity calculator",
  ],
  alternates: {
    canonical: "/concrete-calculator",
  },
};

export default function ConcreteCalculatorPage() {
  return <ConcreteCalculatorClient />;
}