"use client";

import { useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";

export default function SandCalculatorClient() {
  const pdfRef =
    useRef<HTMLDivElement>(null);

  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSand = () => {
    if (
      !length ||
      !width ||
      !depth
    ) {
      alert("Please fill all fields");

      return;
    }

    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setResult(volume);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setResult(null);
    setUnit("ft");
  };

  const downloadPDF = async () => {
    if (!pdfRef.current) return;

    const html2pdf =
      (
        await import("html2pdf.js")
      ).default;

    html2pdf()
      .from(pdfRef.current)
      .set({
        margin: 0.5,

        filename:
          "sand-calculation.pdf",

        image: {
          type: "jpeg",
          quality: 1,
        },

        html2canvas: {
          scale: 2,
        },

        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
      })
      .save();
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
            Calculate sand volume
            required for flooring,
            plaster, concrete, and
            construction projects
            instantly.
          </p>
        </div>

        <div
          ref={pdfRef}
          className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
        >
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Measurement Unit
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
            </select>
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Length ({unit})
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
              Width ({unit})
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
              Depth ({unit})
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

          <button
            onClick={resetCalculator}
            className="mt-4 w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-50"
          >
            Reset
          </button>

          {result !== null && (
            <div className="mt-6 space-y-4 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <CalculatorResult
                title="Sand Volume"
                result={`${result.toFixed(
                  2
                )} ${unit}³`}
              />

              <button
                onClick={downloadPDF}
                className="w-full rounded-2xl bg-black py-3 font-semibold text-white transition-all duration-300 hover:opacity-90"
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
            Sand Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Sand volume is calculated
            by multiplying construction
            length, width, and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Sand Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps
            builders, contractors,
            engineers, and homeowners
            estimate sand quantity
            accurately for construction
            and renovation projects.
          </p>
        </div>
      </section>

      {/* FAQ */}
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
              Sand quantity depends on
              project dimensions and
              thickness. This calculator
              provides quick and
              accurate estimation.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use this for
              plaster work?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator
              works for plastering,
              flooring, concrete, and
              other construction
              projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub
              provides completely free
              construction calculators
              for builders,
              contractors, and
              homeowners.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}