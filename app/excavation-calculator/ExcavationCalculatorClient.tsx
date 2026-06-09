"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function ExcavationCalculatorClient() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const [unit, setUnit] = useState("ft");

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

      default:
        return value;
    }
  };

  const calculateExcavation = () => {
    if (!length || !width || !depth)
      return;

    const lengthFt = convertToFeet(
      parseFloat(length)
    );

    const widthFt = convertToFeet(
      parseFloat(width)
    );

    const depthFt = convertToFeet(
      parseFloat(depth)
    );

    const volumeFt =
      lengthFt * widthFt * depthFt;

    let finalResult = volumeFt;
    let finalUnit = "ft³";

    if (unit === "m") {
      finalResult = volumeFt / 35.3147;
      finalUnit = "m³";
    }

    if (unit === "cm") {
      finalResult =
        volumeFt / 3531466.72;
      finalUnit = "cm³";
    }

    setResult(finalResult);
    setResultUnit(finalUnit);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setDepth("");
    setResult(null);
  };

  const downloadReport = () => {
    if (result === null) return;

    const report = `
Excavation Calculator Report

Length: ${length} ${unit}
Width: ${width} ${unit}
Depth: ${depth} ${unit}

Excavation Volume:
${result.toFixed(2)} ${resultUnit}

Generated from CalHub.in
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "excavation-report.txt";

    link.click();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Excavation Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate excavation volume
            for foundations, trenches,
            basements, and earthwork
            projects instantly.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          {/* Unit */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Select Unit
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

              <option value="cm">
                Centimeter (cm)
              </option>
            </select>
          </div>

          {/* Length */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Length ({unit})
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              placeholder="Enter length"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Width */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Width ({unit})
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              placeholder="Enter width"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Depth */}
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Depth ({unit})
            </label>

            <input
              type="number"
              value={depth}
              onChange={(e) =>
                setDepth(e.target.value)
              }
              placeholder="Enter depth"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Buttons */}
          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={
                calculateExcavation
              }
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Calculate Volume
            </button>

            <button
              onClick={
                resetCalculator
              }
              className="rounded-2xl border border-orange-300 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {/* Result */}
          {result !== null && (
            <div className="mt-6 rounded-2xl bg-orange-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-900">
                Excavation Volume:{" "}
                {result.toFixed(2)}{" "}
                {resultUnit}
              </h2>

              <p className="mt-2 text-gray-600">
                This estimated excavation
                volume can help plan
                earthwork quantity,
                excavation cost, labor,
                and material transport.
              </p>

              <button
                onClick={downloadReport}
                className="mt-5 rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Download Report
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Formula */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Excavation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            Excavation volume is
            calculated by multiplying
            length, width, and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Volume = Length × Width ×
              Depth
            </p>
          </div>

          <p className="mt-6 text-gray-600">
            Contractors and engineers
            commonly use excavation
            calculations for foundation
            digging, trenching,
            basements, and earthmoving
            projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Excavation
            Calculator
          </h2>

          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              1. Select your preferred
              unit system.
            </p>

            <p>
              2. Enter excavation length.
            </p>

            <p>
              3. Enter excavation width.
            </p>

            <p>
              4. Enter excavation depth.
            </p>

            <p>
              5. Click calculate to get
              excavation volume instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Example Excavation
            Calculation
          </h2>

          <p className="mt-4 text-gray-600">
            If the excavation length is
            20 ft, width is 10 ft, and
            depth is 5 ft:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-xl font-bold text-orange-600">
              Volume = 20 × 10 × 5
            </p>

            <p className="mt-3 text-lg font-semibold text-gray-700">
              Excavation Volume = 1000
              ft³
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What is an excavation
                calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                An excavation calculator
                estimates the amount of
                soil or material to be
                removed during
                construction projects.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Why is excavation volume
                important?
              </h3>

              <p className="mt-2 text-gray-600">
                Accurate excavation
                calculations help reduce
                project delays, labor
                costs, and material
                waste.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                CalHub are completely
                free to use.
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