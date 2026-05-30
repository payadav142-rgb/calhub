"use client";

import { useState } from "react";

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

  const [result, setResult] =
    useState<number | null>(null);

  const calculateGravel = () => {
    if (
      !length ||
      !width ||
      !depth
    ) {
      return;
    }

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
        <h1 className="text-4xl font-bold text-black">
          Gravel Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate gravel volume required for
          construction, driveways, landscaping,
          and foundation projects.
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Length (ft)
            </label>

            <input
              type="number"
              step="any"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              placeholder="Enter length"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-black outline-none focus:border-black"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Width (ft)
            </label>

            <input
              type="number"
              step="any"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              placeholder="Enter width"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-black outline-none focus:border-black"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Depth (ft)
            </label>

            <input
              type="number"
              step="any"
              value={depth}
              onChange={(e) =>
                setDepth(e.target.value)
              }
              placeholder="Enter depth"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-black outline-none focus:border-black"
            />
          </div>

          <button
            onClick={calculateGravel}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-black">
                Gravel Required:{" "}
                {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Gravel Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Gravel volume is calculated using
            project dimensions.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-black">
              Gravel Volume =
              Length × Width × Depth
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate
            gravel quantity for driveways,
            landscaping, foundations,
            pathways, and construction work.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Gravel Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>1. Enter project length.</p>

            <p>2. Enter project width.</p>

            <p>3. Enter gravel depth.</p>

            <p>
              4. Click calculate to estimate
              gravel volume instantly.
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
              How much gravel do I need?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Gravel quantity depends on
              project dimensions and required
              depth.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use this for driveways?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator is useful
              for driveways, pathways, and
              landscaping projects.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides
              free construction calculators.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}