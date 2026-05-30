"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BrickCalculatorClient() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateBricks = () => {
    const wallArea =
      parseFloat(length) *
      parseFloat(height);

    const bricksNeeded = wallArea * 50;

    setResult(bricksNeeded);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Brick Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate the number of bricks required
            for your wall construction.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter wall length"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Wall Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter wall height"
            />
          </div>

          <button
            onClick={calculateBricks}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Bricks
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Bricks Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Brick Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            To estimate the number of bricks
            required, multiply wall area by
            standard brick usage.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Bricks Required = Wall Area × 50
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Standard brick estimation may vary
            depending on brick size, mortar
            thickness, and wall type.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Builders, contractors, and engineers
            use brick calculations for residential
            and commercial construction projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Brick Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>1. Enter wall length in feet.</p>

            <p>2. Enter wall height in feet.</p>

            <p>3. Click the calculate button.</p>

            <p>
              4. Instantly get estimated number
              of bricks required.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Example Brick Calculation
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If the wall length is 20 ft and the wall
            height is 10 ft:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Wall Area = 20 × 10 = 200 sq ft
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Bricks Required = 200 × 50 = 10000
              bricks
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This is an estimated brick quantity and
            actual requirements may vary depending on
            brick size and mortar thickness.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              How many bricks are needed for
              100 sq ft?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Approximately 5000 standard bricks
              may be required depending on wall
              thickness and brick size.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Does this calculator include
              mortar?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              This is a basic estimation
              calculator. Actual brick
              requirement may vary depending on
              mortar thickness.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free to use?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              construction calculators for
              builders, contractors, and
              engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Related Calculators */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Related Calculators
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="/cement-calculator"
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Cement Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate cement quantity easily.
            </p>
          </a>

          <a
            href="/concrete-calculator"
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Concrete Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate concrete volume quickly.
            </p>
          </a>

          <a
            href="/plaster-calculator"
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Plaster Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate plaster material
              instantly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}