import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Calculator Hub",
  description:
    "Read the Terms & Conditions for using Calculator Hub and its free online construction calculators.",
  keywords: [
    "terms and conditions",
    "calculator hub terms",
    "construction calculator terms",
    "website terms",
    "calculator usage policy",
  ],
  alternates: {
    canonical:
      "https://calculator-hub-murex.vercel.app/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Calculator Hub",
    description:
      "Terms governing the use of Calculator Hub and its construction calculators.",
    url: "https://calculator-hub-murex.vercel.app/terms-and-conditions",
    siteName: "Calculator Hub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Calculator Hub",
    description:
      "Terms governing the use of Calculator Hub and its construction calculators.",
    images: ["/og-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Terms & Conditions
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            By accessing and using Calculator Hub, you agree to
            comply with the following Terms & Conditions. If you do
            not agree with any part of these terms, please do not use
            our website.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use of Website
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Calculator Hub provides free online construction
            calculators and estimation tools for informational
            purposes only. Users are responsible for verifying all
            calculations before applying them to real-world projects.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy of Information
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            While we strive to provide accurate and reliable
            calculations, we do not guarantee the completeness,
            accuracy, or suitability of any results. Professional
            consultation is recommended for important construction
            decisions.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Calculator Hub shall not be held liable for any losses,
            damages, delays, costs, or construction issues resulting
            from the use of information or calculations provided on
            this website.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Intellectual Property
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            All content, branding, text, design elements, and tools
            on Calculator Hub are protected by applicable copyright
            and intellectual property laws unless otherwise stated.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Changes to Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We reserve the right to update, modify, or replace these
            Terms & Conditions at any time without prior notice.
            Continued use of the website after changes constitutes
            acceptance of the updated terms.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}