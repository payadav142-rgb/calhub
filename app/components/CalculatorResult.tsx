type Props = {
  title: string;
  result: string;
};

export default function CalculatorResult({
  title,
  result,
}: Props) {
  return (
    <div className="mt-6 rounded-xl bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-black">
        {title}: {result}
      </h2>
    </div>
  );
}