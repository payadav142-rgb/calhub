import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Calculator Hub - Free Construction Calculators",

  description:
    "Free online construction calculators for bricks, cement, concrete, plaster, paint, tiles, steel weight, sand and gravel estimation.",

  keywords: [
    "construction calculator",
    "brick calculator",
    "cement calculator",
    "concrete calculator",
    "steel weight calculator",
    "plaster calculator",
  ],

  openGraph: {
    title:
      "Calculator Hub - Free Construction Calculators",

    description:
      "Free online construction calculators for builders, contractors and engineers.",

    url: "https://calculator-hub-murex.vercel.app/",

    siteName: "Calculator Hub",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://calculator-hub-murex.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculator Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Calculator Hub - Free Construction Calculators",

    description:
      "Free online construction calculators.",

    images: [
      "https://calculator-hub-murex.vercel.app/og-image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="wA8HV4Y7ch5wdp2uwV5UPt7W1iLepkqanS0r6LBw9hc"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}