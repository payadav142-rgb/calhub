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

  const [waste, setWaste] =
    useState("10");

  const [unit, setUnit] =
    useState("ft");

  const [totalArea, setTotalArea] =
    useState<number | null>(null);

  const [paverArea, setPaverArea] =
    useState<number | null>(null);

  const [totalPavers, setTotalPavers] =
    useState<number | null>(null);

  const [finalPavers, setFinalPavers] =
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

    const area =
      parseFloat(areaLength) *
      parseFloat(areaWidth);

    const singlePaver =
      parseFloat(paverLength) *
      parseFloat(paverWidth);

    const requiredPavers =
      area / singlePaver;

    const wasteAmount =
      requiredPavers *
      (parseFloat(waste) / 100);

    const finalCount =
      requiredPavers + wasteAmount;

    setTotalArea(area);

    setPaverArea(singlePaver);

    setTotalPavers(
      Math.ceil(requiredPavers)
    );

    setFinalPavers(
      Math.ceil(finalCount)
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Paver Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate pavers required for patios,
            pathways, driveways, and landscaping
            projects instantly.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Unit
              </label>

              <select
                value={unit}
                onChange={(e) =>
                  setUnit(e.target.value)
                }
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              >
                <option value="ft">
                  Feet (ft)
                </option>

                <option value="m">
                  Meters (m)
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Area Length ({unit})
              </label>

              <input
                type="number"
                value={areaLength}
                onChange={(e) =>
                  setAreaLength(e.target.value)
                }
                placeholder="Enter area length"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Area Width ({unit})
              </label>

              <input
                type="number"
                value={areaWidth}
                onChange={(e) =>
                  setAreaWidth(e.target.value)
                }
                placeholder="Enter area width"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Paver Length ({unit})
              </label>

              <input
                type="number"
                value={paverLength}
                onChange={(e) =>
                  setPaverLength(e.target.value)
                }
                placeholder="Enter paver length"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Paver Width ({unit})
              </label>

              <input
                type="number"
                value={paverWidth}
                onChange={(e) =>
                  setPaverWidth(e.target.value)
                }
                placeholder="Enter paver width"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Waste Percentage (%)
              </label>

              <input
                type="number"
                value={waste}
                onChange={(e) =>
                  setWaste(e.target.value)
                }
                placeholder="Enter waste percentage"
                className="w-full rounded-2xl border border-orange-200 p-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <button
              onClick={calculatePavers}
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate Pavers
            </button>

            {finalPavers !== null && (
              <div className="rounded-2xl bg-orange-50 p-6 shadow-inner">
                <h3 className="text-2xl font-bold text-gray-900">
                  Total Area:
                  {" "}
                  {totalArea?.toFixed(2)}
                  {" "}
                  {unit}²
                </h3>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  Single Paver Area:
                  {" "}
                  {paverArea?.toFixed(2)}
                  {" "}
                  {unit}²
                </h3>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  Pavers Needed:
                  {" "}
                  {totalPavers}
                </h3>

                <h3 className="mt-3 text-2xl font-bold text-orange-600">
                  Final Pavers With Waste:
                  {" "}
                  {finalPavers}
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}