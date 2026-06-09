"use client";

import { useState } from "react";
import jsPDF from "jspdf";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function PaintCalculator() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [coats, setCoats] =
    useState("1");

  const [unit, setUnit] =
    useState("ft");

  const [result, setResult] =
    useState<number | null>(null);

  const [area, setArea] =
    useState<number | null>(null);

  const [areaUnit, setAreaUnit] =
    useState("");

  const convertToFeet = (
    value: number
  ) => {
    switch (unit) {
      case "m":
        return value * 3.28084;

      case "cm":
        return value * 0.0328084;

      case "yd":
        return value * 3;

      default:
        return value;
    }
  };

  const calculatePaint = () => {
    if (
      !length ||
      !height ||
      !coats
    ) {
      return;
    }

    const lengthFt =
      convertToFeet(
        parseFloat(length)
      );

    const heightFt =
      convertToFeet(
        parseFloat(height)
      );

    const wallAreaFt =
      lengthFt * heightFt;

    const paintNeeded =
      (wallAreaFt / 100) *
      parseFloat(coats);

    let finalArea =
      wallAreaFt;

    let finalUnit =
      "sq ft";

    if (unit === "m") {
      finalArea =
        wallAreaFt * 0.092903;

      finalUnit = "m²";
    }

    if (unit === "cm") {
      finalArea =
        wallAreaFt * 929.03;

      finalUnit = "cm²";
    }

    if (unit === "yd") {
      finalArea =
        wallAreaFt / 9;

      finalUnit = "yd²";
    }

    setArea(finalArea);
    setAreaUnit(finalUnit);

    setResult(paintNeeded);
  };

  const resetCalculator = () => {
    setLength("");
    setHeight("");
    setCoats("1");
    setUnit("ft");
    setResult(null);
    setArea(null);
    setAreaUnit("");
  };

  const downloadPDF = () => {
    if (
      result === null ||
      area === null
    ) {
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "Paint Calculator Result",
      20,
      30
    );

    doc.setFontSize(14);

    doc.text(
      `Length: ${length} ${unit}`,
      20,
      60
    );

    doc.text(
      `Height: ${height} ${unit}`,
      20,
      75
    );

    doc.text(
      `Coats: ${coats}`,
      20,
      90
    );

    doc.text(
      `Wall Area: ${area.toFixed(
        2
      )} ${areaUnit}`,
      20,
      110
    );

    doc.text(
      `Paint Required: ${result.toFixed(
        2
      )} Liters`,
      20,
      125
    );

    doc.save(
      "paint-calculation.pdf"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Paint Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate paint quantity
            instantly for walls,
            rooms, ceilings, and
            renovation projects.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Unit
            </label>

            <select
              value={unit}
              onChange={(e) =>
                setUnit(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            >
              <option value="ft">
                Feet (ft)
              </option>

              <option value="m">
                Meter (m)
              </option>

              <option value="cm">
                Centimeter (cm)
              </option>

              <option value="yd">
                Yard (yd)
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
                setLength(
                  e.target.value
                )
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
                setHeight(
                  e.target.value
                )
              }
              placeholder="Enter wall height"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Number Of Coats
            </label>

            <input
              type="number"
              value={coats}
              onChange={(e) =>
                setCoats(
                  e.target.value
                )
              }
              placeholder="Enter number of coats"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="flex gap-4">

            <button
              onClick={
                calculatePaint
              }
              className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Calculate Paint
            </button>

            <button
              onClick={
                resetCalculator
              }
              className="w-full rounded-2xl border border-orange-300 bg-white py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-orange-50"
            >
              Reset
            </button>

          </div>

          {result !== null &&
            area !== null && (
              <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">

                <h2 className="text-2xl font-bold text-gray-900">
                  Wall Area:
                  {" "}
                  {area.toFixed(2)}{" "}
                  {areaUnit}
                </h2>

                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Paint Required:
                  {" "}
                  {result.toFixed(
                    2
                  )}{" "}
                  Liters
                </h2>

                <button
                  onClick={
                    downloadPDF
                  }
                  className="mt-5 w-full rounded-2xl bg-gray-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-black"
                >
                  Download PDF
                </button>

              </div>
            )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Paint Calculation
            Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Paint quantity is
            calculated using wall
            area and paint coverage
            rate.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Paint Required =
              (Length × Height ÷ 100)
              × Number Of Coats
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            Actual paint usage
            depends on wall texture,
            paint quality, and
            surface condition.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">

          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked
            Questions
          </h2>

          <div className="mt-10 space-y-6">

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                How much paint do I
                need for a room?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Paint requirement
                depends on room size,
                number of coats, and
                paint coverage.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                Does this calculator
                work for ceilings?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes, you can
                calculate paint
                quantity for walls,
                ceilings, and
                interior surfaces.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">
                Is this calculator
                free?
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Yes, all calculators
                on Calculator Hub are
                completely free to
                use.
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