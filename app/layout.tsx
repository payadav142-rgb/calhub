import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "CalHub - Free Construction Calculators",
  description:
    "Free online construction calculators for bricks, cement, concrete, steel weight, paint, tiles, plaster, excavation and more.",
  keywords: [
    "construction calculator",
    "brick calculator",
    "cement calculator",
    "steel weight calculator",
    "calhub",
  ],
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
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* OPTIONAL: structured data safe */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CalHub",
              url: "https://calhub.in",
            }),
          }}
        />
      </head>

      <body>

        {/* ✅ ADSENSE SCRIPT (CORRECT WAY - NO ERROR) */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9673900751625361"
          crossOrigin="anonymous"
        />

        {children}

      </body>
    </html>
  );
}