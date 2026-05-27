import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          About Calculator Hub
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Calculator Hub provides free online
          construction calculators for builders,
          contractors, engineers, and homeowners.
        </p>

        <p className="mt-4 text-lg text-gray-600">
          Our goal is to make construction
          calculations simple, fast, and accessible
          for everyone.
        </p>
      </section>

      <Footer />
    </main>
  );
}