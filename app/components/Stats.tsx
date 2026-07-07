"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {

const stats = [
  {
    number: "Madarsa e Ya RasoolAllah", // Replace with your Madarsa name
    title: "Our Madarsa",
  },
  {
    number: "Masjid e Ya RasoolAllah", // Replace with your Masjid name
    title: "Our Masjid",
  },
  {
    number: "150+", // Change to your real number
    title: "Students",
  },
  {
    number: "25+", // Change to your real number
    title: "Community Activities",
  },
];

  return (
    <section id="impact" className="bg-[#0B241A] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-14">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
           <motion.div
  key={item.title}
  className="group bg-[#112D20] rounded-2xl p-8 min-h-[320px] flex flex-col justify-center border border-yellow-500 cursor-pointer"
  whileHover={{
    y: -20,
    scale: 1.1,
    rotate: -2,
    boxShadow: "0px 0px 35px rgba(250,204,21,0.7)",
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 15,
  }}
>
  <div className="h-28 flex items-center justify-center">
    <h3 className="text-4xl font-bold text-yellow-400 text-center leading-tight">
      {item.number}
    </h3>
  </div>

  <p className="mt-4 text-gray-300 text-center">
    {item.title}
  </p>
  <div className="mt-6 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
  <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
    Know More →
  </button>
</div>
</motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}