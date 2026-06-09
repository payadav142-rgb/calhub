import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RelatedCalculators from "../components/RelatedCalculators";
import PlasterCalculatorClient from "./PlasterCalculatorClient";

export const metadata = {
  title: "Plaster Calculator | Calculate Plaster Volume Online",
  description:
    "Free online plaster calculator to calculate plaster volume for walls and ceilings instantly.",
};

export default function PlasterCalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Plaster Calculator
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Calculate plaster volume required
            for walls, ceilings, and construction
            projects instantly.
          </p>
        </div>

        <div className="mt-10">
          <PlasterCalculatorClient />
        </div>
      </section>

      {/* Formula Section */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Plaster Calculation Formula
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Plaster quantity is calculated using
            wall dimensions and plaster
            thickness.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <p className="text-2xl font-bold text-orange-600">
              Plaster Volume =
              Length × Height × Thickness
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-600">
            This calculator helps estimate
            plaster material required for walls,
            ceilings, and construction projects.
          </p>
        </div>
      </section>

      {/* How To Use */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            How To Use This Plaster Calculator
          </h2>

          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>1. Enter wall length.</p>

            <p>2. Enter wall height.</p>

            <p>3. Enter plaster thickness.</p>

            <p>
              4. Click calculate to estimate
              plaster volume instantly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              What is plaster volume?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Plaster volume is the total
              quantity of plaster material needed
              for covering walls or ceilings.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Can I use this for ceiling plaster?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, this calculator works for wall
              plastering and ceiling plaster
              estimation.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Is this calculator free?
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Yes, Calculator Hub offers free
              online construction calculators for
              builders and engineers.
            </p>
          </div>
        </div>
      </section>

      <RelatedCalculators />

      <Footer />
    </main>
  );
}