"use client";

import { useState } from "react";

export default function DrywallCalculatorClient() {
  const [wallLength, setWallLength] =
    useState("");

  const [wallHeight, setWallHeight] =
    useState("");

  const [sheetArea, setSheetArea] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateDrywall = () => {
    if (
      !wallLength ||
      !wallHeight ||
      !sheetArea
    ) {
      return;
    }

    const wallArea =
      parseFloat(wallLength) *
      parseFloat(wallHeight);

    const sheetsNeeded =
      wallArea / parseFloat(sheetArea);

    setResult(Math.ceil(sheetsNeeded));
  };

  return (
    <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl">

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Wall Length (ft)
        </label>

        <input
          type="number"
          value={wallLength}
          onChange={(e) =>
            setWallLength(e.target.value)
          }
          placeholder="Enter wall length"
          className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Wall Height (ft)
        </label>

        <input
          type="number"
          value={wallHeight}
          onChange={(e) =>
            setWallHeight(e.target.value)
          }
          placeholder="Enter wall height"
          className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Drywall Sheet Area (sq ft)
        </label>

        <input
          type="number"
          value={sheetArea}
          onChange={(e) =>
            setSheetArea(e.target.value)
          }
          placeholder="Enter drywall sheet area"
          className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      <button
        onClick={calculateDrywall}
        className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-6 rounded-2xl bg-orange-50 p-5 shadow-inner">
          <h2 className="text-2xl font-bold text-black">
            Drywall Sheets Needed: {result}
          </h2>
        </div>
      )}
    </div>
  );
}