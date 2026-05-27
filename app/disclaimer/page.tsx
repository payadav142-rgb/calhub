import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Disclaimer
        </h1>

        <p className="mt-6 text-gray-600">
          Calculator Hub provides estimation tools
          for informational purposes only.
        </p>

        <p className="mt-4 text-gray-600">
          Please verify calculations with
          professionals before making construction
          decisions.
        </p>
      </section>

      <Footer />
    </main>
  );
}