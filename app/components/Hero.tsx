"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#071A12] via-[#0B241A] to-[#123524] text-white pt-24 px-6"
    >
      {/* Floating Orb 1 */}
<motion.div
  animate={{
    x: [0, 80, 0],
    y: [0, -60, 0],
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-24 left-12 w-72 h-72 rounded-full bg-yellow-400/10 blur-[120px]"
/>

{/* Floating Orb 2 */}
<motion.div
  animate={{
    x: [0, -90, 0],
    y: [0, 70, 0],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 16,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-green-400/10 blur-[150px]"
/>

{/* Floating Orb 3 */}
<motion.div
  animate={{
    y: [0, -50, 0],
    rotate: [0, 25, 0],
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-1/2 left-1/2 w-60 h-60 rounded-full bg-yellow-300/5 blur-[120px]"
/>
<div
  className="absolute inset-0 opacity-[0.04]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
    `,
    backgroundSize: "70px 70px",
  }}
/>

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <motion.div
    className="absolute w-4 h-4 rounded-full bg-yellow-400/30 blur-sm"
    animate={{
      y: [0, -120, 0],
      x: [0, 60, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ top: "20%", left: "15%" }}
  />

  <motion.div
    className="absolute w-6 h-6 rounded-full bg-green-400/20 blur-md"
    animate={{
      y: [0, 100, 0],
      x: [0, -80, 0],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ top: "60%", right: "12%" }}
  />

  <motion.div
    className="absolute w-3 h-3 rounded-full bg-yellow-300/40 blur-sm"
    animate={{
      y: [0, -90, 0],
      x: [0, 40, 0],
      opacity: [0.2, 1, 0.2],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ bottom: "15%", left: "35%" }}
  />

</div>
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Badge */}
        <motion.span
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  🌙 Serving the Ummah Since 2025
</motion.span>

        {/* Welcome */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="uppercase tracking-[6px] text-yellow-400 mb-5"
        >
          Welcome To
        </motion.p>

        {/* Heading */}
        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5, duration: 0.9 }}
  className="relative inline-block"
>
  <motion.div
    className="absolute inset-0 rounded-full bg-yellow-400/20 blur-3xl"
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
    <span className="text-white">Mission</span>

    <br />

    <span className="text-yellow-400">
      Ya RasoolAllah ﷺ
    </span>
  </h1>
</motion.div>

        {/* Divider */}
        <motion.div
          className="flex justify-center my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
        >
          <div className="w-28 h-1 rounded-full bg-yellow-500"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-8 md:leading-9"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >
          Dedicated to spreading authentic Islamic knowledge,
          supporting Madrasas, building Masjids, serving the
          community, and inspiring hearts through the teachings
          of the Holy Qur'an and Sunnah.
        </motion.p>

        {/* Feature Badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            📖 Islamic Education
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            🕌 Masjid Development
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full border border-yellow-500 bg-yellow-500/10 hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            🤝 Community Service
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 35px rgba(250,204,21,0.55)",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => (window.location.href = "/join-us")}
  className="relative overflow-hidden bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
>
  <span className="relative z-10">
    Join Our Mission
  </span>

  <motion.div
    className="absolute inset-0 bg-white/20"
    initial={{ x: "-120%" }}
    whileHover={{ x: "120%" }}
    transition={{ duration: 0.7 }}
  />
</motion.button>

          <motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 0px 30px rgba(250,204,21,0.35)",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => (window.location.href = "/donate")}
  className="border-2 border-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition"
>
  Donate Now
</motion.button>
        </motion.div>

      </motion.div>

<motion.div
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  <span className="text-gray-400 text-sm mb-2">
    Scroll Down
  </span>

  <div className="w-6 h-10 rounded-full border border-yellow-400 flex justify-center">
    <motion.div
      className="w-2 h-2 rounded-full bg-yellow-400 mt-2"
      animate={{
        y: [0, 14, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  </div>
</motion.div>

    </section>
  );
}