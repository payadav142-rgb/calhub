"use client";

import { useRef, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CalculatorInput from "../components/CalculatorInput";
import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";

export default function RoofingCalculatorClient() {
  const pdfRef =
    useRef<HTMLDivElement>(null);

  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [costPerSqft, setCostPerSqft] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [area, setArea] =
    useState<number | null>(null);

  const [result, setResult] =
    useState<number | null>(null);

  const calculateRoofing = () => {
    if (
      !length ||
      !width ||
      !costPerSqft
    ) {
      alert("Please fill all fields");

      return;
    }

    const roofArea =
      parseFloat(length) *
      parseFloat(width);

    const totalCost =
      roofArea *
      parseFloat(costPerSqft);

    setArea(roofArea);

    setResult(totalCost);
  };

  const resetCalculator = () => {
    setLength("");
    setWidth("");
    setCostPerSqft("");
    setArea(null);
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
          "roofing-calculation.pdf",

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
        <h1 className="text-4xl font-bold text-black">
          Roofing Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate roofing area and
          roofing cost instantly for
          your construction project.
        </p>

        <div
          ref={pdfRef}
          className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md"
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

          <CalculatorInput
            label={`Roof Length (${unit})`}
            value={length}
            setValue={setLength}
            placeholder="Enter roof length"
          />

          <CalculatorInput
            label={`Roof Width (${unit})`}
            value={width}
            setValue={setWidth}
            placeholder="Enter roof width"
          />

          <CalculatorInput
            label={`Roofing Cost Per Sq ${unit} (₹)`}
            value={costPerSqft}
            setValue={setCostPerSqft}
            placeholder="Enter roofing cost"
          />

          <button
            onClick={calculateRoofing}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Roofing
          </button>

          <button
            onClick={resetCalculator}
            className="mt-4 w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-50"
          >
            Reset
          </button>

          {result !== null &&
            area !== null && (
              <div className="mt-6 space-y-4">
                <CalculatorResult
                  title="Roof Area"
                  result={`${area.toFixed(
                    2
                  )} sq ${unit}`}
                />

                <CalculatorResult
                  title="Estimated Roofing Cost"
                  result={`₹${result.toLocaleString()}`}
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

      {/* SEO Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">
            Roofing Cost Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This roofing calculator
            helps estimate total roof
            area and roofing expenses
            for residential and
            commercial buildings.
          </p>

          <p className="mt-4 text-gray-600">
            Roofing costs depend on
            materials, labor, roof
            type, and project size.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Roof Area = Length × Width
          </p>

          <p className="mt-2 text-gray-600">
            Roofing Cost = Area × Cost
            Per Sq Ft
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked
            Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                What is a roofing
                calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A roofing calculator
                estimates roof area and
                total roofing costs for
                construction projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I estimate roofing
                materials?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator
                helps estimate roofing
                material requirements
                and costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator
                free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                Calculator Hub are
                completely free to use.
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