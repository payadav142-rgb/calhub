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

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Calculator Hub respects your privacy
            and is committed to protecting your
            personal information.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Information We Collect
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We may collect non-personal
            information such as browser type,
            device information, and usage data to
            improve our website experience.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Cookies
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our website may use cookies to improve
            functionality and user experience.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Third-Party Services
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We may use third-party services such
            as analytics and advertising providers
            that may collect information according
            to their own privacy policies.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Contact
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            If you have any questions about this
            Privacy Policy, please contact us.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}