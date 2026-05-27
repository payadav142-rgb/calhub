import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        
        {/* Brand */}
        <div className="max-w-md">
          <h2 className="text-3xl font-extrabold text-black">
            Calculator Hub
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Free online construction calculators
            for builders, contractors, engineers,
            and homeowners.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Navigation
            </h3>

            <Link
              href="/"
              className="text-gray-600 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-600 transition hover:text-black"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 transition hover:text-black"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Legal
            </h3>

            <Link
              href="/privacy-policy"
              className="text-gray-600 transition hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-gray-600 transition hover:text-black"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="text-gray-600 transition hover:text-black"
            >
              Disclaimer
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-black">
              Features
            </h3>

            <p className="text-gray-600">
              Brick Calculator
            </p>

            <p className="text-gray-600">
              Cement Calculator
            </p>

            <p className="text-gray-600">
              Steel Weight Calculator
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
        © 2026 Calculator Hub. All rights reserved.
      </div>
    </footer>
  );
}