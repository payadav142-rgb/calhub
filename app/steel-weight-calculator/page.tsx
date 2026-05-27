"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SteelWeightCalculator() {
  const [diameter, setDiameter] =
    useState("");

  const [length, setLength] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateSteelWeight = () => {
    const weight =
      (parseFloat(diameter) *
        parseFloat(diameter) *
        parseFloat(length)) /
      162;

    setResult(weight);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Steel Weight Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate steel bar weight instantly.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Diameter (mm)
            </label>

            <input
              type="number"
              value={diameter}
              onChange={(e) =>
                setDiameter(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter diameter"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Length (m)
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

          <button
            onClick={calculateSteelWeight}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Steel Weight: {result.toFixed(2)} kg
              </h2>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}