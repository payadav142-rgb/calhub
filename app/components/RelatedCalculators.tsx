import Link from "next/link";
const calculators = [
  { name: "Area Calculator", href: "/area-calculator" },
  { name: "Asphalt Calculator", href: "/asphalt-calculator" },
  { name: "Brick Calculator", href: "/brick-calculator" },
  { name: "Cement Calculator", href: "/cement-calculator" },
  { name: "Concrete Calculator", href: "/concrete-calculator" },
  {
    name: "Construction Cost Calculator",
    href: "/construction-cost-calculator",
  },
  { name: "Drywall Calculator", href: "/drywall-calculator" },
  { name: "Excavation Calculator", href: "/excavation-calculator" },
  { name: "Flooring Calculator", href: "/flooring-calculator" },
  { name: "Gravel Calculator", href: "/gravel-calculator" },
  { name: "Paint Calculator", href: "/paint-calculator" },
  { name: "Paver Calculator", href: "/paver-calculator" },
  { name: "Plaster Calculator", href: "/plaster-calculator" },
  { name: "Roofing Calculator", href: "/roofing-calculator" },
  { name: "Sand Calculator", href: "/sand-calculator" },
  { name: "Stair Calculator", href: "/stair-calculator" },
  {
    name: "Steel Weight Calculator",
    href: "/steel-weight-calculator",
  },
  { name: "Tile Calculator", href: "/tile-calculator" },
  { name: "Unit Converter", href: "/unit-converter" },
];

export default function RelatedCalculators() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <h2 className="text-4xl font-extrabold text-black">
        Related Calculators
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {calculators.map((calculator) => (
          <Link
            key={calculator.href}
            href={calculator.href}
            className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-xl transition hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-black">
              {calculator.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}