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

  verification: {
    google:
      "c2E0Y9rYTzrEi_aYV43C725aFKUMCcaoyREP1or5amo",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Calculator Hub",
      url: "https://calculator-hub-murex.vercel.app",
      logo:
        "https://calculator-hub-murex.vercel.app/og-image.jpg",
    },
    {
      "@type": "WebSite",
      name: "Calculator Hub",
      url: "https://calculator-hub-murex.vercel.app",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://calculator-hub-murex.vercel.app/?q={search_term_string}",
        "query-input":
          "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              structuredData
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}