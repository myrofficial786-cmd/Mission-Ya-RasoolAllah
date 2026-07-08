"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#06150F] border-t border-yellow-500/30 text-white mt-12">

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-12">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-black text-yellow-400">
            Mission Ya RasoolAllah ﷺ
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            Dedicated to spreading authentic Islamic knowledge,
            supporting Madrasas, strengthening Masjids, and serving
            humanity for the pleasure of Allah ﷻ.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Quick Links
          </h3>

          <div className="space-y-3">
            <Link href="/" className="hover:text-yellow-400 transition block">
              Home
            </Link>

            <Link href="/join-us" className="hover:text-yellow-400 transition block">
              Join Mission
            </Link>

            <Link href="/volunteer" className="hover:text-yellow-400 transition block">
              Volunteer
            </Link>

            <Link href="/donate" className="hover:text-yellow-400 transition block">
              Donate
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300">

            <a
              href="tel:+919881032392"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Phone size={18} />
              +91 98810 32392
            </a>

            <a
              href="mailto:myrofficial786@gmail.com"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Mail size={18} />
              myrofficial786@gmail.com
            </a>

            <a
              href="https://maps.google.com/?q=Nashik,Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <MapPin size={18} />
              Nashik, Maharashtra
            </a>

          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-6">
            Follow Us
          </h3>

          <div className="flex gap-6 mt-6">

            <a
              href="https://www.instagram.com/maulana_gufran_ali_qadri?igsh=dTR1d2phcmNqMmMx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:scale-110 transition text-3xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@missionyarasoolallah?si=23iEzolfwUtGZAlN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:scale-110 transition text-3xl"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/share/1AcksZeHwE/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:scale-110 transition text-3xl"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/919881032392"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition text-3xl"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-yellow-500/20 py-6 text-center text-gray-400">

        © 2026{" "}
        <span className="text-yellow-400">
          Mission Ya RasoolAllah ﷺ
        </span>
        . All Rights Reserved.

        <p className="mt-2 italic">
          "Seeking the pleasure of Allah through service."
        </p>

      </div>

    </footer>
  );
}