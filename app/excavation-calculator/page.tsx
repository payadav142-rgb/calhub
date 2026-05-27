"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ExcavationCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [volume, setVolume] =
    useState<number | null>(null);

  const calculateExcavation = () => {
    const totalVolume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setVolume(totalVolume);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Excavation Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate excavation volume for
          foundations, trenches, and construction
          projects instantly.
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
            onClick={calculateExcavation}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {volume !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Excavation Volume:{" "}
                {volume.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Excavation Volume Calculation
          </h2>

          <p className="mt-4 text-gray-600">
            This excavation calculator helps
            estimate soil removal volume for
            trenches, foundations, basements,
            and other construction projects.
          </p>

          <p className="mt-4 text-gray-600">
            Accurate excavation estimates help
            reduce material waste and improve
            project planning.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Volume = Length × Width × Depth
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                What is an excavation calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                It helps estimate excavation
                volume required for construction
                projects and earthwork planning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for foundation work?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator is useful for
                foundations, trenches, basements,
                and other excavation work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this excavation calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on Calculator
                Hub are free to use online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}