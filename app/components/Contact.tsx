"use client";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="bg-[#081C15] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
<div className="bg-[#112D20] border border-yellow-500 rounded-2xl p-10 text-center">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
  We'd love to hear from you. Whether you have a question, would like to volunteer, or wish to support our mission, feel free to reach out through any of the options below.
</p>

        <h3 className="text-3xl font-bold text-yellow-400 mb-8">
  Mission Ya RasoolAllah ﷺ
</h3>

<div className="space-y-6 text-left max-w-xl mx-auto">

  <a
    href="tel:+919881032392"
    className="flex items-center gap-4 bg-[#081C15] p-5 rounded-xl border border-yellow-500 hover:bg-[#0F2A21] transition"
  >
    <Phone className="text-yellow-400" />
    <div>
      <p className="text-sm text-gray-400">Call Us</p>
      <p className="font-semibold">+91 98810 32392</p>
    </div>
  </a>

  <a
    href="https://wa.me/919881032392"
    target="_blank"
    className="flex items-center gap-4 bg-[#081C15] p-5 rounded-xl border border-yellow-500 hover:bg-[#0F2A21] transition"
  >
    <MessageCircle className="text-green-400" />
    <div>
      <p className="text-sm text-gray-400">WhatsApp</p>
      <p className="font-semibold">Chat with us</p>
    </div>
  </a>

  <a
    href="mailto:myrofficial786@gmail.com"
    className="flex items-center gap-4 bg-[#081C15] p-5 rounded-xl border border-yellow-500 hover:bg-[#0F2A21] transition"
  >
    <Mail className="text-yellow-400" />
    <div>
      <p className="text-sm text-gray-400">Email</p>
      <p className="font-semibold">myrofficial786@gmail.com</p>
    </div>
  </a>

  <a
    href="https://maps.google.com/?q=Nashik,Maharashtra"
    target="_blank"
    className="flex items-center gap-4 bg-[#081C15] p-5 rounded-xl border border-yellow-500 hover:bg-[#0F2A21] transition"
  >
    <MapPin className="text-red-400" />
    <div>
      <p className="text-sm text-gray-400">Location</p>
      <p className="font-semibold">Nashik, Maharashtra</p>
    </div>
  </a>

</div>
</div>
      </div>
    </section>
  );
}