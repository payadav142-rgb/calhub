"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConcreteCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateConcrete = () => {
    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Concrete Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate concrete volume required for
            construction projects.
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
              Depth (ft)
            </label>

            <input
              type="number"
              value={depth}
              onChange={(e) =>
                setDepth(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter depth"
            />
          </div>

          <button
            onClick={calculateConcrete}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Concrete
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Concrete Volume:{" "}
                {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Concrete Volume Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Concrete volume is calculated by
            multiplying length, width, and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Concrete Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This concrete calculator helps
            builders, contractors, and engineers
            estimate concrete requirements
            quickly and accurately.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Accurate concrete estimation reduces
            material waste and improves project
            planning efficiency.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Concrete Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              1. Enter concrete slab length.
            </p>

            <p>
              2. Enter slab width.
            </p>

            <p>
              3. Enter slab depth.
            </p>

            <p>
              4. Click calculate to get concrete
              volume instantly.
            </p>
          </div>
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
              What is concrete volume?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Concrete volume is the total space
              occupied by concrete measured in
              cubic feet or cubic meters.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator accurate?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator provides quick
              and accurate concrete volume
              estimation for standard projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use this for slabs?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator can estimate
              concrete for slabs, foundations,
              footings, and columns.
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
              Estimate cement bags easily.
            </p>
          </a>

          <a
            href="/sand-calculator"
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Sand Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate sand quantity instantly.
            </p>
          </a>

          <a
            href="/gravel-calculator"
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Gravel Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate gravel volume quickly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}