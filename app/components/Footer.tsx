"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">

        {/* Brand */}
        <div className="max-w-md">
          <h2 className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-3xl font-extrabold text-transparent">
            CalHub
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Free online construction calculators
            for builders, contractors, engineers,
            and homeowners.
          </p>

          <p className="mt-4 text-gray-600">
            Contact:{" "}
            <a
              href="mailto:support@calhub.in"
              className="text-orange-500 hover:underline"
            >
              support@calhub.in
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Navigation
            </h3>

            <Link
              href="/"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-600 transition hover:text-orange-500"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Contact
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Legal
            </h3>

            <Link
              href="/privacy-policy"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Disclaimer
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Features
            </h3>

            <Link
              href="/brick-calculator"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Brick Calculator
            </Link>

            <Link
              href="/cement-calculator"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Cement Calculator
            </Link>

            <Link
              href="/steel-weight-calculator"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Steel Weight Calculator
            </Link>

            <Link
              href="/concrete-calculator"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Concrete Calculator
            </Link>

            <Link
              href="/paint-calculator"
              className="text-gray-600 transition hover:text-orange-500"
            >
              Paint Calculator
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-orange-100 py-5 text-center text-sm text-gray-500">
        © 2026 CalHub. All rights reserved.
      </div>
    </footer>
  );
}