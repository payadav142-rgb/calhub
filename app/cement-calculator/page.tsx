"use client";

"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



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
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Cement Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate cement bags required for your
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
              Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter height"
            />
          </div>

          <button
            onClick={calculateCement}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Cement Bags Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Cement Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            To estimate cement bags required,
            calculate construction volume and
            multiply by cement factor.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
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
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Cement Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
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
        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              How many cement bags are needed
              for 1 cubic meter?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Cement quantity depends on mix
              ratio, but approximately 8 bags
              may be required for estimation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this cement calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, all calculators on Calculator
              Hub are completely free to use.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
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

      {/* Related Calculators */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-black">
          Related Calculators
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a
            href="/brick-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Brick Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate number of bricks needed.
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
              Estimate concrete volume easily.
            </p>
          </a>

          <a
            href="/sand-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Sand Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate sand quantity instantly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

