"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";
export default function UnitConverter() {
  const [meters, setMeters] =
    useState("");

  const [feet, setFeet] =
    useState<number | null>(null);

  const convertUnits = () => {
    const converted =
      parseFloat(meters) * 3.28084;

    setFeet(converted);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Unit Converter
        </h1>

        <p className="mt-4 text-gray-600">
          Convert construction measurement units
          instantly and accurately.
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Meters
            </label>

            <input
              type="number"
              value={meters}
              onChange={(e) =>
                setMeters(e.target.value)
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              placeholder="Enter meters"
            />
          </div>

          <button
            onClick={convertUnits}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Convert
          </button>

          {feet !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
              <h2 className="text-2xl font-bold text-black">
                Feet: {feet.toFixed(2)} ft
              </h2>
            </div>
          )}
        </div>
      </section>
      {/* SEO */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">
            Construction Unit Conversion
          </h2>

          <p className="mt-4 text-gray-600">
            This unit converter helps builders,
            engineers, and contractors convert
            measurements quickly for construction
            and engineering projects.
          </p>

          <p className="mt-4 text-gray-600">
            Accurate unit conversion improves
            project planning and reduces
            measurement errors.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Feet = Meters × 3.28084
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                What is a unit converter?
              </h3>

              <p className="mt-2 text-gray-600">
                A unit converter helps convert
                measurements between different
                units accurately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for construction?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this converter is useful for
                construction measurements and site
                calculations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this converter free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, Calculator Hub provides free
                online conversion tools.
              </p>
            </div>
          </div>
        </div>
      </section>
<RelatedCalculators />
      <Footer />
    </main>
  );
}

