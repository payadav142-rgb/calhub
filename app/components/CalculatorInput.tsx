type Props = {
  label: string;
  value: string;
  setValue: React.Dispatch<
    React.SetStateAction<string>
  >;
  placeholder: string;
};

export default function CalculatorInput({
  label,
  value,
  setValue,
  placeholder,
}: Props) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-black">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        className="w-full rounded-2xl border border-orange-200 p-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
        placeholder={placeholder}
      />
    </div>
  );
}