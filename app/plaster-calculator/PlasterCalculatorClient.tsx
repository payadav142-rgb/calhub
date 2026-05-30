"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CalculatorInput from "../components/CalculatorInput";
import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";
export default function PlasterCalculator() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculatePlaster = () => {
    if (
      !length ||
      !height ||
      !thickness
    ) {
      alert("Please fill all fields");

      return;
    }

    const volume =
      parseFloat(length) *
      parseFloat(height) *
      (parseFloat(thickness) / 12);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Plaster Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate plaster volume required for
          walls and construction projects.
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">

          <CalculatorInput
            label="Wall Length (ft)"
            value={length}
            setValue={setLength}
            placeholder="Enter wall length"
          />

          <CalculatorInput
            label="Wall Height (ft)"
            value={height}
            setValue={setHeight}
            placeholder="Enter wall height"
          />

          <CalculatorInput
            label="Thickness (inch)"
            value={thickness}
            setValue={setThickness}
            placeholder="Enter thickness"
          />

          <button
            onClick={calculatePlaster}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate
          </button>

          {result !== null && (
            <CalculatorResult
              title="Plaster Volume"
              result={`${result.toFixed(
                2
              )} ft³`}
            />
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Plaster Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Plaster quantity is calculated using
            wall dimensions and plaster
            thickness.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-black">
              Plaster Volume =
              Length × Height × Thickness
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate
            plaster material required for walls,
            ceilings, and construction projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Plaster Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter wall length.
            </p>

            <p>
              2. Enter wall height.
            </p>

            <p>
              3. Enter plaster thickness.
            </p>

            <p>
              4. Click calculate to estimate
              plaster volume instantly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              What is plaster volume?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Plaster volume is the total
              quantity of plaster material needed
              for covering walls or ceilings.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use this for ceiling plaster?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator works for wall
              plastering and ceiling plaster
              estimation.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub offers free
              online construction calculators for
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

