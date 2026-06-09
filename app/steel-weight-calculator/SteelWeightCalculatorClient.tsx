"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";

export default function SteelWeightCalculatorClient() {
  const [diameter, setDiameter] =
    useState("");

  const [length, setLength] =
    useState("");

  const [unit, setUnit] =
    useState("mm");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSteelWeight = () => {
    if (!diameter || !length) {
      return;
    }

    const weight =
      (parseFloat(diameter) *
        parseFloat(diameter) *
        parseFloat(length)) /
      162;

    setResult(weight);
  };

  const resetCalculator = () => {
    setDiameter("");
    setLength("");
    setResult(null);
    setUnit("mm");
  };

  const downloadPDF = async () => {
    const element =
      document.getElementById(
        "steel-result"
      );

    if (!element) return;

    const html2pdf =
      (await import("html2pdf.js"))
        .default;

    html2pdf()
      .from(element)
      .save(
        "steel-weight-calculation.pdf"
      );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Steel Weight Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate steel bar weight instantly
            for construction projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Diameter Unit
            </label>

            <select
              value={unit}
              onChange={(e) =>
                setUnit(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            >
              <option value="mm">
                Millimeter (mm)
              </option>

              <option value="inch">
                Inch
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Diameter ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={diameter}
              onChange={(event) =>
                setDiameter(
                  event.target.value
                )
              }
              placeholder="Enter diameter"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Length (m)
            </label>

            <input
              type="number"
              step="any"
              value={length}
              onChange={(event) =>
                setLength(
                  event.target.value
                )
              }
              placeholder="Enter length"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={
                calculateSteelWeight
              }
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate
            </button>

            <button
              onClick={resetCalculator}
              className="w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {result !== null && (
            <div
              id="steel-result"
              className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner"
            >
              <CalculatorResult
                title="Steel Weight"
                result={`${result.toFixed(
                  2
                )} kg`}
              />

              <button
                onClick={downloadPDF}
                className="mt-4 w-full rounded-2xl bg-black py-3 font-semibold text-white transition-all duration-300 hover:opacity-90"
              >
                Download PDF
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Steel Weight Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Steel weight is calculated using
            bar diameter and length.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Steel Weight =
              (D² × L) ÷ 162
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Where D is steel bar diameter
            and L is length in meters.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-gray-900">
              What is steel bar weight?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Steel bar weight is the total
              weight of reinforcement bars
              used in construction projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-gray-900">
              Why divide by 162?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              162 is the standard constant
              used in steel weight
              calculations for reinforcement
              bars.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, CalHub provides free
              construction calculators for
              builders and engineers.
            </p>
          </div>

        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}