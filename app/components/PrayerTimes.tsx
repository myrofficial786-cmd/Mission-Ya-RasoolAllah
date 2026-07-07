export default function PrayerTimes() {

  const prayers = [
    { name: "Fajr", time: "5:00 AM" },
    { name: "Zuhr", time: "1:15 PM" },
    { name: "Asr", time: "5:00 PM" },
    { name: "Maghrib", time: "7:15 PM" },
    { name: "Isha", time: "8:30 PM" },
    { name: "Jumu'ah", time: "1:30 PM" },
  ];

  return (
    <section id="prayer-times" className="bg-[#0b241c] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          Prayer Timings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {prayers.map((prayer) => (
            <div
              key={prayer.name}
              className="bg-[#112d20] border border-yellow-500 rounded-2xl p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {prayer.name}
              </h3>

              <p className="text-2xl mt-4">
                {prayer.time}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}