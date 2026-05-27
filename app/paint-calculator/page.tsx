"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaintCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculatePaint = () => {
    const area =
      parseFloat(length) * parseFloat(height);

    const paintNeeded = area / 100;

    setResult(paintNeeded);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Paint Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate paint required for your walls.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter wall length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Wall Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter wall height"
            />
          </div>

          <button
            onClick={calculatePaint}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Paint Required:{" "}
                {result.toFixed(2)} Liters
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Paint Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Paint quantity is estimated by
            calculating wall area and dividing by
            paint coverage.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Paint Required =
              Wall Area ÷ 100
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual paint requirement may vary
            depending on wall texture, number of
            coats, and paint type.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Paint Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter wall length in feet.
            </p>

            <p>
              2. Enter wall height in feet.
            </p>

            <p>
              3. Click calculate button.
            </p>

            <p>
              4. Instantly get estimated paint
              quantity required.
            </p>
          </div>
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
              How much paint is needed for a
              room?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Paint requirement depends on wall
              area and number of coats. This
              calculator provides a quick
              estimation.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Does this include multiple coats?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              No, this is a basic paint
              estimation calculator. Multiple
              coats may require more paint.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              online construction calculators for
              everyone.
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
            href="/plaster-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Plaster Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate plaster material easily.
            </p>
          </a>

          <a
            href="/tile-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Tile Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate tiles needed instantly.
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
              Estimate cement quantity quickly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}