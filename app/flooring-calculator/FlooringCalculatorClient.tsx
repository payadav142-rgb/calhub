"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

export default function FlooringCalculatorClient() {
  const [roomLength, setRoomLength] =
    useState("");

  const [roomWidth, setRoomWidth] =
    useState("");

  const [flooringCost, setFlooringCost] =
    useState("");

  const [unit, setUnit] =
    useState("ft");

  const [area, setArea] =
    useState<number | null>(null);

  const [result, setResult] =
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

      default:
        return value;
    }
  };

  const calculateFlooring = () => {
    if (
      !roomLength ||
      !roomWidth ||
      !flooringCost
    ) {
      return;
    }

    const lengthFt =
      convertToFeet(
        parseFloat(roomLength)
      );

    const widthFt =
      convertToFeet(
        parseFloat(roomWidth)
      );

    const totalAreaFt =
      lengthFt * widthFt;

    let finalArea =
      totalAreaFt;

    let finalAreaUnit =
      "sq ft";

    if (unit === "m") {
      finalArea =
        totalAreaFt / 10.7639;

      finalAreaUnit =
        "sq m";
    }

    if (unit === "cm") {
      finalArea =
        totalAreaFt / 0.00107639;

      finalAreaUnit =
        "sq cm";
    }

    const totalCost =
      finalArea *
      parseFloat(flooringCost);

    setArea(finalArea);

    setAreaUnit(finalAreaUnit);

    setResult(totalCost);
  };

  const resetCalculator = () => {
    setRoomLength("");
    setRoomWidth("");
    setFlooringCost("");
    setArea(null);
    setResult(null);
  };

  const downloadReport = () => {
    if (
      area === null ||
      result === null
    )
      return;

    const report = `
Flooring Calculator Report

Room Length: ${roomLength} ${unit}
Room Width: ${roomWidth} ${unit}

Floor Area:
${area.toFixed(2)} ${areaUnit}

Estimated Flooring Cost:
₹${result.toLocaleString()}

Generated from CalHub.in
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "flooring-report.txt";

    link.click();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Flooring Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate flooring area and
            estimated flooring cost for
            rooms, tiles, wood flooring,
            vinyl flooring, and renovation
            projects.
          </p>
        </div>

        {/* Calculator */}
        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
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
            </select>
          </div>

          {/* Length */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Room Length ({unit})
            </label>

            <input
              type="number"
              value={roomLength}
              onChange={(e) =>
                setRoomLength(
                  e.target.value
                )
              }
              placeholder="Enter room length"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Width */}
          <div className="mb-5">
            <label className="mb-2 block font-medium text-gray-700">
              Room Width ({unit})
            </label>

            <input
              type="number"
              value={roomWidth}
              onChange={(e) =>
                setRoomWidth(
                  e.target.value
                )
              }
              placeholder="Enter room width"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Cost */}
          <div className="mb-6">
            <label className="mb-2 block font-medium text-gray-700">
              Flooring Cost Per Unit Area
              (₹)
            </label>

            <input
              type="number"
              value={flooringCost}
              onChange={(e) =>
                setFlooringCost(
                  e.target.value
                )
              }
              placeholder="Enter flooring cost"
              className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
            />
          </div>

          {/* Buttons */}
          <div className="grid gap-4 md:grid-cols-2">
            <button
              onClick={
                calculateFlooring
              }
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Calculate Flooring
            </button>

            <button
              onClick={
                resetCalculator
              }
              className="rounded-2xl border border-orange-300 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Reset
            </button>
          </div>

          {/* Result */}
          {area !== null &&
            result !== null && (
              <div className="mt-6 rounded-2xl bg-orange-50 p-5 shadow-inner">
                <h2 className="text-2xl font-bold text-gray-900">
                  Total Area:{" "}
                  {area.toFixed(2)}{" "}
                  {areaUnit}
                </h2>

                <p className="mt-3 text-xl font-semibold text-gray-700">
                  Estimated Cost: ₹
                  {result.toLocaleString()}
                </p>

                <p className="mt-3 text-gray-600">
                  This flooring estimate
                  helps plan tile,
                  laminate, vinyl, marble,
                  and hardwood flooring
                  projects more accurately.
                </p>

                <button
                  onClick={
                    downloadReport
                  }
                  className="mt-5 rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Download Report
                </button>
              </div>
            )}
        </div>
      </section>

      {/* Formula */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Flooring Formula
          </h2>

          <p className="mt-4 text-gray-600">
            Flooring area is calculated by
            multiplying room length and
            width.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Area = Length × Width
            </p>
          </div>

          <p className="mt-6 text-gray-600">
            Flooring cost is estimated
            using total area multiplied by
            flooring cost per square foot
            or square meter.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Flooring
            Calculator
          </h2>

          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              1. Select your preferred
              measurement unit.
            </p>

            <p>
              2. Enter room length.
            </p>

            <p>
              3. Enter room width.
            </p>

            <p>
              4. Enter flooring cost per
              unit area.
            </p>

            <p>
              5. Click calculate to get
              flooring area and estimated
              cost instantly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                What is a flooring
                calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A flooring calculator helps
                estimate floor area and
                flooring installation cost
                for homes and commercial
                spaces.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Can I use this for tile
                flooring?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works
                for tiles, wood flooring,
                laminate flooring, marble,
                and vinyl flooring.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, all calculators on
                CalHub are completely free
                to use.
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