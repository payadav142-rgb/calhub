"use client";
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function AreaCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateArea = () => {
    const area =
      parseFloat(length) *
      parseFloat(width);

    setResult(area);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Area Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate area instantly for rooms,
          land, flooring, and construction
          projects.
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

          <button
            onClick={calculateArea}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Total Area: {result.toFixed(2)} sq
                ft
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Area Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            Area is calculated by multiplying
            length and width. This calculator is
            useful for flooring, painting,
            construction, and land measurement.
          </p>

          <p className="mt-4 text-gray-600">
            Builders, engineers, architects, and
            homeowners commonly use area
            calculations for construction planning
            and material estimation.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Area = Length × Width
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
                What is an area calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                An area calculator helps measure
                the total surface area of a space
                or object.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on Calculator
                Hub are completely free.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I calculate room area?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, you can use this calculator
                for rooms, plots, flooring, and
                construction areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

