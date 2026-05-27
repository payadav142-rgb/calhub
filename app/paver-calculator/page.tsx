"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaverCalculator() {
  const [areaLength, setAreaLength] =
    useState("");

  const [areaWidth, setAreaWidth] =
    useState("");

  const [paverLength, setPaverLength] =
    useState("");

  const [paverWidth, setPaverWidth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculatePavers = () => {
    const totalArea =
      parseFloat(areaLength) *
      parseFloat(areaWidth);

    const singlePaverArea =
      parseFloat(paverLength) *
      parseFloat(paverWidth);

    const totalPavers =
      totalArea / singlePaverArea;

    setResult(Math.ceil(totalPavers));
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Paver Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate the number of pavers required
          for patios, driveways, walkways, and
          flooring projects.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Area Length (ft)
            </label>

            <input
              type="number"
              value={areaLength}
              onChange={(e) =>
                setAreaLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter area length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Area Width (ft)
            </label>

            <input
              type="number"
              value={areaWidth}
              onChange={(e) =>
                setAreaWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter area width"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Paver Length (ft)
            </label>

            <input
              type="number"
              value={paverLength}
              onChange={(e) =>
                setPaverLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter paver length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Paver Width (ft)
            </label>

            <input
              type="number"
              value={paverWidth}
              onChange={(e) =>
                setPaverWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter paver width"
            />
          </div>

          <button
            onClick={calculatePavers}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Pavers Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Paver Quantity Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This paver calculator helps estimate
            the number of paving blocks required
            for patios, driveways, pathways,
            sidewalks, and flooring projects.
          </p>

          <p className="mt-4 text-gray-600">
            Accurate paver estimates help reduce
            material waste and improve project
            budgeting.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Pavers Needed = Total Area ÷ Single
            Paver Area
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
                What is a paver calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A paver calculator estimates the
                number of paving blocks needed for
                construction and landscaping
                projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for driveways?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works for
                driveways, patios, sidewalks,
                gardens, and outdoor flooring.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, Calculator Hub provides free
                online calculators for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}