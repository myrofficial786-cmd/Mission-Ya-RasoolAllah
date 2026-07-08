"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  HeartHandshake,
  Users,
  MoonStar,
  HandHelping,
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Madarsa Education",
      desc: "Quran, Hifz, Tajweed and Islamic studies for children.",
      icon: BookOpen,
    },
    {
      title: "Masjid Services",
      desc: "Daily prayers, Jumu'ah, Taraweeh and Islamic guidance.",
      icon: Building2,
    },
    {
      title: "Charity & Welfare",
      desc: "Helping needy families with food, clothes and financial support.",
      icon: HeartHandshake,
    },
    {
      title: "Community Events",
      desc: "Islamic lectures, youth programs and educational seminars.",
      icon: Users,
    },
    {
      title: "Ramadan Activities",
      desc: "Iftar arrangements, Taraweeh and Quran programs.",
      icon: MoonStar,
    },
    {
      title: "Volunteer Team",
      desc: "Join us in serving the community for the sake of Allah.",
      icon: HandHelping,
    },
  ];

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#081C15] py-24 md:py-32 px-6 text-white"
    >

      {/* Background Glow */}

      <motion.div
        className="absolute -top-20 left-0 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-400"
        >
          Our Programs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto mt-6 text-center text-gray-300 leading-8"
        >
          Serving the Ummah through education, worship, charity,
          community engagement and sincere service for the pleasure
          of Allah ﷻ.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
       
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