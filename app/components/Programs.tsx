export default function Programs() {
  const programs = [
    {
      title: "Madarsa Education",
      desc: "Quran, Hifz, Tajweed and Islamic studies for children."
    },
    {
      title: "Masjid Services",
      desc: "Daily prayers, Jumu'ah, Taraweeh and Islamic guidance."
    },
    {
      title: "Charity & Welfare",
      desc: "Helping needy families with food, clothes and financial support."
    },
    {
      title: "Community Events",
      desc: "Islamic lectures, youth programs and educational seminars."
    },
    {
      title: "Ramadan Activities",
      desc: "Iftar arrangements, Taraweeh and Quran programs."
    },
    {
      title: "Volunteer Team",
      desc: "Join us in serving the community for the sake of Allah."
    }
  ];

  return (
    <section id="programs" className="bg-[#081c15] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-14">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item) => (
            <div
  key={item.title}
  className="group relative overflow-hidden bg-[#112d20] border border-yellow-500 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,0.35)]"
>
  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
      {item.title}
    </h3>

    <p className="text-gray-300 transition-all duration-300 group-hover:opacity-0">
      {item.desc}
    </p>

    <div className="absolute left-0 right-0 bottom-0 flex justify-center opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400">
        Learn More →
      </button>
    </div>
  </div>

  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}