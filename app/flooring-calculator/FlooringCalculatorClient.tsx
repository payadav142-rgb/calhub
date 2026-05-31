"use client";

import { useState } from "react";

export default function FlooringCalculatorClient() {
  const [roomLength, setRoomLength] =
    useState("");

  const [roomWidth, setRoomWidth] =
    useState("");

  const [flooringCost, setFlooringCost] =
    useState("");

  const [area, setArea] =
    useState<number | null>(null);

  const [result, setResult] =
    useState<number | null>(null);

  const calculateFlooring = () => {
    if (
      !roomLength ||
      !roomWidth ||
      !flooringCost
    ) {
      return;
    }

    const totalArea =
      parseFloat(roomLength) *
      parseFloat(roomWidth);

    const totalCost =
      totalArea *
      parseFloat(flooringCost);

    setArea(totalArea);
    setResult(totalCost);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Room Length (ft)
        </label>

        <input
          type="number"
          value={roomLength}
          onChange={(e) =>
            setRoomLength(e.target.value)
          }
          placeholder="Enter room length"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Room Width (ft)
        </label>

        <input
          type="number"
          value={roomWidth}
          onChange={(e) =>
            setRoomWidth(e.target.value)
          }
          placeholder="Enter room width"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">
          Flooring Cost Per Sq Ft (₹)
        </label>

        <input
          type="number"
          value={flooringCost}
          onChange={(e) =>
            setFlooringCost(e.target.value)
          }
          placeholder="Enter flooring cost"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <button
        onClick={calculateFlooring}
        className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
      >
        Calculate Flooring
      </button>

      {area !== null &&
        result !== null && (
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
            <h2 className="text-2xl font-bold text-gray-900">
              Total Area:{" "}
              {area.toFixed(2)} sq ft
            </h2>

            <p className="mt-3 text-xl font-semibold text-gray-700">
              Estimated Cost: ₹
              {result.toLocaleString()}
            </p>
          </div>
        )}
    </div>
  );
}