import CalculatorCard from "./components/CalculatorCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const calculators = [
  {
    title: "Brick Calculator",
    description: "Calculate number of bricks required.",
    link: "/brick-calculator",
  },
  {
    title: "Cement Calculator",
    description: "Estimate cement quantity easily.",
    link: "/cement-calculator",
  },
  {
    title: "Concrete Calculator",
    description: "Calculate concrete volume quickly.",
    link: "/concrete-calculator",
  },
  {
    title: "Paint Calculator",
    description: "Estimate paint required for walls.",
    link: "/paint-calculator",
  },
  {
    title: "Tile Calculator",
    description: "Calculate tiles needed for flooring.",
    link: "/tile-calculator",
  },
  {
    title: "Steel Weight Calculator",
    description: "Calculate steel bar weight easily.",
    link: "/steel-weight-calculator",
  },
  {
    title: "Sand Calculator",
    description: "Calculate sand quantity easily.",
    link: "/sand-calculator",
  },
  {
    title: "Gravel Calculator",
    description: "Calculate gravel quantity easily.",
    link: "/gravel-calculator",
  },
  {
    title: "Plaster Calculator",
    description: "Calculate plaster quantity easily.",
    link: "/plaster-calculator",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="px-6 py-24 text-center bg-gradient-to-b from-gray-100 to-white">
  <h1 className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight text-black">
    Free Construction Calculators
    for Builders & Engineers
  </h1>

  <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 leading-8">
    Calculate bricks, cement, concrete,
    plaster, steel weight, sand, gravel,
    paint, tiles, and more instantly with
    our professional construction tools.
  </p>

  <div className="mt-10 flex justify-center gap-4">
    <button className="rounded-2xl bg-black px-8 py-4 text-lg text-white transition hover:scale-105 hover:bg-gray-800">
      Explore Calculators
    </button>

    <button className="rounded-2xl border border-black px-8 py-4 text-lg text-black transition hover:bg-black hover:text-white">
      Learn More
    </button>
  </div>
</section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.title}
            title={calculator.title}
            description={calculator.description}
            link={calculator.link}
          />
        ))}
      </section>
      <section className="px-6 pb-20">
  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl bg-black p-10 text-center text-white shadow-xl">
      <h2 className="text-5xl font-extrabold">
        9+
      </h2>

      <p className="mt-3 text-lg text-gray-300">
        Construction Calculators
      </p>
    </div>

    <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
      <h2 className="text-5xl font-extrabold text-black">
        100%
      </h2>

      <p className="mt-3 text-lg text-gray-600">
        Free To Use
      </p>
    </div>

    <div className="rounded-3xl bg-black p-10 text-center text-white shadow-xl">
      <h2 className="text-5xl font-extrabold">
        24/7
      </h2>

      <p className="mt-3 text-lg text-gray-300">
        Available Online
      </p>
    </div>
  </div>
</section>

      <section className="px-6 pb-20">
        <div className="rounded-2xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold text-black">
            About Calculator Hub
          </h2>

          <p className="mt-4 text-gray-600">
            Calculator Hub provides free and
            easy-to-use construction calculators
            for builders, contractors, engineers,
            and homeowners. Calculate bricks,
            cement, concrete, paint, tiles, and
            more instantly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}