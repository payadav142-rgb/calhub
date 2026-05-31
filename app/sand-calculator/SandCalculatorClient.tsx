"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";

export default function SandCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSand = () => {
    if (
      !length ||
      !width ||
      !depth
    ) {
      return;
    }

    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Sand Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate sand volume required for
            flooring, plaster, concrete, and
            construction projects instantly.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Length (ft)
            </label>

            <input
              type="number"
              step="any"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              placeholder="Enter length"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Width (ft)
            </label>

            <input
              type="number"
              step="any"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              placeholder="Enter width"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Depth (ft)
            </label>

            <input
              type="number"
              step="any"
              value={depth}
              onChange={(e) =>
                setDepth(e.target.value)
              }
              placeholder="Enter depth"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <button
            onClick={calculateSand}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Sand
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <CalculatorResult
                title="Sand Volume"
                result={`${result.toFixed(
                  2
                )} ft³`}
              />
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Sand Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Sand volume is calculated by
            multiplying construction length,
            width, and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Sand Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps builders,
            contractors, engineers, and
            homeowners estimate sand quantity
            accurately for construction and
            renovation projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Sand Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              1. Enter construction length in
              feet.
            </p>

            <p>
              2. Enter construction width in
              feet.
            </p>

            <p>
              3. Enter depth or thickness in
              feet.
            </p>

            <p>
              4. Click the calculate button to
              instantly get total sand volume.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Example Sand Calculation
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If the length is 20 ft, width is
            10 ft, and depth is 1 ft:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Sand Volume =
              20 × 10 × 1
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Total Volume = 200 ft³
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual sand quantity may vary
            depending on compaction, wastage,
            and construction conditions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              How much sand do I need?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Sand quantity depends on project
              dimensions and thickness. This
              calculator provides quick and
              accurate estimation.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use this for plaster work?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator works for
              plastering, flooring, concrete,
              and other construction projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides
              completely free construction
              calculators for builders,
              contractors, and homeowners.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}