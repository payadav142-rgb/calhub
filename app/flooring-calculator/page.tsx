import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FlooringCalculatorClient from "./FlooringCalculatorClient";
import RelatedCalculators from "../components/RelatedCalculators";

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
      "https://calhub.in/flooring-calculator",

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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Calculator Section */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Flooring Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Estimate flooring area and total
            flooring cost instantly for your
            construction or renovation project.
          </p>
        </div>

        <div className="mt-10">
          <FlooringCalculatorClient />
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Flooring Cost Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Flooring cost is calculated by
            finding the floor area and
            multiplying it by the flooring
            cost per square foot.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Area = Length × Width
            </p>

            <p className="mt-4 text-2xl font-bold text-orange-600">
              Cost = Area × Cost Per Sq Ft
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps homeowners,
            builders, and contractors estimate
            flooring materials and project costs
            accurately.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Flooring Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              1. Enter room length in feet.
            </p>

            <p>
              2. Enter room width in feet.
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

      {/* FAQ Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              What is a flooring calculator?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A flooring calculator helps
              estimate flooring area and
              flooring costs for rooms and
              buildings.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use it for tiles?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, it can be used for tile,
              marble, vinyl, laminate, and
              wooden flooring projects.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, all calculators on
              Calculator Hub are completely
              free to use.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}