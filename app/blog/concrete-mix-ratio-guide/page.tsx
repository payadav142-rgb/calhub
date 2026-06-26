import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Concrete Mix Ratio Guide: 1:2:4 Concrete Mix Explained | CalHub",

  description:
    "Learn different concrete mix ratios like 1:2:4, 1:1.5:3, concrete grades, formulas, examples, FAQs and estimate concrete accurately.",

  alternates: {
    canonical:
      "https://calhub.in/blog/concrete-mix-ratio-guide",
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Concrete Mix Ratio Guide
      </h1>

      <p className="mt-4 text-gray-600">
        This guide explains concrete mix ratios,
        concrete grades, formulas, and practical
        examples used in construction.
      </p>
    </main>
  );
}