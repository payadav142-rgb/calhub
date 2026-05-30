"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConstructionCostCalculator() {
  const [area, setArea] =
    useState("");

  const [
    costPerSqft,
    setCostPerSqft,
  ] = useState("");

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

      {/* Calculator Section */}
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
                setCostPerSqft(
                  e.target.value
                )
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

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Construction Cost Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Construction cost is estimated by
            multiplying the total construction
            area by the cost per square foot.
            This method is widely used during
            project planning, budgeting, and
            feasibility analysis.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Total Cost = Area × Cost Per Sq Ft
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Builders, contractors, architects,
            engineers, and homeowners use
            construction cost calculations to
            estimate project budgets before
            starting residential or commercial
            developments.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Accurate construction cost estimation
            helps reduce budget overruns,
            improve resource planning, and
            simplify project management.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Construction Cost Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter total construction area
              in square feet.
            </p>

            <p>
              2. Enter cost per square foot.
            </p>

            <p>
              3. Click the calculate button.
            </p>

            <p>
              4. Instantly get the estimated
              construction cost.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Example Construction Cost Calculation
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If the construction area is
            2,000 sq ft and the construction
            cost is ₹2,000 per sq ft:
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Total Cost =
              2,000 × 2,000
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Estimated Cost =
              ₹40,00,000
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual construction costs may vary
            depending on material quality,
            labor charges, location, finishing
            standards, and project complexity.
          </p>
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
              What is a construction cost calculator?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A construction cost calculator
              helps estimate the total budget
              required for a building project
              based on area and construction rate.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use this for house construction?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator is useful
              for houses, apartments,
              commercial buildings, and
              renovation projects.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, all construction calculators
              available on Calculator Hub are
              completely free to use.
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
            href="/area-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Area Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate construction area quickly.
            </p>
          </a>

          <a
            href="/cement-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Cement Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate cement quantity easily.
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
              Calculate concrete volume instantly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}