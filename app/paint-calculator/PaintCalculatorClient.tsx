"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function PaintCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [coats, setCoats] = useState("1");

  const [result, setResult] =
    useState<number | null>(null);

  const [area, setArea] =
    useState<number | null>(null);

  const calculatePaint = () => {
    if (!length || !height || !coats) {
      return;
    }

    const wallArea =
      parseFloat(length) *
      parseFloat(height);

    const paintNeeded =
      (wallArea / 100) *
      parseFloat(coats);

    setArea(wallArea);
    setResult(paintNeeded);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Paint Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate paint quantity instantly
            for walls, rooms, ceilings, and
            renovation projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              placeholder="Enter wall length"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Wall Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              placeholder="Enter wall height"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Number Of Coats
            </label>

            <input
              type="number"
              value={coats}
              onChange={(e) =>
                setCoats(e.target.value)
              }
              placeholder="Enter number of coats"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <button
            onClick={calculatePaint}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate Paint
          </button>

          {result !== null &&
            area !== null && (
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  Wall Area:
                  {" "}
                  {area.toFixed(2)} sq ft
                </h2>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Paint Required:
                  {" "}
                  {result.toFixed(2)} Liters
                </h2>
              </div>
            )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Paint Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Paint quantity is calculated using
            wall area and paint coverage rate.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Paint Required =
              (Length × Height ÷ 100)
              × Number Of Coats
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual paint usage depends on wall
            texture, paint quality, and surface
            condition.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Paint Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              1. Enter wall length in feet.
            </p>

            <p>
              2. Enter wall height in feet.
            </p>

            <p>
              3. Enter number of paint coats.
            </p>

            <p>
              4. Click calculate to get
              estimated paint quantity.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Example Paint Calculation
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If wall length is 20 ft, wall
            height is 10 ft, and 2 coats
            are required:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Paint Required =
              (20 × 10 ÷ 100) × 2
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Paint Required = 4 Liters
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual paint consumption may vary
            depending on paint type and wall
            surface conditions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              How much paint do I need
              for a room?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Paint requirement depends on
              room size, number of coats,
              and paint coverage.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Does this calculator work
              for ceilings?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, you can calculate paint
              quantity for walls, ceilings,
              and interior surfaces.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, all calculators on
              Calculator Hub are completely
              free to use.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}