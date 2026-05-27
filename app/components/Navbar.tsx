import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-6 py-4">
      <Link
        href="/"
        className="text-2xl font-bold text-black"
      >
        Calculator Hub
      </Link>

      <div className="flex gap-6 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/brick-calculator">
          Calculators
        </Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}