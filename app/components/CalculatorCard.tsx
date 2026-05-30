import Link from "next/link";

interface CalculatorCardProps {
  title: string;
  description: string;
  link: string;
}

export default function CalculatorCard({
  title,
  description,
  link,
}: CalculatorCardProps) {
  return (
    <div className="group rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-7 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-100">

      {/* Top Gradient Line */}
      <div className="mb-6 h-2 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

      <h2 className="text-2xl font-extrabold text-black transition group-hover:text-orange-500">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <Link
        href={link}
        className="mt-6 inline-flex items-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        Open Calculator →
      </Link>
    </div>
  );
}