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
        className="w-full rounded-xl border p-3"
        placeholder={placeholder}
      />
    </div>
  );
}