"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RoofingCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [costPerSqft, setCostPerSqft] =
    useState("");

  const [area, setArea] =
    useState<number | null>(null);

  const [result, setResult] =
    useState<number | null>(null);

  const calculateRoofing = () => {
    const roofArea =
      parseFloat(length) *
      parseFloat(width);

    const totalCost =
      roofArea *
      parseFloat(costPerSqft);

    setArea(roofArea);
    setResult(totalCost);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Roofing Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate roofing area and roofing cost
          instantly for your construction project.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Roof Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter roof length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Roof Width (ft)
            </label>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter roof width"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Roofing Cost Per Sq Ft (₹)
            </label>

            <input
              type="number"
              value={costPerSqft}
              onChange={(e) =>
                setCostPerSqft(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter roofing cost"
            />
          </div>

          <button
            onClick={calculateRoofing}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && area !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Roof Area: {area.toFixed(2)} sq ft
              </h2>

              <h2 className="mt-3 text-2xl font-bold text-black">
                Estimated Roofing Cost: ₹
                {result.toLocaleString()}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Roofing Cost Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This roofing calculator helps estimate
            total roof area and roofing expenses
            for residential and commercial
            buildings.
          </p>

          <p className="mt-4 text-gray-600">
            Roofing costs depend on materials,
            labor, roof type, and project size.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Roof Area = Length × Width
          </p>

          <p className="mt-2 text-gray-600">
            Roofing Cost = Area × Cost Per Sq Ft
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
                What is a roofing calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A roofing calculator estimates
                roof area and total roofing costs
                for construction projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I estimate roofing materials?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator helps estimate
                roofing material requirements and
                costs.
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