"use client";

import { useState } from "react";

export default function PlasterCalculatorClient() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [result, setResult] =
    useState<number | null>(null);

  const calculatePlaster = () => {
    if (
      !length ||
      !height ||
      !thickness
    ) {
      return;
    }

    let wallLength =
      parseFloat(length);

    let wallHeight =
      parseFloat(height);

    if (unit === "m") {
      wallLength *= 3.28084;
      wallHeight *= 3.28084;
    }

    const volume =
      wallLength *
      wallHeight *
      (parseFloat(thickness) / 12);

    setResult(volume);
  };

  const resetCalculator = () => {
    setLength("");
    setHeight("");
    setThickness("");
    setResult(null);
    setUnit("ft");
  };

  const downloadPDF = async () => {
    if (result === null) return;

    const html2pdf =
      (await import("html2pdf.js"))
        .default;

    const element =
      document.createElement("div");

    element.innerHTML = `
      <h1>Plaster Calculator Result</h1>
      <p><strong>Length:</strong> ${length} ${unit}</p>
      <p><strong>Height:</strong> ${height} ${unit}</p>
      <p><strong>Thickness:</strong> ${thickness} inch</p>
      <h2>Plaster Volume: ${result.toFixed(
        2
      )} ft³</h2>
    `;

    html2pdf().from(element).save(
      "plaster-calculation.pdf"
    );
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Unit
        </label>

        <select
          value={unit}
          onChange={(e) =>
            setUnit(e.target.value)
          }
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        >
          <option value="ft">
            Feet (ft)
          </option>

          <option value="m">
            Meters (m)
          </option>
        </select>
      </div>

      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Wall Length ({unit})
        </label>

        <input
          type="number"
          value={length}
          onChange={(e) =>
            setLength(e.target.value)
          }
          placeholder="Enter wall length"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block font-medium text-gray-700">
          Wall Height ({unit})
        </label>

        <input
          type="number"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value)
          }
          placeholder="Enter wall height"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">
          Thickness (inch)
        </label>

        <input
          type="number"
          value={thickness}
          onChange={(e) =>
            setThickness(e.target.value)
          }
          placeholder="Enter thickness"
          className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={calculatePlaster}
          className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
        >
          Calculate Plaster
        </button>

        <button
          onClick={resetCalculator}
          className="w-full rounded-2xl bg-gray-200 py-3 font-semibold text-gray-800 transition hover:bg-gray-300"
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">

          <h2 className="text-2xl font-bold text-gray-900">
            Plaster Volume:
            {" "}
            {result.toFixed(2)} ft³
          </h2>

          <button
            onClick={downloadPDF}
            className="mt-5 w-full rounded-2xl bg-gray-900 py-3 font-semibold text-white transition hover:bg-black"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}