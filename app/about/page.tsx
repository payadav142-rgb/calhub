import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Calculator Hub",
  description:
    "Learn more about Calculator Hub, a free online platform offering professional construction calculators for builders, contractors, engineers, and homeowners.",
  keywords: [
    "about calculator hub",
    "construction calculators",
    "building calculators",
    "free construction tools",
    "online calculators",
    "construction estimation tools",
  ],
  alternates: {
    canonical: "https://calculator-hub-murex.vercel.app/about",
  },
  openGraph: {
    title: "About Us | Calculator Hub",
    description:
      "Professional builder tools and construction calculators for accurate material estimation.",
    url: "https://calculator-hub-murex.vercel.app/about",
    siteName: "Calculator Hub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Calculator Hub",
    description:
      "Professional builder tools and construction calculators.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            About Calculator Hub
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Calculator Hub is a free online platform providing professional
            construction calculators for builders, engineers, contractors, and
            homeowners.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to make construction calculations fast, simple, and
            accessible for everyone. Whether you are planning a small home
            renovation or managing a large construction project, our tools help
            you estimate materials quickly and accurately.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide calculators for bricks, cement, concrete, steel weight,
            plaster, sand, gravel, paint, tiles, roofing, flooring, excavation,
            and many other construction-related calculations.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every calculator is designed to be simple, mobile-friendly, and
            completely free to use. Our goal is to save time, reduce errors,
            and help users make better construction decisions.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-black p-8 text-white">
              <h2 className="text-4xl font-extrabold">19+</h2>

              <p className="mt-3 text-gray-300">
                Construction Calculators
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-8">
              <h2 className="text-4xl font-extrabold text-black">
                100%
              </h2>

              <p className="mt-3 text-gray-600">
                Free To Use
              </p>
            </div>

            <div className="rounded-2xl bg-black p-8 text-white">
              <h2 className="text-4xl font-extrabold">24/7</h2>

              <p className="mt-3 text-gray-300">
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