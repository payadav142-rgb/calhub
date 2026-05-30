"use client";

import { useState } from "react";
import RelatedCalculators from "../components/RelatedCalculators";
export default function FlooringCalculatorClient() {
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [flooringCost, setFlooringCost] = useState("");

  const [area, setArea] =
    useState<number | null>(null);

  const [result, setResult] =
    useState<number | null>(null);

  const calculateFlooring = () => {
    if (
      !roomLength ||
      !roomWidth ||
      !flooringCost
    )
      return;

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
    <div className="rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">
        Flooring Calculator
      </h2>

      <input
        type="number"
        value={roomLength}
        onChange={(e) =>
          setRoomLength(e.target.value)
        }
        placeholder="Room Length (ft)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <input
        type="number"
        value={roomWidth}
        onChange={(e) =>
          setRoomWidth(e.target.value)
        }
        placeholder="Room Width (ft)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <input
        type="number"
        value={flooringCost}
        onChange={(e) =>
          setFlooringCost(e.target.value)
        }
        placeholder="Flooring Cost Per Sq Ft (₹)"
        className="mb-4 w-full rounded-xl border p-3"
      />

      <button
        onClick={calculateFlooring}
        className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
      >
        Calculate
      </button>

      {area !== null &&
        result !== null && (
          <div className="mt-4 space-y-2">
            <p className="font-bold text-black">
              Total Area:{" "}
              {area.toFixed(2)} sq ft
            </p>

            <p className="font-bold text-black">
              Estimated Cost: ₹
              {result.toLocaleString()}
            </p>
          </div>
        )}
    </div>
  );
  <RelatedCalculators />
}