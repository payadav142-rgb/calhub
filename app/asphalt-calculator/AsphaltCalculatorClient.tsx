"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AsphaltCalculatorClient() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateAsphalt = () => {
    const volume =
      parseFloat(length) *
      parseFloat(width) *
      (parseFloat(thickness) / 12);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Asphalt Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Estimate asphalt volume required for
            roads, driveways, parking lots, and
            paving projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter length"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Width (ft)
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter width"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Thickness (inch)
            </label>

            <input
              type="number"
              value={thickness}
              onChange={(e) =>
                setThickness(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter thickness"
            />
          </div>

          <button
            onClick={calculateAsphalt}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Asphalt Volume
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Asphalt Volume:{" "}
                {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Asphalt Quantity Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This asphalt calculator helps estimate
            asphalt quantity for paving roads,
            parking lots, pathways, and driveways.
          </p>

          <p className="mt-4 text-gray-600">
            Proper asphalt estimation helps reduce
            waste and improves construction
            planning accuracy.
          </p>

          <p className="mt-4 text-gray-600">
            Contractors and engineers commonly use
            asphalt calculations for highway
            construction, pavement design, and
            resurfacing projects.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Formula
            </h3>

            <p className="mt-3 text-lg font-medium text-orange-600">
              Volume = Length × Width × Thickness
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How to Use This Asphalt Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Enter the length, width, and asphalt
            thickness values and click calculate.
            The calculator instantly estimates the
            asphalt volume required for your
            project.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Example Calculation
            </h3>

            <p className="mt-3 text-gray-600">
              If the length is 50 ft, width is 20
              ft, and thickness is 4 inches:
            </p>

            <p className="mt-3 text-gray-600">
              Volume = 50 × 20 × (4 ÷ 12)
            </p>

            <p className="mt-3 font-medium text-orange-600">
              Total Asphalt Volume = 333.33 ft³
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What is an asphalt calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                An asphalt calculator estimates
                asphalt volume needed for paving
                and road construction projects.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Can I use this for driveways?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works for
                roads, driveways, parking lots,
                and other paving projects.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                Calculator Hub are completely free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Related Calculators
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="/concrete-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Concrete Calculator
            </a>

            <a
              href="/excavation-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Excavation Calculator
            </a>

            <a
              href="/construction-cost-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Construction Cost Calculator
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}