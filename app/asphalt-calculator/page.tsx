"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AsphaltCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateAsphalt = () => {
    const volume =
      parseFloat(length) *
      parseFloat(width) *
      (parseFloat(thickness) / 12);

    setResult(volume);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Asphalt Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate asphalt volume required for
          roads, driveways, parking lots, and
          paving projects.
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
            onClick={calculateAsphalt}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Asphalt Volume:{" "}
                {result.toFixed(2)} ft³
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Asphalt Quantity Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This asphalt calculator helps estimate
            asphalt quantity for paving roads,
            parking lots, pathways, and driveways.
          </p>

          <p className="mt-4 text-gray-600">
            Proper asphalt estimation helps reduce
            waste and improves construction
            planning accuracy.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Volume = Length × Width × Thickness
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
                What is an asphalt calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                An asphalt calculator estimates
                asphalt volume needed for paving
                and road construction projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for driveways?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works for
                roads, driveways, parking lots,
                and other paving projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on Calculator
                Hub are completely free to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}