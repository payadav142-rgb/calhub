type Props = {
  title: string;
  result: string;
};

export default function CalculatorResult({
  title,
  result,
}: Props) {
  return (
    <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-inner">
      <h2 className="text-2xl font-bold text-black">
        {title}: {result}
      </h2>
    </div>
  );
}