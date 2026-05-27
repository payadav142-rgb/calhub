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
    <div className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-black">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <Link href={link}>
        <button className="mt-4 rounded-xl bg-black px-4 py-2 text-white transition hover:scale-105 hover:bg-gray-800">
          Open Calculator
        </button>
      </Link>
    </div>
  );
}