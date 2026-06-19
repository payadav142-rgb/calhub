import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | CalHub",
  description:
    "Read the Privacy Policy of CalHub to understand how we collect, use, and protect information while providing free online construction calculators and estimation tools.",
  keywords: [
    "privacy policy",
    "calhub privacy policy",
    "construction calculator privacy",
    "website privacy policy",
    "user privacy",
    "data protection",
    "online calculator privacy",
    "construction tools privacy",
  ],
  alternates: {
    canonical: "https://calhub.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CalHub",
    description:
      "Learn how CalHub collects, uses, and protects information.",
    url: "https://calhub.in/privacy-policy",
    siteName: "CalHub",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CalHub",
    description:
      "Learn how CalHub collects, uses, and protects information.",
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
            At CalHub, we respect your privacy and are committed to
            protecting your information. This Privacy Policy explains
            how information may be collected, used, and safeguarded
            when you use our website and construction calculators.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Information We Collect
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may collect non-personal information such as browser
            type, device information, operating system, referring
            pages, and general usage statistics. This information helps
            us improve website performance and user experience.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Cookies and Tracking Technologies
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            CalHub may use cookies and similar technologies to improve
            website functionality, remember user preferences, analyze
            traffic, and provide a better browsing experience. Users
            can disable cookies through browser settings if preferred.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Advertising Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may display advertisements through third-party
            advertising partners such as Google AdSense. These services
            may use cookies and similar technologies to serve relevant
            advertisements based on user interests and browsing
            behavior.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may use trusted third-party services including analytics,
            advertising, and website performance monitoring providers.
            These services operate under their own privacy policies and
            may collect information as permitted by law.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Data Security
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We take reasonable measures to protect information and
            maintain website security. However, no method of data
            transmission over the internet or electronic storage is
            completely secure.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Children's Privacy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            CalHub does not knowingly collect personal information from
            children under the age of 13. If such information is
            discovered, it will be removed as soon as reasonably
            possible.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Updates to This Privacy Policy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may update this Privacy Policy periodically. Any changes
            will be posted on this page with the updated effective
            information.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Contact Us
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If you have any questions regarding this Privacy Policy,
            please contact us at calculatorhubin@gmail.com or visit our Contact
            page.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}