"use client";

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
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Concrete Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate concrete volume required for
          construction projects.
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
            onClick={calculateConcrete}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Concrete Volume:{" "}
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
            Concrete Volume Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Concrete volume is calculated by
            multiplying length, width, and depth.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
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
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Concrete Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
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
        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              What is concrete volume?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Concrete volume is the total space
              occupied by concrete measured in
              cubic feet or cubic meters.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator accurate?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator provides quick
              and accurate concrete volume
              estimation for standard projects.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
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
              Estimate cement bags easily.
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

          <a
            href="/gravel-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
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

