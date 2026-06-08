import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Calculator Hub",
  description:
    "Read the Calculator Hub disclaimer regarding the use of our free online construction calculators and estimation tools.",
  keywords: [
    "disclaimer",
    "calculator hub disclaimer",
    "construction calculator disclaimer",
    "estimation tools disclaimer",
    "website disclaimer",
  ],
  alternates: {
    canonical:
      "https://calhub.in/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | Calculator Hub",
    description:
      "Important information regarding the use of Calculator Hub and its construction calculators.",
    url: "https://calhub.in/disclaimer",
    siteName: "Calculator Hub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Calculator Hub",
    description:
      "Important information regarding the use of Calculator Hub and its construction calculators.",
    images: ["/og-image.jpg"],
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Disclaimer
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            The information, calculations, and tools provided on
            Calculator Hub are intended for general informational and
            estimation purposes only. While we strive to provide
            accurate and reliable calculations, results should always
            be independently verified before being used in real-world
            construction projects.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            No Professional Advice
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            The content and calculators available on this website do
            not constitute professional engineering, architectural,
            financial, legal, or construction advice. Users should
            consult qualified professionals when making important
            project decisions.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy of Calculations
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Although every effort is made to ensure calculation
            accuracy, Calculator Hub does not guarantee that all
            formulas, results, or estimations are free from errors or
            suitable for every project scenario.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use at Your Own Risk
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Users assume full responsibility for the use of any
            information obtained from this website. Calculator Hub
            shall not be held liable for any losses, damages, delays,
            cost overruns, or construction issues resulting from the
            use of our calculators or content.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            External Links
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Our website may contain links to third-party websites for
            additional information. We do not control or guarantee the
            accuracy, relevance, or reliability of content on external
            websites.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Updates
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            This disclaimer may be updated periodically without prior
            notice. Continued use of Calculator Hub signifies
            acceptance of any revised disclaimer terms.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}