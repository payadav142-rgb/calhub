"use client";

import { useState } from "react";

export default function GravelCalculatorClient() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [depth, setDepth] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const calculateGravel = () => {
    if (
      !length ||
      !width ||
      !depth
    )
      return;

    const volume =
      parseFloat(length) *
      parseFloat(width) *
      parseFloat(depth);

    setResult(volume);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        Gravel Calculator
      </h2>

      <input
        type="number"
        value={length}
        onChange={(e) =>
          setLength(e.target.value)
        }
        placeholder="Length (ft)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <input
        type="number"
        value={width}
        onChange={(e) =>
          setWidth(e.target.value)
        }
        placeholder="Width (ft)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <input
        type="number"
        value={depth}
        onChange={(e) =>
          setDepth(e.target.value)
        }
        placeholder="Depth (ft)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <button
        onClick={calculateGravel}
        className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
      >
        Calculate
      </button>

      {result !== null && (
        <p className="mt-4 font-bold text-black">
          Gravel Required:{" "}
          {result.toFixed(2)} ft³
        </p>
      )}
    </div>
  );
}