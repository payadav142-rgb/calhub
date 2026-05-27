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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight text-black">
          Free Construction Calculators
          for Builders & Engineers
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-600">
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

      {/* Search Bar */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <input
            type="text"
            placeholder="Search calculators..."
            className="w-full rounded-3xl border border-gray-200 bg-white p-5 text-lg shadow-lg outline-none transition focus:border-black"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-6 pb-20">
        <div className="rounded-3xl bg-black p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold">
            Professional Construction Tools
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            Use our free online construction
            calculators to estimate materials
            quickly and accurately. Designed for
            builders, engineers, contractors, and
            homeowners.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <span className="rounded-full bg-white/10 px-5 py-3 text-sm">
              Brick Calculation
            </span>

            <span className="rounded-full bg-white/10 px-5 py-3 text-sm">
              Cement Estimation
            </span>

            <span className="rounded-full bg-white/10 px-5 py-3 text-sm">
              Steel Weight
            </span>

            <span className="rounded-full bg-white/10 px-5 py-3 text-sm">
              Concrete Volume
            </span>

            <span className="rounded-full bg-white/10 px-5 py-3 text-sm">
              Paint Area
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pb-20">
        <h2 className="text-center text-4xl font-extrabold text-black">
          Trusted by Builders & Engineers
        </h2>

        <p className="mt-4 text-center text-lg text-gray-600">
          Professionals use Calculator Hub for
          fast and reliable construction
          calculations.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="leading-7 text-gray-600">
              “Very useful calculators for quick
              construction estimates. Clean and
              easy to use.”
            </p>

            <h3 className="mt-6 text-xl font-bold text-black">
              Rajesh Kumar
            </h3>

            <p className="text-gray-500">
              Civil Contractor
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="leading-7 text-gray-600">
              “The steel and cement calculators
              saved a lot of my time on-site.”
            </p>

            <h3 className="mt-6 text-xl font-bold text-black">
              Amit Sharma
            </h3>

            <p className="text-gray-500">
              Site Engineer
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="leading-7 text-gray-600">
              “Professional UI and very easy to
              use even on mobile devices.”
            </p>

            <h3 className="mt-6 text-xl font-bold text-black">
              Vikram Patel
            </h3>

            <p className="text-gray-500">
              Builder
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.title}
              title={calculator.title}
              description={calculator.description}
              link={calculator.link}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
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

      {/* About Section */}
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