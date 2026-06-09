"use client";

import { useState } from "react";
import jsPDF from "jspdf";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function GravelCalculatorClient() {
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

  const [resultUnit, setResultUnit] =
    useState("");

  const convertToFeet = (
    value: number
  ) => {
    switch (unit) {
      case "m":
        return value * 3.28084;

      case "cm":
        return value * 0.0328084;

      case "yd":
        return value * 3;

      default:
        return value;
    }
  };

  const calculateGravel = () => {
    if (
      !length ||
      !width ||
      !depth
    ) {
      return;
    }

    const lengthFt =
      convertToFeet(
        parseFloat(length)
      );

    const widthFt =
      convertToFeet(
        parseFloat(width)
      );

    const depthFt =
      convertToFeet(
        parseFloat(depth)
      );

    const volumeFt =
      lengthFt *
      widthFt *
      depthFt;

    let finalResult =
      volumeFt;

    let unitLabel = "ft³";

    if (unit === "m") {
      finalResult =
        volumeFt * 0.0283168;

      unitLabel = "m³";
    }

    if (unit === "cm") {
      finalResult =
        volumeFt * 28316.8;

      unitLabel = "cm³";
    }

    if (unit === "yd") {
      finalResult =
        volumeFt / 27;

      unitLabel = "yd³";
    }

    setResult(finalResult);
    setResultUnit(unitLabel);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setUnit("ft");
    setResult(null);
    setResultUnit("");
  };

  const downloadPDF = () => {
    if (result === null) return;

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "Gravel Calculator Result",
      20,
      30
    );

    doc.setFontSize(14);

    doc.text(
      `Length: ${length} ${unit}`,
      20,
      60
    );

    doc.text(
      `Width: ${width} ${unit}`,
      20,
      75
    );

    doc.text(
      `Depth: ${depth} ${unit}`,
      20,
      90
    );

    doc.text(
      `Gravel Volume: ${result.toFixed(
        2
      )} ${resultUnit}`,
      20,
      115
    );

    doc.save(
      "gravel-calculation.pdf"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Gravel Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate gravel volume
            required for construction,
            landscaping, pathways,
            foundations, and driveway
            projects instantly.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Unit
            </label>

            <select
              value={unit}
              onChange={(e) =>
                setUnit(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            >
              <option value="ft">
                Feet (ft)
              </option>

              <option value="m">
                Meter (m)
              </option>

              <option value="cm">
                Centimeter (cm)
              </option>

              <option value="yd">
                Yard (yd)
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
                setLength(
                  e.target.value
                )
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
                setWidth(
                  e.target.value
                )
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
                setDepth(
                  e.target.value
                )
              }
              placeholder="Enter depth"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={
                calculateGravel
              }
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate Gravel
            </button>

            <button
              onClick={
                resetCalculator
              }
              className="w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-900">
                Gravel Required:{" "}
                {result.toFixed(
                  2
                )}{" "}
                {resultUnit}
              </h2>

              <button
                onClick={
                  downloadPDF
                }
                className="mt-5 w-full rounded-2xl bg-gray-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-black"
              >
                Download PDF
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Gravel Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Gravel volume is
            calculated by multiplying
            project length, width,
            and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Gravel Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps
            builders, contractors,
            landscapers, and
            homeowners estimate
            gravel quantity accurately
            for construction and
            outdoor projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked
            Questions
          </h2>

          <div className="mt-10 space-y-6">

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                How much gravel do I
                need?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Gravel quantity
                depends on project
                dimensions and
                required depth. This
                calculator provides
                quick and accurate
                estimation.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                Can I use this for
                driveways?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes, this calculator
                works for driveways,
                landscaping,
                foundations,
                pathways, and outdoor
                construction
                projects.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                Is this calculator
                free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes, Calculator Hub
                provides free online
                construction
                calculators for
                builders, contractors,
                and homeowners.
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