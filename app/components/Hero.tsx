"use client";
import link from "next/link";
import {motion} from "framer-motion";
import { Link } from "lucide-react";
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#071A12] via-[#0B241A] to-[#123524] text-white pt-24">
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

<div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      <motion.div
  className="max-w-6xl mx-auto text-center relative z-10"
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border border-yellow-500/50 bg-yellow-500/10 text-yellow-300"
>
  🌙 Serving the Ummah Since 2025
</motion.div>

        <p className="text-yellow-400 uppercase tracking-[6px] mb-4">
          Welcome to
        </p>

        <motion.h1
  className="text-5xl md:text-7xl font-extrabold leading-tight"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2 }}
>
         <span className="text-white">Mission </span>
          <span className="text-yellow-400">
  Ya RasoolAllah ﷺ
</span>
        </motion.h1>
<div className="flex justify-center my-8">
  <div className="w-24 h-1 bg-yellow-500 rounded-full"></div>
</div>
        <motion.p
  className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-9"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  Dedicated to spreading authentic Islamic knowledge, supporting Madrasas,
  building Masjids, serving the community, and inspiring hearts through the
  teachings of the Qur'an and Sunnah.
</motion.p>
<div className="mt-10 flex flex-wrap justify-center gap-4">
  <div className="px-4 py-2 border border-yellow-500 rounded-full">
    📖 Islamic Education
  </div>

  <div className="px-4 py-2 border border-yellow-500 rounded-full">
    🕌 Masjid Development
  </div>

  <div className="px-4 py-2 border border-yellow-500 rounded-full">
    🤝 Community Service
  </div>
</div>

        <motion.div
  className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
>
         <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
  <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

  <button
    onClick={() => window.location.href = "/join-us"}
    className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-yellow-400 transition"
  >
    Join Our Mission
  </button>

  <button
    onClick={() => window.location.href = "/donate"}
    className="border-2 border-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
  >
    Donate Now
  </button>

</div>
</div>
        </motion.div>

      </motion.div>
    </section>
  );
}