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

      <section className="px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-black">
          Calculator Hub
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Fast & Free Construction Calculators
        </p>
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