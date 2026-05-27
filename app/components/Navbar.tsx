"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="cursor-pointer text-2xl font-extrabold tracking-tight text-black transition hover:opacity-80 md:text-3xl">
            Calculator Hub
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-lg font-medium text-gray-700 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-lg font-medium text-gray-700 transition hover:text-black"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-lg font-medium text-gray-700 transition hover:text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}