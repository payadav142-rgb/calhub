import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Contact Us
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions, suggestions, or
            feedback? We'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-2xl bg-gray-100 p-6">
              <h2 className="text-2xl font-bold text-black">
                Email
              </h2>

              <p className="mt-3 text-gray-600">
                support@calculatorhub.com
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              <h2 className="text-2xl font-bold text-black">
                Working Hours
              </h2>

              <p className="mt-3 text-gray-600">
                Monday - Saturday | 9 AM - 6 PM
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              <h2 className="text-2xl font-bold text-black">
                Support
              </h2>

              <p className="mt-3 text-gray-600">
                We usually reply within 24 hours.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-100 p-6">
              <h2 className="text-2xl font-bold text-black">
                Business Inquiries
              </h2>

              <p className="mt-3 text-gray-600">
                Contact us for partnerships,
                advertising, and business-related
                queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}