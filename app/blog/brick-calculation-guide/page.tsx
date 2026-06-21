import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title:
    "Brick Calculation Guide: How Many Bricks Do You Need? | CalHub",

  description:
    "Learn how to calculate the number of bricks required for walls and construction projects with formulas, examples, brick sizes, and practical tips.",

  alternates: {
    canonical:
      "https://calhub.in/blog/brick-calculation-guide",
  },
};

export default function BrickCalculationGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          How Many Bricks Do I Need?
          Complete Brick Calculation Guide
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Calculating the correct number of bricks is one of the
          most important steps before starting any construction
          project. Whether you are building a boundary wall,
          room partition, house wall, or commercial structure,
          accurate brick estimation helps reduce waste and save
          money.
        </p>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Brick Calculation Formula
          </h2>

          <p className="mt-4 text-gray-600">
            The basic formula used to estimate bricks is:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="text-xl font-semibold text-orange-600">
              Number of Bricks = Wall Area ÷ Brick Face Area
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            Builders generally add 5% to 10% extra bricks to
            cover cutting, breakage, and wastage during
            construction.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Example Brick Calculation
          </h2>

          <p className="mt-4 text-gray-600">
            Suppose a wall is:
          </p>

          <ul className="mt-4 list-disc pl-6 text-gray-600">
            <li>Length = 20 ft</li>
            <li>Height = 10 ft</li>
            <li>Wall Area = 200 sq ft</li>
          </ul>

          <p className="mt-4 text-gray-600">
            If one brick covers approximately 0.145 sq ft:
          </p>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="font-semibold text-orange-600">
              Bricks Required = 200 ÷ 0.145
            </p>

            <p className="mt-2 font-semibold text-orange-600">
              ≈ 1,379 Bricks
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            Add 10% extra for wastage:
          </p>

          <p className="mt-2 font-semibold text-black">
            Total ≈ 1,517 Bricks
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Standard Brick Sizes
          </h2>

          <p className="mt-4 text-gray-600">
            Brick sizes vary by country and manufacturer.
            Common sizes include:
          </p>

          <ul className="mt-6 list-disc pl-6 text-gray-600">
            <li>India: 190 mm × 90 mm × 90 mm</li>
            <li>Modular Brick: 194 mm × 92 mm × 57 mm</li>
            <li>US Standard Brick: 203 mm × 92 mm × 57 mm</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Always confirm actual brick dimensions before
            estimating materials.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Why Accurate Brick Estimation Matters
          </h2>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-3">
            <li>Reduces material wastage</li>
            <li>Improves project budgeting</li>
            <li>Prevents construction delays</li>
            <li>Helps estimate mortar requirements</li>
            <li>Improves construction planning</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Common Mistakes
          </h2>

          <ul className="mt-6 list-disc pl-6 text-gray-600 space-y-3">
            <li>Ignoring mortar thickness</li>
            <li>Using incorrect brick dimensions</li>
            <li>Not adding wastage allowance</li>
            <li>Using mixed measurement units</li>
          </ul>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Use Our Brick Calculator
          </h2>

          <p className="mt-4 text-gray-600">
            Instead of calculating manually, use our free
            online brick calculator to estimate bricks
            instantly.
          </p>

          <a
            href="/brick-calculator"
            className="mt-6 inline-block rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white"
          >
            Open Brick Calculator
          </a>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-black">
                How many bricks are needed for a 10×10 wall?
              </h3>

              <p className="mt-2 text-gray-600">
                The exact number depends on wall thickness,
                brick size, and mortar joints.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Should I add extra bricks?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. Builders usually add 5%–10% extra for
                breakage and cutting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black">
                Is this guide suitable for house construction?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. The formula is commonly used for
                residential and commercial projects.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}