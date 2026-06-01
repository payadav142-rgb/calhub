import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "CalHub - Free Construction Calculators",
  description:
    "Free online construction calculators for bricks, cement, concrete, steel weight, paint, tiles, plaster, excavation, roofing, flooring and more.",
  keywords: [
    "construction calculator",
    "brick calculator",
    "cement calculator",
    "concrete calculator",
    "steel weight calculator",
    "calhub",
  ],
  authors: [{ name: "CalHub" }],
  creator: "CalHub",
  publisher: "CalHub",
  metadataBase: new URL("https://calhub.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CalHub - Free Construction Calculators",
    description: "Professional construction calculators online.",
    url: "https://calhub.in",
    siteName: "CalHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CalHub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalHub",
    description: "Free construction calculators",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CalHub",
  url: "https://calhub.in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* ✅ ADSENSE SCRIPT (FIXED) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9673900751625361"
          strategy="afterInteractive"
          crossOrigin="anonymous">
        </Script>

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {children}
      </body>
    </html>
  );
}