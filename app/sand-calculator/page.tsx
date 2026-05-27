"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SandCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSand = () => {
    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Sand Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate sand volume required for your
          construction project.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Length (ft)
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

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Width (ft)
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter width"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Depth (ft)
            </label>

            <input
              type="number"
              value={depth}
              onChange={(e) =>
                setDepth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter depth"
            />
          </div>

          <button
            onClick={calculateSand}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Sand Required:{" "}
                {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Sand Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Sand volume is calculated using
            construction dimensions.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Sand Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate sand
            quantity required for flooring,
            concrete, plaster, and construction
            work.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Sand Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter construction length.
            </p>

            <p>
              2. Enter construction width.
            </p>

            <p>
              3. Enter depth or thickness.
            </p>

            <p>
              4. Click calculate to estimate
              sand volume instantly.
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
              How much sand do I need?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Sand quantity depends on project
              dimensions and depth. This
              calculator provides quick
              estimation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use this for plaster work?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator can help
              estimate sand for plastering,
              flooring, and concrete work.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub offers free
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
            href="/gravel-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Gravel Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate gravel quantity easily.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}