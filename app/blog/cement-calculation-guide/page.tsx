import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RelatedCalculators from "../../components/RelatedCalculators";

export const metadata: Metadata = {
  title:
    "Cement Calculation Guide: How to Calculate Cement Quantity | CalHub",

  description:
    "Learn how to calculate cement quantity for concrete, plaster, and mortar using formulas, practical examples, standard mix ratios, and expert tips.",

  alternates: {
    canonical:
      "https://calhub.in/blog/cement-calculation-guide",
  },
};

export default function CementCalculationGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black md:text-5xl">
          Cement Calculation Guide
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Estimating the correct amount of cement is essential for every
          construction project. Whether you are building a house,
          preparing concrete, plastering walls, or laying bricks,
          accurate cement estimation helps reduce waste, control costs,
          and improve construction quality.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Cement Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            The basic formula for estimating cement quantity is:
          </p>

          <div className="mt-6 rounded-2xl bg-orange-50 p-6">
            <p className="text-xl font-semibold text-orange-600">
              Cement = Concrete Volume × Cement Ratio
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            The required cement depends on the concrete mix ratio,
            mortar ratio, or plaster mix used in construction.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Example Calculation
          </h2>

          <p className="mt-4 text-gray-600">
            Suppose you need 1 cubic meter of concrete using a
            1:2:4 mix ratio.
          </p>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-2">
            <li>Total Parts = 7</li>
            <li>Cement Part = 1</li>
            <li>Dry Volume ≈ 1.54 m³</li>
          </ul>

          <div className="mt-6 rounded-2xl bg-orange-50 p-6">
            <p className="font-semibold text-orange-600">
              Cement = (1 ÷ 7) × 1.54
            </p>

            <p className="mt-2 font-semibold text-orange-600">
              ≈ 0.22 m³ ≈ 6.3 Bags
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Common Cement Mix Ratios
          </h2>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-3">
            <li>1 : 2 : 4 – Standard RCC work</li>
            <li>1 : 1.5 : 3 – Strong structural concrete</li>
            <li>1 : 3 – Cement mortar</li>
            <li>1 : 4 – Wall plaster</li>
            <li>1 : 6 – Brick masonry</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Why Accurate Cement Estimation Matters
          </h2>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-3">
            <li>Reduces material wastage.</li>
            <li>Improves budgeting accuracy.</li>
            <li>Maintains proper concrete strength.</li>
            <li>Prevents project delays.</li>
            <li>Helps purchase the correct number of cement bags.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Common Mistakes
          </h2>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-3">
            <li>Ignoring dry volume conversion.</li>
            <li>Using the wrong mix ratio.</li>
            <li>Mixing measurement units.</li>
            <li>Not considering wastage.</li>
            <li>Incorrect bag-to-volume conversion.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Use Our Cement Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Skip manual calculations and estimate cement instantly
            using our free online Cement Calculator.
          </p>

          <Link
            href="/cement-calculator"
            className="mt-6 inline-block rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white"
          >
            Open Cement Calculator
          </Link>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                How many cement bags are required for 1 cubic meter of concrete?
              </h3>

              <p className="mt-2 text-gray-600">
                For a 1:2:4 concrete mix, approximately 6–7 cement bags
                are required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                What is the standard weight of one cement bag?
              </h3>

              <p className="mt-2 text-gray-600">
                A standard cement bag weighs 50 kg.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Why should I calculate cement before construction?
              </h3>

              <p className="mt-2 text-gray-600">
                Accurate estimation helps save money, reduces waste,
                and ensures sufficient material is available.
              </p>
            </div>
          </div>
        </div>
      </article>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}