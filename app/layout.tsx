import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calculator Hub - Free Construction Calculators",
  description:
    "Free online construction calculators for bricks, cement, concrete, steel weight, paint, tiles, plaster, excavation, roofing and more.",
  metadataBase: new URL("https://calhub.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adsense auto ads will work without script injection */}
        <meta name="google-adsense-account" content="ca-pub-9673900751625361" />
      </head>

      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}