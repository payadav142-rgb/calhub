"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DrywallCalculator() {
  const [wallLength, setWallLength] =
    useState("");

  const [wallHeight, setWallHeight] =
    useState("");

  const [sheetArea, setSheetArea] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateDrywall = () => {
    const wallArea =
      parseFloat(wallLength) *
      parseFloat(wallHeight);

    const sheetsNeeded =
      wallArea / parseFloat(sheetArea);

    setResult(Math.ceil(sheetsNeeded));
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Drywall Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate drywall sheets required for
          walls and ceiling construction projects.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Wall Length (ft)
            </label>

            <input
              type="number"
              value={wallLength}
              onChange={(e) =>
                setWallLength(e.target.value)
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
              value={wallHeight}
              onChange={(e) =>
                setWallHeight(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter wall height"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Drywall Sheet Area (sq ft)
            </label>

            <input
              type="number"
              value={sheetArea}
              onChange={(e) =>
                setSheetArea(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter drywall sheet area"
            />
          </div>

          <button
            onClick={calculateDrywall}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Drywall Sheets Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Drywall Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Drywall sheet estimation is calculated
            by dividing total wall area by the
            coverage area of a single drywall
            sheet. Accurate drywall calculations
            help reduce waste and improve material
            planning for residential and
            commercial construction projects.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Drywall Sheets = Wall Area ÷ Sheet Area
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Contractors, builders, and homeowners
            commonly use drywall calculators when
            planning interior wall finishing,
            ceiling installations, office
            renovations, and home improvement
            projects.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Proper drywall estimation helps save
            money, reduce material shortages, and
            improve overall project efficiency.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Drywall Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>1. Enter wall length in feet.</p>

            <p>2. Enter wall height in feet.</p>

            <p>
              3. Enter drywall sheet coverage
              area.
            </p>

            <p>
              4. Click calculate to estimate
              drywall sheets instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Example Drywall Calculation
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If wall length is 20 ft, wall height
            is 10 ft, and one drywall sheet covers
            32 sq ft:
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Wall Area = 20 × 10 = 200 sq ft
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Drywall Sheets = 200 ÷ 32 = 6.25
            </p>

            <p className="mt-4 text-xl font-semibold text-gray-700">
              Required Sheets = 7
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
              What is a drywall calculator?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A drywall calculator estimates the
              number of drywall sheets needed for
              walls and ceilings.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use this for ceilings?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator can be used for
              ceilings, partition walls, and other
              drywall installation projects.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              construction calculators for
              contractors, builders, and
              homeowners.
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
            href="/paint-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Paint Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate paint quantity easily.
            </p>
          </a>

          <a
            href="/area-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Area Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Calculate wall area instantly.
            </p>
          </a>

          <a
            href="/construction-cost-calculator"
            className="rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              Construction Cost Calculator
            </h3>

            <p className="mt-3 text-gray-600">
              Estimate project cost quickly.
            </p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}