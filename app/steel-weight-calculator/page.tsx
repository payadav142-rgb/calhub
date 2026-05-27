"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SteelWeightCalculator() {
  const [diameter, setDiameter] =
    useState("");

  const [length, setLength] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSteelWeight = () => {
    const weight =
      (parseFloat(diameter) *
        parseFloat(diameter) *
        parseFloat(length)) /
      162;

    setResult(weight);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Steel Weight Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate steel bar weight instantly
          for construction projects.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Diameter (mm)
            </label>

            <input
              type="number"
              value={diameter}
              onChange={(e) =>
                setDiameter(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter diameter"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Length (m)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter length"
            />
          </div>

          <button
            onClick={calculateSteelWeight}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Steel Weight:{" "}
                {result.toFixed(2)} kg
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Steel Weight Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Steel weight is calculated using bar
            diameter and length.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Steel Weight =
              (D² × L) ÷ 162
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Where D is steel bar diameter in
            millimeters and L is length in
            meters.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Steel Weight
            Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter steel bar diameter.
            </p>

            <p>
              2. Enter steel bar length.
            </p>

            <p>
              3. Click calculate button.
            </p>

            <p>
              4. Instantly get steel bar weight
              in kilograms.
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
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              What is steel bar weight?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Steel bar weight is the total
              weight of reinforcement bars used
              in construction projects.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Why divide by 162?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              162 is the standard constant used
              in steel weight calculations for
              reinforcement bars.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              construction calculators for
              builders and engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-black">
          Related Calculators
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="/cement-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Cement Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate cement quantity easily.
            </p>
          </a>

          <a
            href="/concrete-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Concrete Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate concrete volume quickly.
            </p>
          </a>

          <a
            href="/brick-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Brick Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate bricks required instantly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}