"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function ExcavationCalculatorClient() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateExcavation = () => {
    if (!length || !width || !depth) return;

    const volume =
      parseFloat(length) * parseFloat(width) * parseFloat(depth);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Excavation Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate excavation volume for foundations, trenches, basements,
            and earthwork projects.
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
              onChange={(e) => setLength(e.target.value)}
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
              onChange={(e) => setWidth(e.target.value)}
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
              onChange={(e) => setDepth(e.target.value)}
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter depth"
            />
          </div>

          <button
            onClick={calculateExcavation}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Excavation Volume
          </button>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-gray-900">
                Excavation Volume: {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Excavation Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            Excavation volume is calculated using length, width, and depth.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <h3 className="text-2xl font-semibold text-gray-900">
              Formula
            </h3>

            <p className="mt-3 text-lg font-medium text-orange-600">
              Excavation Volume = Length × Width × Depth
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What is an excavation calculator?
              </h3>
              <p className="mt-2 text-gray-600">
                An excavation calculator estimates the volume of soil or material to be
                excavated for construction projects.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Why is excavation calculation important?
              </h3>
              <p className="mt-2 text-gray-600">
                Accurate excavation helps in planning materials, labor, and cost
                estimation for construction projects.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Is this calculator free?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, all calculators on Calculator Hub are free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedCalculators />
      <Footer />
    </main>
  );
}