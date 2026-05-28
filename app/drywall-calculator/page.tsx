

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

      {/* SEO Section */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Drywall Quantity Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This drywall calculator helps estimate
            the number of drywall sheets required
            for walls, ceilings, and interior
            construction projects.
          </p>

          <p className="mt-4 text-gray-600">
            Accurate drywall estimation helps
            reduce material waste and improve
            construction planning.
          </p>

          <p className="mt-4 text-gray-600">
            Builders and contractors commonly use
            drywall calculators to estimate sheet
            requirements for residential and
            commercial projects.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Drywall Sheets = Wall Area ÷ Sheet
            Area
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
                What is a drywall calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A drywall calculator estimates the
                number of drywall sheets required
                for construction projects.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for ceilings?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works for
                walls, ceilings, and interior
                drywall installations.
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

