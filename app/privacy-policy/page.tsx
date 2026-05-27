import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold text-black">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-600">
          Calculator Hub values your privacy. We do
          not collect personal information from
          users.
        </p>

        <p className="mt-4 text-gray-600">
          This website may use cookies and analytics
          tools to improve user experience.
        </p>
      </section>

      <Footer />
    </main>
  );
}