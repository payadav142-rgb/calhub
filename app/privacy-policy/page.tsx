import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Privacy Policy
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Calculator Hub respects your privacy
            and is committed to protecting your
            personal information.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Information Collection
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may collect non-personal
            information such as browser type,
            device information, and usage data to
            improve our services.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Cookies
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Our website may use cookies to improve
            user experience and analyze website
            traffic.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may use third-party services such
            as analytics and advertising providers
            to improve website performance.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Contact Us
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            If you have any questions regarding
            this Privacy Policy, please contact
            us through our Contact page.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

