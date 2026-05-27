import "./globals.css";

export const metadata = {
  title: "Calculator Hub",
  description:
    "Free online construction calculators for bricks, cement, concrete, paint, tiles and more.",
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