import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CalHub - Free Construction Calculators",
  description:
    "Free online construction calculators for bricks, cement, concrete, steel, paint, tiles and more.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ AdSense Script (Correct Next.js way) */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9673900751625361"
          crossOrigin="anonymous"
        />

        {/* Optional Schema */}
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

      <body>{children}</body>
    </html>
  );
}