import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | CalHub",
  description:
    "Get in touch with CalHub. Contact us for questions, feedback, partnerships, advertising opportunities, and support related to our calculators.",
  keywords: [
    "contact calhub",
    "calculator support",
    "contact us",
    "calhub help",
    "construction tools support",
    "business inquiries",
  ],
  alternates: {
    canonical: "https://calhub.in/contact",
  },
  openGraph: {
    title: "Contact Us | CalHub",
    description: "Contact CalHub for support, feedback, and business inquiries.",
    url: "https://calhub.in/contact",
    siteName: "CalHub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CalHub",
    description: "Contact CalHub for support, feedback, and business inquiries.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">

          <h1 className="text-5xl font-extrabold text-black">
            Contact Us
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions, suggestions, feedback, or business inquiries?
            We would love to hear from you. Our team is committed to
            improving CalHub and providing useful calculation tools for everyone.
          </p>

          <div className="mt-10 space-y-6">

            {/* EMAIL UPDATED */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h2 className="text-2xl font-bold text-black">
                Email
              </h2>

              <p className="mt-3 text-gray-600">
                <a
                  href="mailto:support@calhub.in"
                  className="text-orange-500 hover:underline"
                >
                  support@calhub.in
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h2 className="text-2xl font-bold text-black">
                Working Hours
              </h2>

              <p className="mt-3 text-gray-600">
                Monday - Saturday | 9 AM - 6 PM
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h2 className="text-2xl font-bold text-black">
                Support
              </h2>

              <p className="mt-3 text-gray-600">
                We usually respond within 24 hours and aim to provide
                quick assistance.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h2 className="text-2xl font-bold text-black">
                Business Inquiries
              </h2>

              <p className="mt-3 text-gray-600">
                Contact us for partnerships, advertising, collaborations,
                and business opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}