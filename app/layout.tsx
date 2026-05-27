import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Calculator Hub - Free Construction Calculators",
    
  description:
    "Free online construction calculators for bricks, cement, concrete, steel weight, paint, tiles, plaster, excavation, roofing, flooring, asphalt, drywall, stairs, and more.",

  keywords: [
    "construction calculator",
    "brick calculator",
    "cement calculator",
    "concrete calculator",
    "paint calculator",
    "tile calculator",
    "steel weight calculator",
    "roofing calculator",
    "excavation calculator",
    "drywall calculator",
    "construction tools",
    "online calculators",
  ],

  authors: [
    {
      name: "Calculator Hub",
    },
  ],

  creator: "Calculator Hub",

  publisher: "Calculator Hub",

  metadataBase: new URL(
    "https://calculator-hub-murex.vercel.app"
  ),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Calculator Hub - Free Construction Calculators",

    description:
      "Professional online construction calculators for builders, engineers, contractors, and homeowners.",

    url:
      "https://calculator-hub-murex.vercel.app",

    siteName: "Calculator Hub",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculator Hub",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Calculator Hub - Free Construction Calculators",

    description:
      "Professional online calculators for construction projects.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}