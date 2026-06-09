"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function StairCalculatorClient() {
  const [totalHeight, setTotalHeight] =
    useState("");

  const [stepHeight, setStepHeight] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateStairs = () => {
    if (!totalHeight || !stepHeight) {
      return;
    }

    const stairs =
      parseFloat(totalHeight) /
      parseFloat(stepHeight);

    setResult(Math.ceil(stairs));
  };

  const resetCalculator = () => {
    setTotalHeight("");
    setStepHeight("");
    setResult(null);
    setUnit("ft");
  };

  const downloadPDF = async () => {
    const element =
      document.getElementById(
        "stair-result"
      );

    if (!element) return;

    const html2pdf =
      (await import("html2pdf.js"))
        .default;

    html2pdf()
      .from(element)
      .save("stair-calculation.pdf");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Stair Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate the number of stairs
          required for your building and
          construction projects instantly.
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Unit
            </label>

            <select
              value={unit}
              onChange={(e) =>
                setUnit(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            >
              <option value="ft">
                Feet (ft)
              </option>

              <option value="m">
                Meter (m)
              </option>

              <option value="inch">
                Inch (inch)
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Total Height ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={totalHeight}
              onChange={(e) =>
                setTotalHeight(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter total height"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Step Height ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={stepHeight}
              onChange={(e) =>
                setStepHeight(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter step height"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={calculateStairs}
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
              id="stair-result"
              className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner"
            >
              <h2 className="text-2xl font-bold text-black">
                Number of Stairs:
                {" "}
                {result}
              </h2>

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

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">
            Stair Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            This stair calculator helps
            estimate the number of steps
            needed based on total staircase
            height and step rise.
          </p>

          <p className="mt-4 text-gray-600">
            Proper stair planning improves
            safety, comfort, and
            construction accuracy.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Number of Stairs =
            Total Height ÷ Step Height
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-black">
                What is a stair calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A stair calculator estimates
                the number of steps needed
                for a staircase.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Why is stair calculation important?
              </h3>

              <p className="mt-2 text-gray-600">
                Accurate stair measurements
                improve comfort, safety,
                and construction quality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                CalHub are free to use online.
              </p>
            </div>

          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}