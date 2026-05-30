"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaintCalculator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [coats, setCoats] = useState("1");

  const [result, setResult] =
    useState<number | null>(null);

  const [area, setArea] =
    useState<number | null>(null);

  const calculatePaint = () => {
    if (
      !length ||
      !height ||
      !coats
    ) {
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
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-5xl font-extrabold">
            Paint Calculator
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Calculate paint quantity
            instantly for walls, rooms,
            ceilings, and renovation
            projects.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Calculate Paint Quantity
          </h2>

          <div className="mt-8">
            <label className="mb-2 block font-semibold text-black">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(e.target.value)
              }
              placeholder="Enter wall length"
              className="w-full rounded-2xl border p-4 outline-none focus:border-black"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-black">
              Wall Height (ft)
            </label>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
              placeholder="Enter wall height"
              className="w-full rounded-2xl border p-4 outline-none focus:border-black"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block font-semibold text-black">
              Number Of Coats
            </label>

            <input
              type="number"
              value={coats}
              onChange={(e) =>
                setCoats(e.target.value)
              }
              placeholder="Enter number of coats"
              className="w-full rounded-2xl border p-4 outline-none focus:border-black"
            />
          </div>

          <button
            onClick={calculatePaint}
            className="mt-8 w-full rounded-2xl bg-black py-4 text-lg font-bold text-white transition hover:bg-gray-800"
          >
            Calculate Paint
          </button>

          {result !== null &&
            area !== null && (
              <div className="mt-8 rounded-2xl bg-gray-100 p-6">
                <h3 className="text-2xl font-bold text-black">
                  Wall Area:{" "}
                  {area.toFixed(2)} sq ft
                </h3>

                <h3 className="mt-4 text-2xl font-bold text-black">
                  Paint Required:{" "}
                  {result.toFixed(2)} Liters
                </h3>
              </div>
            )}
        </div>
      </section>

      {/* Formula */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-black">
            Paint Calculation Formula
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Paint quantity is calculated
            using wall area and paint
            coverage rate.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-100 p-6">
            <p className="text-3xl font-bold text-black">
              Paint Required =
              (Length × Height ÷ 100)
              × Number Of Coats
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual paint usage depends
            on wall texture, paint
            quality, and surface
            condition.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-black p-10 text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            How To Use This Paint
            Calculator
          </h2>

          <div className="mt-8 space-y-5 text-lg text-gray-300">
            <p>
              1. Enter wall length in
              feet.
            </p>

            <p>
              2. Enter wall height in
              feet.
            </p>

            <p>
              3. Enter number of paint
              coats.
            </p>

            <p>
              4. Click calculate to get
              estimated paint quantity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              How much paint do I need
              for a room?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Paint requirement depends
              on room size, number of
              coats, and paint coverage.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Does this calculator work
              for ceilings?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Yes, you can calculate
              paint quantity for walls,
              ceilings, and interior
              surfaces.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Yes, all calculators on
              Calculator Hub are free to
              use online.
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
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
              Estimate plaster material
              easily.
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
              Calculate tiles needed
              instantly.
            </p>
          </a>

          <a
            href="/flooring-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Flooring Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate flooring area and
              cost.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}