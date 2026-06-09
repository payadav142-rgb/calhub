"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

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
    if (
      !areaLength ||
      !areaWidth ||
      !paverLength ||
      !paverWidth
    ) {
      return;
    }

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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Paver Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate the exact number of pavers
            required for patios, driveways,
            pathways, sidewalks, outdoor flooring,
            and landscaping projects instantly.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Area Length (ft)
              </label>

              <input
                type="number"
                value={areaLength}
                onChange={(e) =>
                  setAreaLength(e.target.value)
                }
                placeholder="Enter area length"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Area Width (ft)
              </label>

              <input
                type="number"
                value={areaWidth}
                onChange={(e) =>
                  setAreaWidth(e.target.value)
                }
                placeholder="Enter area width"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Paver Length (ft)
              </label>

              <input
                type="number"
                value={paverLength}
                onChange={(e) =>
                  setPaverLength(e.target.value)
                }
                placeholder="Enter paver length"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Paver Width (ft)
              </label>

              <input
                type="number"
                value={paverWidth}
                onChange={(e) =>
                  setPaverWidth(e.target.value)
                }
                placeholder="Enter paver width"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <button
              onClick={calculatePavers}
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate Pavers
            </button>

            {result !== null && (
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-inner text-center">
                <h3 className="text-3xl font-bold text-gray-900">
                  Pavers Needed: {result}
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FORMULA */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900">
            Paver Calculation Formula
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The total number of pavers required is
            calculated by dividing the total area
            by the area covered by one paver.
          </p>

          <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-8">
            <p className="text-3xl font-bold text-orange-600">
              Pavers Needed =
              Total Area ÷ Single Paver Area
            </p>
          </div>

          <p className="mt-8 leading-8 text-gray-600">
            This paver calculator helps builders,
            homeowners, landscapers, and
            contractors estimate paving materials
            accurately while reducing material
            waste and improving budgeting.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-900">
            How To Use This Paver Calculator
          </h2>

          <div className="mt-8 space-y-5 text-lg text-gray-600">
            <p>
              1. Enter the total area length.
            </p>

            <p>
              2. Enter the total area width.
            </p>

            <p>
              3. Enter individual paver length.
            </p>

            <p>
              4. Enter individual paver width.
            </p>

            <p>
              5. Click calculate to instantly get
              the total number of pavers required.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Accurate Estimates
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Reduce material waste with accurate
              paving calculations for all outdoor
              projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Fast Planning
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Instantly estimate paving material
              requirements for patios, pathways,
              and driveways.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Free Online Tool
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Use this free paver calculator for
              landscaping and construction
              projects anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              What is a paver calculator?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              A paver calculator estimates the
              number of paving blocks needed for
              patios, pathways, sidewalks,
              driveways, and outdoor flooring
              projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use this for driveways?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Yes, this calculator works for
              driveways, patios, gardens,
              sidewalks, and landscaping projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Yes, Calculator Hub provides free
              online construction calculators for
              homeowners, contractors, and
              builders.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}