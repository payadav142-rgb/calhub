import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";

import DrywallCalculatorClient from "./DrywallCalculatorClient";

export const metadata: Metadata = {
  title:
    "Drywall Calculator | Calculator Hub",

  description:
    "Calculate drywall sheets required for walls and ceilings instantly.",

  alternates: {
    canonical: "/drywall-calculator",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">

      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Drywall Calculator
        </h1>

        <p className="mt-4 text-gray-600">
          Calculate drywall sheets required for
          walls and ceiling construction projects.
        </p>

        <div className="mt-8">
          <DrywallCalculatorClient />
        </div>
      </section>

      {/* Formula */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">

          <h2 className="text-3xl font-bold text-black">
            Drywall Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Drywall sheet estimation is calculated
            by dividing total wall area by drywall
            sheet coverage area.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">

            <p className="text-2xl font-bold text-black">
              Drywall Sheets =
              Wall Area ÷ Sheet Area
            </p>

          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps contractors,
            builders, and homeowners estimate
            drywall sheets for construction and
            renovation projects.
          </p>

        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            How To Use This Drywall Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg">

            <p>
              1. Enter wall length in feet.
            </p>

            <p>
              2. Enter wall height in feet.
            </p>

            <p>
              3. Enter drywall sheet coverage area.
            </p>

            <p>
              4. Click calculate to estimate
              drywall sheets instantly.
            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">

        <h2 className="text-4xl font-extrabold text-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">

            <h3 className="text-2xl font-bold text-black">
              What is a drywall calculator?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A drywall calculator estimates the
              number of drywall sheets needed.
            </p>

          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg">

            <h3 className="text-2xl font-bold text-black">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub provides free
              construction calculators.
            </p>

          </div>

        </div>

      </section>

      <RelatedCalculators />

      <Footer />

    </main>
  );
}