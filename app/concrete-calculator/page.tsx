"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConcreteCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [result, setResult] = useState<number | null>(null);

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
                Concrete Volume: {result} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}