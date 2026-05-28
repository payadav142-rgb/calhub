import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            Calculator Hub is a free online
            platform providing professional
            construction calculators for builders,
            engineers, contractors, and
            homeowners.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to make construction
            calculations fast, simple, and
            accessible for everyone.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide calculators for bricks,
            cement, concrete, steel weight,
            plaster, sand, gravel, paint, tiles,
            and many more construction materials.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl bg-black p-8 text-white">
    <h2 className="text-4xl font-extrabold">
      9+
    </h2>

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
    <h2 className="text-4xl font-extrabold">
      24/7
    </h2>

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

