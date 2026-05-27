import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Have questions or suggestions?
        </p>

        <p className="mt-4 text-gray-600">
          Email us at:
        </p>

        <p className="mt-2 text-xl font-semibold text-black">
          support@calculatorhub.com
        </p>
      </section>

      <Footer />
    </main>
  );
}