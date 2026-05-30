"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";
export default function CementCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateCement = () => {
    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(height);

    const cementBags = volume * 8;

    setResult(cementBags);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Cement Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate cement bags required for your
            construction project.
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
              Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter height"
            />
          </div>

          <button
            onClick={calculateCement}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Cement
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-900">
                Cement Bags Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Cement Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            To estimate cement bags required,
            calculate construction volume and
            multiply by cement factor.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Cement Bags = Volume × 8
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Cement estimation may vary depending
            on mix ratio and construction type.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Contractors, engineers, and builders
            commonly use cement calculations for
            residential and commercial projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Cement Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              1. Enter construction length.
            </p>

            <p>
              2. Enter construction width.
            </p>

            <p>
              3. Enter construction height.
            </p>

            <p>
              4. Click calculate to estimate
              cement bags instantly.
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
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              How many cement bags are needed
              for 1 cubic meter?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Cement quantity depends on mix
              ratio, but approximately 8 bags
              may be required for estimation.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this cement calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, all calculators on Calculator
              Hub are completely free to use.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Does this include sand ratio?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              No, this calculator estimates only
              cement quantity for basic
              construction calculations.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}