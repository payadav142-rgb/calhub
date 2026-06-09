"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import RelatedCalculators from "../components/RelatedCalculators";

export default function TileCalculatorClient() {
  const [floorLength, setFloorLength] =
    useState("");

  const [floorWidth, setFloorWidth] =
    useState("");

  const [tileLength, setTileLength] =
    useState("");

  const [tileWidth, setTileWidth] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [result, setResult] =
    useState<number | null>(null);

  const [extraTiles, setExtraTiles] =
    useState<number | null>(null);

  const calculateTiles = () => {
    if (
      !floorLength ||
      !floorWidth ||
      !tileLength ||
      !tileWidth
    ) {
      return;
    }

    const floorArea =
      parseFloat(floorLength) *
      parseFloat(floorWidth);

    const tileArea =
      parseFloat(tileLength) *
      parseFloat(tileWidth);

    const tilesNeeded =
      floorArea / tileArea;

    setResult(Math.ceil(tilesNeeded));

    setExtraTiles(
      Math.ceil(tilesNeeded * 1.1)
    );
  };

  const resetCalculator = () => {
    setFloorLength("");
    setFloorWidth("");
    setTileLength("");
    setTileWidth("");
    setResult(null);
    setExtraTiles(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Tile Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate tiles needed for flooring
            and wall installation projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          {/* Unit */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Select Unit
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
                Meter (m)
              </option>
            </select>
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Floor Length ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={floorLength}
              onChange={(e) =>
                setFloorLength(e.target.value)
              }
              placeholder="Enter floor length"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Floor Width ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={floorWidth}
              onChange={(e) =>
                setFloorWidth(e.target.value)
              }
              placeholder="Enter floor width"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Tile Length ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={tileLength}
              onChange={(e) =>
                setTileLength(e.target.value)
              }
              placeholder="Enter tile length"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Tile Width ({unit})
            </label>

            <input
              type="number"
              step="any"
              value={tileWidth}
              onChange={(e) =>
                setTileWidth(e.target.value)
              }
              placeholder="Enter tile width"
              className="w-full rounded-2xl border border-orange-200 p-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateTiles}
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate Tiles
            </button>

            <button
              onClick={resetCalculator}
              className="w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-orange-600 transition-all duration-300 hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">

              <h3 className="text-2xl font-bold text-gray-900">
                Tiles Needed:
                {" "}
                {result}
              </h3>

              <p className="mt-3 text-lg text-gray-700">
                Recommended With 10% Extra:
                {" "}
                {extraTiles}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Tile Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tile quantity is calculated using
            floor area and tile area.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">

            <p className="text-2xl font-bold text-orange-600">
              Tiles Needed =
              Floor Area ÷ Tile Area
            </p>

          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate the
            number of tiles required for
            flooring, kitchens, bathrooms,
            and wall installations.
          </p>

        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}