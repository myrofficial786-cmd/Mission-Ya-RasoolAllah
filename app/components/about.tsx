"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  HeartHandshake,
  Globe,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#081C15] py-24 md:py-32 px-6 text-white"
    >

      {/* Background Glow */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[5px] text-yellow-400">
            About Our Mission
          </span>

          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            Serving Humanity
            <br />

            <span className="text-yellow-400">
              Through Islam
            </span>

          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            Mission Ya RasoolAllah ﷺ is dedicated to spreading authentic
            Islamic knowledge, supporting Madrasas, strengthening Masjids,
            educating children, helping those in need and serving humanity
            solely for the pleasure of Allah ﷻ.
          </p>

          <Link
            href="/about"
            className="inline-flex mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]"
          >
            Learn More →
          </Link>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-5"
        >
        

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(250,204,21,0.35)",
            }}
            className="group rounded-3xl border border-yellow-500/30 bg-[#112D20] p-6"
          >
            <BookOpen
              size={36}
              className="text-yellow-400 transition-transform duration-300 group-hover:rotate-6"
            />

            <h3 className="mt-5 text-xl font-bold">
              Islamic Education
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-7">
              Teaching authentic Islamic knowledge through Madrasas and scholars.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(250,204,21,0.35)",
            }}
            className="group rounded-3xl border border-yellow-500/30 bg-[#112D20] p-6"
          >
            <Building2
              size={36}
              className="text-yellow-400 transition-transform duration-300 group-hover:rotate-6"
            />

            <h3 className="mt-5 text-xl font-bold">
              Masjid Development
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-7">
              Building, maintaining and supporting Masjids for the community.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(250,204,21,0.35)",
            }}
            className="group rounded-3xl border border-yellow-500/30 bg-[#112D20] p-6"
          >
            <HeartHandshake
              size={36}
              className="text-yellow-400 transition-transform duration-300 group-hover:rotate-6"
            />

            <h3 className="mt-5 text-xl font-bold">
              Welfare Projects
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-7">
              Helping the needy through charity, relief work and community support.
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(250,204,21,0.35)",
            }}
            className="group rounded-3xl border border-yellow-500/30 bg-[#112D20] p-6"
          >
            <Globe
              size={36}
              className="text-yellow-400 transition-transform duration-300 group-hover:rotate-6"
            />

            <h3 className="mt-5 text-xl font-bold">
              Serving Humanity
            </h3>

            <p className="mt-3 text-gray-300 text-sm leading-7">
              Inspiring positive change through faith, compassion and service.
            </p>

          </motion.div>

        </motion.div>

      </div>
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    className="relative block w-full h-16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0V46.29c47.79,22,103.59,29,158,17.39,70.36-15,136.33-61.1,206.8-78.18C438.64-1.34,512.34,15.58,583,39.61c69.27,23.52,138.3,51.49,209.4,53.61,65.18,1.94,127.52-19.2,188-44.8V0Z"
      opacity=".25"
      className="fill-[#0B241A]"
    />
    <path
      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z"
      className="fill-[#0B241A]"
    />
  </svg>
</div>
    </section>
  );
}