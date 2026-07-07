import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#081C15] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex flex-col justify-center">

          <span className="text-yellow-400 uppercase tracking-[4px]">
            About Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Serving Humanity
            <br />
            Through Islam
          </h2>

          <p className="mt-8 text-gray-300 leading-8">
            Mission Ya RasoolAllah ﷺ is dedicated to spreading authentic
            Islamic knowledge, supporting Madrasas, building and maintaining
            Masjids, helping the poor, educating children, and serving humanity
            through charitable initiatives.
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex w-fit items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300"
          >
            Learn More
          </Link>

        </div>

        {/* Right Side */}
        <div className="bg-[#112D20] rounded-3xl p-10 border border-yellow-500 shadow-xl">

          <h3 className="text-3xl font-bold text-yellow-400">
            Our Mission
          </h3>

          <ul className="mt-8 space-y-5 text-gray-300 text-lg">
            <li>✔ Promote Islamic Education</li>
            <li>✔ Build & Support Masjids</li>
            <li>✔ Develop Madrasas</li>
            <li>✔ Welfare & Charity Projects</li>
            <li>✔ Youth Development</li>
            <li>✔ Community Service</li>
          </ul>

        </div>

      </div>
    </section>
  );
}