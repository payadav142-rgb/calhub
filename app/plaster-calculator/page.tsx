"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PlasterCalculator() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculatePlaster = () => {
    const volume =
      parseFloat(length) *
      parseFloat(height) *
      (parseFloat(thickness) / 12);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Plaster Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate plaster volume required for
          walls.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter wall length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Wall Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter wall height"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Thickness (inch)
            </label>

            <input
              type="number"
              value={thickness}
              onChange={(e) =>
                setThickness(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter thickness"
            />
          </div>

          <button
            onClick={calculatePlaster}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Plaster Volume: {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-6 pb-16">
  <div className="rounded-2xl bg-white p-8 shadow-md">
    <h2 className="text-3xl font-bold text-black">
      How to Calculate Plaster Quantity?
    </h2>

    <p className="mt-4 text-gray-600">
      Plaster quantity is calculated by multiplying
      wall length, wall height, and plaster
      thickness.
    </p>

    <p className="mt-4 text-gray-600">
      This calculator helps builders and homeowners
      estimate plaster volume quickly for
      construction projects.
    </p>

    <h3 className="mt-6 text-2xl font-semibold text-black">
      Plaster Formula
    </h3>

    <p className="mt-3 text-gray-600">
      Volume = Length × Height × Thickness
    </p>
  </div>
</section>
      <Footer />
    </main>
  );
}