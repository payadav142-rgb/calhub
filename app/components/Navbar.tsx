import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-black">
            Calculator Hub
          </h1>
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-medium text-gray-700 transition hover:text-black"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}