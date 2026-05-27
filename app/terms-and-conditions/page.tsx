import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Terms & Conditions
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            By using Calculator Hub, you agree to
            the following terms and conditions.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use of Website
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Calculator Hub provides free online
            construction calculators for
            informational and estimation purposes
            only.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            While we aim to provide accurate
            calculations, results should be
            verified by professionals before use
            in real construction projects.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Calculator Hub is not responsible for
            any losses, damages, or construction
            issues arising from the use of this
            website.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Changes to Terms
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            We may update these terms at any time
            without prior notice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}