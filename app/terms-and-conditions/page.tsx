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

          <p className="mt-6 text-lg leading-8 text-gray-600">
            By using Calculator Hub, you agree to
            comply with our terms and conditions.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use of Website
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            The calculators provided on this
            website are for informational and
            estimation purposes only.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            While we try to provide accurate
            calculations, we do not guarantee
            complete accuracy for all projects and
            construction scenarios.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Limitation of Liability
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Calculator Hub will not be responsible
            for any losses or damages resulting
            from the use of our calculators.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Updates
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            We may update these terms and
            conditions at any time without prior
            notice.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}