import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-5xl font-extrabold text-black">
            Disclaimer
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The information and calculators
            provided on Calculator Hub are for
            general informational and estimation
            purposes only.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            No Professional Advice
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our calculators should not be
            considered professional engineering,
            construction, or financial advice.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Accuracy Disclaimer
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            While we try to provide accurate
            estimates, actual material
            requirements may vary depending on
            project conditions and specifications.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            External Links
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Calculator Hub may contain links to
            third-party websites. We are not
            responsible for the content or
            practices of external websites.
          </p>

          <h2 className="mt-10 text-3xl font-bold text-black">
            Use at Your Own Risk
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            By using this website, you agree that
            Calculator Hub is not liable for any
            losses, damages, or decisions made
            based on the calculator results.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}