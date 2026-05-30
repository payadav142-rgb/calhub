"use client";
import Link from "next/link";
import { useState } from "react";
import CalculatorCard from "./components/CalculatorCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const calculators = [
  { title: "Brick Calculator", description: "Calculate number of bricks required.", link: "/brick-calculator" },
  { title: "Cement Calculator", description: "Estimate cement quantity easily.", link: "/cement-calculator" },
  { title: "Concrete Calculator", description: "Calculate concrete volume quickly.", link: "/concrete-calculator" },
  { title: "Paint Calculator", description: "Estimate paint required for walls.", link: "/paint-calculator" },
  { title: "Tile Calculator", description: "Calculate tiles needed for flooring.", link: "/tile-calculator" },
  { title: "Steel Weight Calculator", description: "Calculate steel bar weight easily.", link: "/steel-weight-calculator" },
  { title: "Sand Calculator", description: "Calculate sand quantity easily.", link: "/sand-calculator" },
  { title: "Gravel Calculator", description: "Calculate gravel quantity easily.", link: "/gravel-calculator" },
  { title: "Plaster Calculator", description: "Calculate plaster quantity easily.", link: "/plaster-calculator" },
  { title: "Construction Cost Calculator", description: "Estimate total building cost easily.", link: "/construction-cost-calculator" },
  { title: "Area Calculator", description: "Calculate total area instantly.", link: "/area-calculator" },
  { title: "Flooring Calculator", description: "Estimate flooring area and cost easily.", link: "/flooring-calculator" },
  { title: "Roofing Calculator", description: "Estimate roofing area and roofing cost.", link: "/roofing-calculator" },
  { title: "Excavation Calculator", description: "Calculate excavation volume easily.", link: "/excavation-calculator" },
  { title: "Paver Calculator", description: "Calculate pavers needed instantly.", link: "/paver-calculator" },
  { title: "Asphalt Calculator", description: "Estimate asphalt quantity easily.", link: "/asphalt-calculator" },
  { title: "Drywall Calculator", description: "Calculate drywall sheets required.", link: "/drywall-calculator" },
  { title: "Stair Calculator", description: "Calculate number of stairs easily.", link: "/stair-calculator" },
  { title: "Unit Converter", description: "Convert construction units instantly.", link: "/unit-converter" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredCalculators = calculators.filter(calculator =>
    calculator.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-white to-amber-100 px-6 py-28 text-center">
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Free Construction Calculators
          </span>
          <br />
          for Builders & Engineers
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-8 text-gray-600">
          Calculate bricks, cement, concrete, plaster, steel weight, sand, gravel, paint, tiles, and more instantly with our professional construction tools.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => {
              setSearch("");
              document.getElementById("calculators")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-2xl bg-amber-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-amber-600"
          >
            Explore Calculators
          </button>
          <Link
            href="/about"
            className="rounded-2xl border border-black px-8 py-4 text-lg text-black transition hover:bg-black hover:text-white"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <input
            type="text"
            placeholder="Search calculators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 text-lg shadow-xl outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section id="calculators" className="px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-orange-600 to-amber-500 p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold">Professional Construction Tools</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-100">
            Use our free online construction calculators to estimate materials quickly and accurately. Designed for builders, engineers, contractors, and homeowners.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {["Brick Calculation","Cement Estimation","Steel Weight","Concrete Volume","Paint Area"].map(tag => (
              <span key={tag} className="rounded-full bg-gradient-to-br from-orange-50 via-white to-amber-50/10 px-5 py-3 text-sm">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20">
        <h2 className="text-center text-4xl font-extrabold text-black">Trusted by Builders & Engineers</h2>
        <p className="mt-4 text-center text-lg text-gray-600">Professionals use Calculator Hub for fast and reliable construction calculations.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Rajesh Kumar", role: "Civil Contractor", text: "Very useful calculators for quick construction estimates. Clean and easy to use." },
            { name: "Amit Sharma", role: "Site Engineer", text: "The steel and cement calculators saved a lot of my time on-site." },
            { name: "Vikram Patel", role: "Builder", text: "Professional UI and very easy to use even on mobile devices." }
          ].map((t) => (
            <div
  key={t.name}
  className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
              <p className="leading-7 text-gray-600">{t.text}</p>
              <h3 className="mt-6 text-xl font-bold text-black">{t.name}</h3>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCalculators.length > 0 ? (
            filteredCalculators.map((calculator) => (
              <CalculatorCard key={calculator.title} {...calculator} />
            ))
          ) : (
            <div className="col-span-full text-center text-2xl font-semibold text-gray-500">
              No calculators found.
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 p-10 text-center text-white shadow-xl">
            <h2 className="text-5xl font-extrabold">19+</h2>
            <p className="mt-3 text-lg text-gray-100">Construction Calculators</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 border-2 border-orange-200 p-10 text-center shadow-xl">
            <h2 className="text-5xl font-extrabold text-black">100%</h2>
            <p className="mt-3 text-lg text-gray-600">Free To Use</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 p-10 text-center text-white shadow-xl">
            <h2 className="text-5xl font-extrabold">24/7</h2>
            <p className="mt-3 text-lg text-gray-100">Available Online</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-black">About Calculator Hub</h2>
          <p className="mt-4 text-gray-600">Calculator Hub provides free and easy-to-use construction calculators for builders, contractors, engineers, and homeowners. Calculate bricks, cement, concrete, paint, tiles, and more instantly.</p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h2 className="text-4xl font-extrabold text-black">Free Online Construction Calculators</h2>
          <p className="mt-6 leading-8 text-gray-600">
            Calculator Hub provides professional construction calculators for builders, engineers, contractors, architects, and homeowners. Easily calculate bricks, cement, concrete, plaster, paint, steel weight, sand, gravel, and tile quantity instantly.
          </p>
          <p className="mt-6 leading-8 text-gray-600">
            Our calculators are designed to save time, improve estimation accuracy, and simplify construction planning for residential and commercial projects.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-20">
        <h2 className="text-center text-4xl font-extrabold text-black">Frequently Asked Questions</h2>
        <div className="mx-auto mt-12 max-w-4xl space-y-6">
          {[
            { q: "Are these construction calculators free?", a: "Yes, all construction calculators on Calculator Hub are completely free to use." },
            { q: "Who can use these calculators?", a: "Builders, contractors, engineers, architects, students, and homeowners can use our calculators." },
            { q: "Which construction calculations are available?", a: "Brick, cement, concrete, paint, plaster, tile, steel weight, sand, and gravel calculators are currently available." }
          ].map((item) => (
            <div
  key={item.q}
  className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
              <h3 className="text-2xl font-bold text-black">{item.q}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}