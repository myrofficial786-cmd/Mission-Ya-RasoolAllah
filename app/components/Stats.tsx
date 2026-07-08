"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    {
      number: "Madarsa",
      title: "Madarsa e Ya RasoolAllah",
      count: false,
    },
    {
      number: "Masjid",
      title: "Masjid e Ya RasoolAllah",
      count: false,
    },
    {
      number: 150,
      suffix: "+",
      title: "Students",
      count: true,
    },
    {
      number: 25,
      suffix: "+",
      title: "Community Activities",
      count: true,
    },
  ];

  return (
    <section
      id="impact"
      className="bg-[#0B241A] py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center text-yellow-400 mb-14"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -15,
                scale: 1.04,
                boxShadow: "0px 0px 30px rgba(250,204,21,0.45)",
              }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/40 bg-[#112D20] p-5 md:p-8 min-h-[220px] md:min-h-[300px] flex flex-col justify-center items-center text-center transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />

              {/* Number / Name */}
              <div className="relative z-10">

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400 leading-tight">

                  {item.count ? (
                    <>
                      <CountUp
                        end={Number(item.number)}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {item.suffix}
                    </>
                  ) : (
                    item.number
                  )}

                </h3>

                <p className="mt-5 text-sm md:text-base text-gray-300">
                  {item.title}
                </p>

              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl"
              >
                Know More →
              </motion.button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}