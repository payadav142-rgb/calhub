import type { Metadata } from "next";

import SandCalculatorClient from "./SandCalculatorClient";

export const metadata: Metadata = {
  title:
    "Sand Calculator | Sand Volume Estimator | CalHub",

  description:
    "Free sand calculator to estimate sand volume required for construction, plastering, flooring, and concrete projects instantly.",

  keywords: [
    "sand calculator",
    "sand volume calculator",
    "construction sand calculator",
    "plaster sand calculator",
    "concrete sand calculator",
    "sand quantity estimator",
  ],

  openGraph: {
    title:
      "Sand Calculator | Sand Volume Estimator",

    description:
      "Free sand calculator to estimate sand volume required for construction, plastering, flooring, and concrete projects instantly.",

    url:
      "https://calhub.in/sand-calculator",

    siteName: "CalHub",

    type: "website",
  },

  alternates: {
    canonical:
      "https://calhub.in/sand-calculator",
  },
};

export default function Page() {
  return <SandCalculatorClient />;
}