import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | CalHub",
  description:
    "Read the Terms & Conditions governing the use of CalHub and its free online construction calculators, estimation tools, and resources.",
  keywords: [
    "terms and conditions",
    "calhub terms",
    "construction calculator terms",
    "website terms",
    "calculator usage policy",
    "construction tools terms",
    "online calculator terms",
  ],
  alternates: {
    canonical:
      "https://calhub.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | CalHub",
    description:
      "Terms governing the use of CalHub and its construction calculators.",
    url:
      "https://calhub.in/terms-and-conditions",
    siteName: "CalHub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | CalHub",
    description:
      "Terms governing the use of CalHub and its construction calculators.",
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
            By accessing and using CalHub,
            you agree to comply with these
            Terms & Conditions. If you do not
            agree with any part of these terms,
            please discontinue use of our
            website and services.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use of Website
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            CalHub provides free online
            construction calculators,
            estimation tools, and educational
            resources. These tools are intended
            for informational purposes only and
            should not replace professional
            engineering, architectural, or
            construction advice.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy of Calculations
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            While we strive to provide accurate
            and reliable calculations, we do
            not guarantee the completeness,
            accuracy, or suitability of any
            results. Users are responsible for
            verifying all calculations before
            applying them to real-world
            projects.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            User Responsibility
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Users are solely responsible for
            any decisions, actions, or project
            outcomes resulting from the use of
            information available on CalHub.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            CalHub shall not be liable for any
            direct, indirect, incidental, or
            consequential damages arising from
            the use of this website, its
            calculators, or any related
            content.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Intellectual Property
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            All content, branding, text,
            graphics, calculators, and design
            elements available on CalHub are
            protected under applicable
            intellectual property laws unless
            otherwise stated.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Third-Party Links
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Our website may contain links to
            third-party websites. We are not
            responsible for the content,
            privacy practices, or policies of
            external websites.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Modifications to Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We reserve the right to update,
            modify, or replace these Terms &
            Conditions at any time. Continued
            use of the website after changes
            are published constitutes
            acceptance of the revised terms.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Contact Information
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            For questions regarding these
            Terms & Conditions, please contact
            us at support@calhub.in.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}