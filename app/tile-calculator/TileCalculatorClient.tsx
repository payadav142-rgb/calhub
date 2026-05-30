"use client";

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CalculatorResult from "../components/CalculatorResult";
import RelatedCalculators from "../components/RelatedCalculators";
export default function TileCalculator() {
  const [floorLength, setFloorLength] =
    useState("");

  const [floorWidth, setFloorWidth] =
    useState("");

  const [tileLength, setTileLength] =
    useState("");

  const [tileWidth, setTileWidth] =
    useState("");

  const [result, setResult] =
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
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Tile Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate tiles needed for flooring
          and wall installation projects.
        </p>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Floor Length (ft)
            </label>

            <input
              type="number"
              value={floorLength}
              onChange={(e) =>
                setFloorLength(e.target.value)
              }
              placeholder="Enter floor length"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-3 text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Floor Width (ft)
            </label>

            <input
              type="number"
              value={floorWidth}
              onChange={(e) =>
                setFloorWidth(e.target.value)
              }
              placeholder="Enter floor width"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-3 text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Tile Length (ft)
            </label>

            <input
              type="number"
              value={tileLength}
              onChange={(e) =>
                setTileLength(e.target.value)
              }
              placeholder="Enter tile length"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-3 text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Tile Width (ft)
            </label>

            <input
              type="number"
              value={tileWidth}
              onChange={(e) =>
                setTileWidth(e.target.value)
              }
              placeholder="Enter tile width"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-3 text-black outline-none focus:border-black focus:ring-2 focus:ring-black/10"
            />
          </div>

          <button
            onClick={calculateTiles}
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-medium text-gray-700">Tiles Needed</h3>
              <CalculatorResult title={"Tiles Needed"} result={String(result)} />
            </div>
          )}
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Tile Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tile quantity is calculated using
            floor area and tile area.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-black">
              Tiles Needed =
              Floor Area ÷ Tile Area
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate the
            number of tiles required for
            flooring, kitchens, bathrooms, and
            wall installations.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Tile Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter floor length.
            </p>

            <p>
              2. Enter floor width.
            </p>

            <p>
              3. Enter tile dimensions.
            </p>

            <p>
              4. Click calculate to estimate
              tiles required instantly.
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
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              How many tiles do I need?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Tile quantity depends on floor
              dimensions and tile size. This
              calculator provides quick
              estimation.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Should I buy extra tiles?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, it is recommended to buy 5%
              to 10% extra tiles for cutting and
              wastage.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this tile calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              construction calculators for
              builders and homeowners.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}

