"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
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

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#081C15]/85 backdrop-blur-xl border-b border-yellow-500 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.jpeg"
            alt="Mission Ya RasoolAllah"
            width={52}
            height={52}
            priority
            className="rounded-full object-cover"
          />

          <div>
            <h1 className="text-base md:text-xl font-bold text-yellow-400 leading-tight">
              Mission Ya RasoolAllah ﷺ
            </h1>

            <p className="text-xs text-gray-300">
              Serving the Ummah
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">

          <button onClick={() => scrollToSection("home")}>Home</button>

          <button onClick={() => scrollToSection("about")}>About</button>

          <button onClick={() => scrollToSection("programs")}>Programs</button>

          <button onClick={() => scrollToSection("gallery")}>Gallery</button>
<Link
  href="/ask-islam"
  className="hover:text-yellow-400 transition"
>
  Ask Islam
</Link>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <Link
            href="/donate"
            className="bg-yellow-500 text-black px-6 py-2 rounded-xl font-bold hover:bg-yellow-400 transition"
          >
            Donate
          </Link>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-yellow-400"
        >
          <Menu size={32} />
        </button>

      </div>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-[#081C15] border-l border-yellow-500 z-50 flex flex-col"
            >

              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-5 text-3xl text-yellow-400"
              >
                ✕
              </button>

              {/* Menu */}
              <div className="mt-24 flex flex-col gap-6 px-8 text-lg text-white">

                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-yellow-400"
                >
                  🏠 Home
                </button>

                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-yellow-400"
                >
                  📖 About
                </button>

                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-left hover:text-yellow-400"
                >
                  🕌 Programs
                </button>

                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-left hover:text-yellow-400"
                >
                  🖼 Gallery
                </button>
<Link
  href="/ask-islam"
  onClick={() => setMenuOpen(false)}
  className="text-left hover:text-yellow-400 transition"
>
  ❓ Ask Islam
</Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-yellow-400"
                >
                  📞 Contact
                </button>

              </div>

              {/* Donate */}
              <div className="mt-auto p-6">

                <Link
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full bg-yellow-500 text-black text-center py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
                >
                  Donate
                </Link>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}