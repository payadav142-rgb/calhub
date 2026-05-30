import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlooringCalculatorClient from "./FlooringCalculatorClient";

export const metadata: Metadata = {
  title:
    "Flooring Calculator | Calculator Hub",

  description:
    "Calculate flooring area and estimate flooring costs instantly with our free flooring calculator.",

  keywords: [
    "flooring calculator",
    "floor area calculator",
    "tile calculator",
    "flooring cost calculator",
    "construction calculator",
  ],

  alternates: {
    canonical: "/flooring-calculator",
  },

  openGraph: {
    title:
      "Flooring Calculator | Calculator Hub",

    description:
      "Estimate flooring area and flooring cost instantly.",

    url:
      "https://calculator-hub-murex.vercel.app/flooring-calculator",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flooring Calculator",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Flooring Calculator | Calculator Hub",

    description:
      "Calculate flooring area and cost instantly.",

    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-black">
          Flooring Calculator
        </h1>

        <p className="mb-8 text-gray-600">
          Estimate flooring area and total
          flooring cost instantly for your
          construction or renovation project.
        </p>

        <FlooringCalculatorClient />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-black">
            Flooring Cost Formula
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Flooring cost is calculated by
            finding the floor area and
            multiplying it by the flooring
            cost per square foot.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-100 p-6">
            <p className="text-2xl font-bold text-black">
              Area = Length × Width
            </p>

            <p className="mt-3 text-2xl font-bold text-black">
              Cost = Area × Cost Per Sq Ft
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-black p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            How To Use This Flooring Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-300">
            <p>
              1. Enter room length.
            </p>

            <p>
              2. Enter room width.
            </p>

            <p>
              3. Enter flooring cost per
              square foot.
            </p>

            <p>
              4. Click calculate to get
              flooring area and total cost.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              What is a flooring calculator?
            </h3>

            <p className="mt-3 text-gray-600">
              A flooring calculator helps
              estimate flooring area and
              flooring costs for rooms and
              buildings.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Can I use it for tiles?
            </h3>

            <p className="mt-3 text-gray-600">
              Yes, it can be used for tile,
              marble, vinyl, laminate, and
              wooden flooring projects.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 text-gray-600">
              Yes, all calculators on
              Calculator Hub are completely
              free to use.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}