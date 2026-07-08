"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
   const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <motion.nav
  className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
    scrolled
      ? "bg-[#081c15]/85 backdrop-blur-xl shadow-2xl border-b border-yellow-500 py-2"
      : "bg-transparent py-4"
      
  }`}
  initial={{ y: -100, }}
      animate={{ y: 0, }}
      transition={{ duration: 0.8 }}
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       <Link
  href="/"
  className="flex items-center gap-3 hover:opacity-90 transition"
>
  <Image
  src="/logo.jpeg"
  alt="Mission Ya RasoolAllah Logo"
  width={52}
  height={52}
  priority
  className="rounded-full object-cover transition-all duration-500 hover:rotate-6 hover:scale-110"
/>

  <div>
    <h1 className="text-xl font-bold text-yellow-400 leading-tight">
      Mission Ya RasoolAllah ﷺ
    </h1>

    <p className="text-xs text-gray-300">
      Serving the Ummah
    </p>
  </div>
</Link>

        <ul className="hidden md:flex gap-8">
          <li>
  <button
  onClick={() => scrollToSection("home")}
  className="
relative
cursor-pointer
transition-colors
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>
  Home
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("about")}
  className="
relative
cursor-pointer
transition-colors
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>
  About
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("programs")}
  className="
relative
cursor-pointer
transition-colors
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>
  Programs
</button>
</li>
          <li>
  <button
  onClick={() => scrollToSection("gallery")}
  className="
relative
cursor-pointer
transition-colors
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>
  Gallery
</button>
</li>
          <li>
 <button
  onClick={() => scrollToSection("contact")}
  className="
relative
cursor-pointer
transition-colors
duration-300
hover:text-yellow-400
after:absolute
after:left-0
after:-bottom-1
after:h-[2px]
after:w-0
after:bg-yellow-400
after:transition-all
after:duration-300
hover:after:w-full
"
>
  Contact
</button>
</li>
        </ul>

        <div className="flex items-center gap-4">

  <Link
    href="/donate"
   className="hidden md:inline-block bg-yellow-500 text-black px-6 py-2 rounded-xl font-semibold shadow-lg shadow-yellow-500/20 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.7)] transition-all duration-300"
  >
    Donate
  </Link>

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-yellow-400"
  >
    {menuOpen ? <X size={30} /> : <Menu size={30} />}
  </button>

</div>
<AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-[#081C15]/95 backdrop-blur-xl border-t border-yellow-500"
    >
      <div className="flex flex-col p-6 space-y-5">

        <button
          onClick={() => {
            scrollToSection("home");
            setMenuOpen(false);
          }}
          className="relative text-left transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          🏠 Home
        </button>

        <button
          onClick={() => {
            scrollToSection("about");
            setMenuOpen(false);
          }}
          className="relative text-left transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          📖 About
        </button>

        <button
          onClick={() => {
            scrollToSection("programs");
            setMenuOpen(false);
          }}
          className="relative text-left transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          🕌 Programs
        </button>

        <button
          onClick={() => {
            scrollToSection("gallery");
            setMenuOpen(false);
          }}
          className="relative text-left transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          🖼 Gallery
        </button>

        <button
          onClick={() => {
            scrollToSection("contact");
            setMenuOpen(false);
          }}
          className="relative text-left transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          📞 Contact
        </button>

        <Link
          href="/donate"
          onClick={() => setMenuOpen(false)}
          className="bg-yellow-500 text-black text-center py-3 rounded-xl font-bold shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all duration-300"
        >
          Donate
        </Link>

      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </motion.nav>
  );
}