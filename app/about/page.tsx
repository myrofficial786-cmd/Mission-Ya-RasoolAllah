import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <p className="uppercase tracking-[8px] text-yellow-400 font-semibold">
          ABOUT US
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mt-6">
          Mission <span className="text-yellow-400">Ya RasoolAllah ﷺ</span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 leading-8 max-w-4xl">
          Mission Ya RasoolAllah ﷺ is a non-profit Islamic initiative dedicated
          to spreading authentic Islamic knowledge, supporting Madrasas,
          strengthening Masjids, serving humanity, and building a compassionate
          community for the sake of Allah ﷻ.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-[#10271F] border border-yellow-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              🎯 Our Mission
            </h2>

            <p className="text-gray-300 leading-7">
              Our mission is to spread the teachings of the Holy Quran and
              Sunnah, educate future generations, support Islamic institutions,
              encourage volunteerism, and serve humanity with sincerity.
            </p>
          </div>

          <div className="bg-[#10271F] border border-yellow-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              🌍 Our Vision
            </h2>

            <p className="text-gray-300 leading-7">
              We envision a united Ummah where every Muslim has access to
              authentic Islamic education, strong Masjids, quality Madrasas,
              and opportunities to participate in community welfare.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#10271F] border border-yellow-500/30 rounded-2xl p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            What We Do
          </h2>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li>📖 Support Madrasas & Islamic Education</li>
            <li>🕌 Help Build & Maintain Masjids</li>
            <li>🤝 Community Welfare Programs</li>
            <li>🍲 Food Distribution & Charity</li>
            <li>👨‍🏫 Volunteer Opportunities</li>
            <li>❤️ Serve Humanity for the Sake of Allah</li>
          </ul>

        </div>

        <div className="mt-16 flex flex-wrap gap-5">

          <Link
            href="/join-us"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition"
          >
            Become a Volunteer
          </Link>

          <Link
            href="/donate"
            className="border border-yellow-500 hover:bg-yellow-500 hover:text-black font-bold px-8 py-4 rounded-xl transition"
          >
            Donate Now
          </Link>

          <Link
            href="/"
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl transition"
          >
            ← Back to Home
          </Link>

        </div>

      </section>

    </main>
  );
}