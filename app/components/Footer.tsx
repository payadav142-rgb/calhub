import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-6">
      <div className="text-center text-gray-600">
        <p>
          © 2026 Calculator Hub. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-6">
  <Link href="/privacy-policy">
    Privacy Policy
  </Link>

  <Link href="/disclaimer">
    Disclaimer
  </Link>

  <Link href="/about">
    About
  </Link>
</div>
      </div>
    </footer>
  );
}