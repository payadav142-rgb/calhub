import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-black">
            Calculator Hub
          </h2>

          <p className="mt-2 text-gray-600">
            Free Construction Calculators for
            Builders & Engineers.
          </p>
        </div>

        <div className="flex gap-6">
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
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-gray-500">
        © 2026 Calculator Hub. All rights reserved.
      </div>
    </footer>
  );
}