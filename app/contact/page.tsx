import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white flex items-center justify-center px-6">

      <div className="max-w-3xl w-full bg-[#10271F] border border-yellow-500/30 rounded-2xl p-10">

        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-10">
          We'd love to hear from you. Reach out to Mission Ya RasoolAllah ﷺ for
          volunteering, donations, partnerships, or any questions.
        </p>

        <div className="space-y-5 text-lg">

          <p>📧 Email: myrofficial786@gmail.com</p>

          <p>📞 Phone: +91 9881032392</p>

          <p>📍 Location: NashiK, Maharashtra, India</p>

        </div>

        <div className="mt-10">

          <Link
            href="/"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}