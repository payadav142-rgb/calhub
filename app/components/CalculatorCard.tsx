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
    <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-black">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      <Link
        href={link}
        className="mt-6 inline-block rounded-2xl bg-black px-6 py-3 text-white transition duration-300 hover:scale-105 hover:bg-gray-800"
      >
        Open Calculator
      </Link>
    </div>
  );
}