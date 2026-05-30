import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Calculator Hub",
  description:
    "Read the Privacy Policy of Calculator Hub to understand how we collect, use, and protect user information while providing free online construction calculators.",
  keywords: [
    "privacy policy",
    "calculator hub privacy",
    "construction calculator privacy",
    "website privacy policy",
    "user privacy",
    "data protection",
  ],
  alternates: {
    canonical:
      "https://calculator-hub-murex.vercel.app/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Calculator Hub",
    description:
      "Learn how Calculator Hub collects, uses, and protects information.",
    url: "https://calculator-hub-murex.vercel.app/privacy-policy",
    siteName: "Calculator Hub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Calculator Hub",
    description:
      "Learn how Calculator Hub collects, uses, and protects information.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Privacy Policy
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Calculator Hub respects your privacy and is committed to
            protecting your information. This Privacy Policy explains
            how information may be collected, used, and safeguarded
            when you use our website and construction calculators.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Information Collection
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may collect non-personal information such as browser
            type, device information, operating system, referring
            pages, and general usage statistics to improve website
            functionality and user experience.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Cookies
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Our website may use cookies and similar technologies to
            enhance user experience, remember preferences, and analyze
            website traffic. You may disable cookies through your
            browser settings if desired.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may use trusted third-party services such as analytics,
            advertising, and performance monitoring tools. These
            providers may collect information in accordance with their
            own privacy policies.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Data Security
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We take reasonable measures to protect information and
            maintain website security. However, no internet
            transmission or electronic storage system can be guaranteed
            to be completely secure.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Changes to This Policy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may update this Privacy Policy from time to time. Any
            changes will be posted on this page along with the updated
            policy information.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Contact Us
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If you have any questions regarding this Privacy Policy,
            please contact us through our Contact page.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}