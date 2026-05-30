import type { Metadata } from "next";
import UnitConverterClient from "./UnitConverterClient";

export const metadata: Metadata = {
  title: "Unit Converter | Calculator Hub",
  description:
    "Convert meters to feet instantly with our free construction unit converter.",
  keywords: [
    "unit converter",
    "meters to feet",
    "construction converter",
    "measurement converter",
    "engineering converter",
  ],
};

export default function Page() {
  return <UnitConverterClient />;
}