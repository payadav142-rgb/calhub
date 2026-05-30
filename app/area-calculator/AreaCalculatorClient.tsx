"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";
export default function AreaCalculatorClient() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateArea = () => {
    const area =
      parseFloat(length) *
      parseFloat(width);

    setResult(area);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Area Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate area instantly for rooms,
            land, flooring, and construction
            projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
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

          <div className="mb-6">
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

          <button
            onClick={calculateArea}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Area
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-900">
                Total Area:{" "}
                {result.toFixed(2)} sq ft
              </h2>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Area Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            Area is calculated by multiplying
            length and width. This calculator is
            useful for flooring, painting,
            construction, land measurement, and
            material estimation projects.
          </p>

          <p className="mt-4 text-gray-600">
            Builders, contractors, engineers,
            architects, and homeowners commonly
            use area calculations before
            estimating concrete, tiles, paint,
            flooring, and other construction
            materials.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Formula
            </h3>

            <p className="mt-3 text-lg font-medium text-orange-600">
              Area = Length × Width
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How to Use This Area Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Enter the length and width values in
            feet and click the calculate button.
            The calculator will instantly display
            the total area in square feet.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Example Calculation
            </h3>

            <p className="mt-3 text-gray-600">
              If the length is 20 ft and the width
              is 15 ft:
            </p>

            <p className="mt-3 font-medium text-orange-600">
              Area = 20 × 15 = 300 sq ft
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What is an area calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                An area calculator helps measure
                the total surface area of a room,
                floor, plot, or construction
                space.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                Calculator Hub are completely
                free.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Can I calculate room area?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, you can use this calculator
                for rooms, plots, flooring, and
                construction areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Related Calculators
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="/brick-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Brick Calculator
            </a>

            <a
              href="/cement-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Cement Calculator
            </a>

            <a
              href="/concrete-calculator"
              className="rounded-2xl border border-orange-100 bg-orange-50 p-4 font-medium text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
            >
              Concrete Calculator
            </a>
          </div>
        </div>
      </section>
<RelatedCalculators />
      <Footer />
    </main>
  );
}