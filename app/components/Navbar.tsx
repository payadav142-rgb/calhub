"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="cursor-pointer bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent md:text-3xl">
            CalHub
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="font-medium text-gray-700 transition hover:text-orange-500">
            Home
          </Link>

          <Link href="/about" className="font-medium text-gray-700 transition hover:text-orange-500">
            About
          </Link>

          <Link href="/contact" className="font-medium text-gray-700 transition hover:text-orange-500">
            Contact
          </Link>

          <Link href="/privacy-policy" className="font-medium text-gray-700 transition hover:text-orange-500">
            Privacy
          </Link>

          <Link
            href="/about"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 font-semibold text-white transition hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 transition hover:bg-orange-50 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-orange-500">
              Home
            </Link>

            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-orange-500">
              About
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-orange-500">
              Contact
            </Link>

            <Link href="/privacy-policy" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-gray-700 hover:text-orange-500">
              Terms & Conditions
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-center font-semibold text-white"
            >
              Get Started
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}