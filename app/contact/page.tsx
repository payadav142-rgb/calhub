import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | CalHub",
  description:
    "Contact CalHub for support, feedback, calculator suggestions, partnerships, advertising inquiries, and business opportunities. We're here to help.",
  keywords: [
    "contact calhub",
    "calhub support",
    "contact us",
    "calculator support",
    "construction calculator support",
    "business inquiries",
    "advertising inquiries",
    "calculator feedback",
  ],
  alternates: {
    canonical: "https://calhub.in/contact",
  },
  openGraph: {
    title: "Contact Us | CalHub",
    description:
      "Get in touch with CalHub for support, feedback, partnerships, and business inquiries.",
    url: "https://calhub.in/contact",
    siteName: "CalHub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | CalHub",
    description:
      "Contact CalHub for support, feedback, partnerships, and business inquiries.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Contact CalHub
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We value your feedback and are always looking for ways to improve
            CalHub. Whether you have a question, suggestion, partnership
            proposal, or need assistance using our calculators, feel free to
            reach out to us.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our goal is to provide accurate, easy-to-use construction
            calculators and estimation tools for builders, contractors,
            engineers, architects, and homeowners worldwide.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-2xl font-bold text-black">
                Email Support
              </h2>

              <p className="mt-4 text-gray-600">
                For questions, feedback, bug reports, or general support:
              </p>

              <a
                href="mailto:calculatorhubin@gmail.com"
                className="mt-3 block font-semibold text-orange-600 hover:underline"
              >
                calculatorhubin@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-2xl font-bold text-black">
                Response Time
              </h2>

              <p className="mt-4 text-gray-600">
                We typically respond within 24 hours and strive to provide
                helpful and timely assistance.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-2xl font-bold text-black">
                Business & Partnerships
              </h2>

              <p className="mt-4 text-gray-600">
                Contact us for collaborations, advertising opportunities,
                sponsorships, and strategic partnerships.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8">
              <h2 className="text-2xl font-bold text-black">
                Calculator Requests
              </h2>

              <p className="mt-4 text-gray-600">
                Need a new calculator? Send us your suggestions and we'll
                consider adding it to CalHub.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white">
            <h2 className="text-3xl font-bold">
              We're Here To Help
            </h2>

            <p className="mt-4 text-orange-100">
              Your feedback helps us improve CalHub and create better
              construction tools for everyone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}