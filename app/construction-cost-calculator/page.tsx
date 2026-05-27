"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConstructionCostCalculator() {
  const [area, setArea] =
    useState("");

  const [costPerSqft, setCostPerSqft] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateCost = () => {
    const totalCost =
      parseFloat(area) *
      parseFloat(costPerSqft);

    setResult(totalCost);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Construction Cost Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate total construction cost for
          your building project instantly.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Area (sq ft)
            </label>

            <input
              type="number"
              value={area}
              onChange={(e) =>
                setArea(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter total area"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Cost Per Sq Ft
            </label>

            <input
              type="number"
              value={costPerSqft}
              onChange={(e) =>
                setCostPerSqft(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter cost per sq ft"
            />
          </div>

          <button
            onClick={calculateCost}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Estimated Cost: ₹
                {result.toLocaleString()}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Construction Cost Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This construction cost calculator
            helps builders, contractors, and
            homeowners estimate total building
            expenses based on area and cost per
            square foot.
          </p>

          <p className="mt-4 text-gray-600">
            Construction costs vary depending on
            materials, labor charges, location,
            and project type.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Total Cost = Area × Cost Per Sq Ft
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                What is a construction cost
                calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                It helps estimate total building
                costs based on project area and
                construction rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, Calculator Hub provides free
                online construction calculators.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use it for house
                construction?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator is useful for
                houses, commercial buildings, and
                renovation projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}