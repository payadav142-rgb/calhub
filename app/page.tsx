import Footer from "./components/Footer";
import Link from "next/link";
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
          <div
            key={calculator.title}
            className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-black">
              {calculator.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {calculator.description}
            </p>

       <Link href={calculator.link}>
  <button className="mt-4 rounded-xl bg-black px-4 py-2 text-white transition hover:bg-gray-800 hover:scale-105">
    Open Calculator
  </button>
</Link>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
<section className="px-6 pb-20">
  <div className="rounded-2xl bg-white p-8 shadow-md">
    <h2 className="text-3xl font-bold text-black">
      About Calculator Hub
    </h2>

    <p className="mt-4 text-gray-600">
      Calculator Hub provides free and easy-to-use
      construction calculators for builders,
      contractors, engineers, and homeowners.
      Calculate bricks, cement, concrete, paint,
      tiles, and more instantly.
    </p>
  </div>
</section>