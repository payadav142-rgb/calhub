import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "About CalHub | Free Construction Calculators & Building Tools",

  description:
    "Learn about CalHub, a free online platform offering construction calculators for builders, contractors, engineers, architects, and homeowners. Estimate materials, costs, quantities, and measurements instantly.",

  keywords: [
    "about calhub",
    "calhub",
    "construction calculators",
    "building calculators",
    "construction estimation tools",
    "free construction calculators",
    "online building tools",
    "material estimation calculator",
    "contractor tools",
    "builder calculators",
  ],

  alternates: {
    canonical: "https://calhub.in/about",
  },

  openGraph: {
    title:
      "About CalHub | Free Construction Calculators",

    description:
      "CalHub provides free construction calculators for cement, concrete, bricks, steel, paint, roofing, flooring, plaster, sand, and more.",

    url: "https://calhub.in/about",

    siteName: "CalHub",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About CalHub | Free Construction Calculators",

    description:
      "Professional construction calculators and estimation tools for builders, engineers, contractors, and homeowners.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            About CalHub
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            CalHub is a free online platform
            designed to provide accurate and
            easy-to-use construction calculators
            for builders, contractors, engineers,
            architects, students, and homeowners.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to simplify
            construction planning by helping
            users estimate materials, costs,
            quantities, and measurements quickly
            and accurately. Whether you are
            building a house, renovating a room,
            planning a driveway, or managing a
            large construction project, CalHub
            provides tools that save time and
            reduce calculation errors.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a growing collection of
            calculators including concrete
            calculators, cement calculators,
            brick calculators, paint calculators,
            flooring calculators, roofing
            calculators, plaster calculators,
            steel weight calculators, excavation
            calculators, sand calculators, gravel
            calculators, tile calculators, and
            many more.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every calculator on CalHub is
            completely free, mobile-friendly,
            fast, and designed to deliver
            reliable estimates for real-world
            construction projects.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white">
              <h2 className="text-4xl font-extrabold">
                19+
              </h2>

              <p className="mt-3 text-orange-100">
                Construction Calculators
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-4xl font-extrabold text-black">
                100%
              </h2>

              <p className="mt-3 text-gray-600">
                Free To Use
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white">
              <h2 className="text-4xl font-extrabold">
                24/7
              </h2>

              <p className="mt-3 text-orange-100">
                Available Online
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}