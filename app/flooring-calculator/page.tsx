"use client";
import Head from "next/head";


import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FlooringCalculator() {
  const [roomLength, setRoomLength] =
    useState("");

  const [roomWidth, setRoomWidth] =
    useState("");

  const [flooringCost, setFlooringCost] =
    useState("");

  const [result, setResult] =
    useState<number | null>(null);

  const [area, setArea] =
    useState<number | null>(null);

  const calculateFlooring = () => {
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
    <main className="min-h-screen bg-gray-100">

      <Head>
        <title>
          Flooring Calculator | Calculator Hub
        </title>

        <meta
          name="description"
          content="Free flooring calculator to estimate flooring area and total flooring cost instantly for rooms, homes, and construction projects."
        />

        <meta
          name="keywords"
          content="flooring calculator, flooring cost calculator, floor area calculator, tile flooring calculator, construction flooring calculator"
        />

        <link
          rel="canonical"
          href="https://yourdomain.com/flooring-calculator"
        />
      </Head>

      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Flooring Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Estimate flooring area and total cost
          instantly for your construction or
          renovation project.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-black">
              Room Length (ft)
            </label>

            <input
              type="number"
              value={roomLength}
              onChange={(e) =>
                setRoomLength(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter room length"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Room Width (ft)
            </label>

            <input
              type="number"
              value={roomWidth}
              onChange={(e) =>
                setRoomWidth(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter room width"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-black">
              Flooring Cost Per Sq Ft (₹)
            </label>

            <input
              type="number"
              value={flooringCost}
              onChange={(e) =>
                setFlooringCost(e.target.value)
              }
              className="w-full rounded-xl border p-3"
              placeholder="Enter flooring cost"
            />
          </div>

          <button
            onClick={calculateFlooring}
            className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800"
          >
            Calculate
          </button>

          {result !== null && area !== null && (
            <div className="mt-6 rounded-xl bg-gray-100 p-4">
              <h2 className="text-2xl font-bold text-black">
                Total Area: {area.toFixed(2)} sq ft
              </h2>

              <h2 className="mt-3 text-2xl font-bold text-black">
                Estimated Flooring Cost: ₹
                {result.toLocaleString()}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Flooring Cost Estimation
          </h2>

          <p className="mt-4 text-gray-600">
            This flooring calculator helps
            homeowners, contractors, and builders
            estimate flooring area and material
            costs quickly.
          </p>

          <p className="mt-4 text-gray-600">
            Flooring costs depend on material
            type, labor charges, and room size.
          </p>

          <h3 className="mt-6 text-2xl font-semibold text-black">
            Formula
          </h3>

          <p className="mt-3 text-gray-600">
            Area = Length × Width
          </p>

          <p className="mt-2 text-gray-600">
            Total Cost = Area × Cost Per Sq Ft
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                What is a flooring calculator?
              </h3>

              <p className="mt-2 text-gray-600">
                A flooring calculator estimates
                flooring area and total material
                cost for rooms and buildings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Can I use this for tile flooring?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, this calculator works for
                tiles, marble, wooden flooring,
                and other flooring materials.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this calculator free?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes, Calculator Hub provides free
                online construction calculators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

