"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Tile Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate tiles needed for flooring.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Floor Length (ft)
            </label>

            <input
              type="number"
              value={floorLength}
              onChange={(e) =>
                setFloorLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter floor length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Floor Width (ft)
            </label>

            <input
              type="number"
              value={floorWidth}
              onChange={(e) =>
                setFloorWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter floor width"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Tile Length (ft)
            </label>

            <input
              type="number"
              value={tileLength}
              onChange={(e) =>
                setTileLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter tile length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Tile Width (ft)
            </label>

            <input
              type="number"
              value={tileWidth}
              onChange={(e) =>
                setTileWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter tile width"
            />
          </div>

          <button
            onClick={calculateTiles}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Tiles Needed: {result}
              </h2>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}