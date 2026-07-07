"use client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  MessageSquare,
} from "lucide-react";

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    occupation: "",
    skills: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "volunteers"), {
      ...form,
      createdAt: serverTimestamp(),
    });

    alert("Application submitted successfully!");

    setForm({
      name: "",
      age: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      occupation: "",
      skills: "",
      reason: "",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};
  return (
    <main className="min-h-screen bg-[#081C15] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Volunteer Registration
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Join <span className="text-yellow-400">Mission Ya RasoolAllah ﷺ</span>
          </h1>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Become a part of our mission to spread authentic Islamic knowledge,
            serve humanity, support Madrasas and Masjids, and work together for
            the pleasure of Allah ﷻ.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-14 bg-[#10271F] border border-yellow-500/30 rounded-3xl p-10 space-y-6"
        >
        <div className="grid md:grid-cols-2 gap-6">

  <div>
    <label className="block mb-2 text-yellow-400">Full Name</label>
    <div className="flex items-center bg-[#163428] rounded-xl px-4">
      <User className="text-yellow-400 mr-3" size={20} />
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="w-full bg-transparent py-4 outline-none"
        required
      />
    </div>
  </div>

  <div>
    <label className="block mb-2 text-yellow-400">Age</label>
    <input
      type="number"
      name="age"
      value={form.age}
      onChange={handleChange}
      placeholder="Your age"
      className="w-full bg-[#163428] rounded-xl px-4 py-4 outline-none"
      required
    />
  </div>

  <div>
    <label className="block mb-2 text-yellow-400">Phone Number</label>
    <div className="flex items-center bg-[#163428] rounded-xl px-4">
      <Phone className="text-yellow-400 mr-3" size={20} />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full bg-transparent py-4 outline-none"
        required
      />
    </div>
  </div>

  <div>
    <label className="block mb-2 text-yellow-400">Email</label>
    <div className="flex items-center bg-[#163428] rounded-xl px-4">
      <Mail className="text-yellow-400 mr-3" size={20} />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full bg-transparent py-4 outline-none"
        required
      />
    </div>
  </div>
  <div>
    <label className="block mb-2 text-yellow-400">City</label>
    <div className="flex items-center bg-[#163428] rounded-xl px-4">
      <MapPin className="text-yellow-400 mr-3" size={20} />
      <input
        type="text"
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="Your City"
        className="w-full bg-transparent py-4 outline-none"
        required
      />
    </div>
  </div>

  <div>
    <label className="block mb-2 text-yellow-400">State</label>
    <input
      type="text"
      name="state"
      value={form.state}
      onChange={handleChange}
      placeholder="Your State"
      className="w-full bg-[#163428] rounded-xl px-4 py-4 outline-none"
      required
    />
  </div>

  <div className="md:col-span-2">
    <label className="block mb-2 text-yellow-400">Occupation</label>
    <div className="flex items-center bg-[#163428] rounded-xl px-4">
      <Briefcase className="text-yellow-400 mr-3" size={20} />
      <input
        type="text"
        name="occupation"
        value={form.occupation}
        onChange={handleChange}
        placeholder="Student, Teacher, Business, etc."
        className="w-full bg-transparent py-4 outline-none"
      />
    </div>
  </div>

</div>
<div>
  <label className="block mb-2 text-yellow-400">
    Skills
  </label>

  <input
    type="text"
    name="skills"
    value={form.skills}
    onChange={handleChange}
    placeholder="Teaching, Design, Coding, Event Management..."
    className="w-full bg-[#163428] rounded-xl px-4 py-4 outline-none"
  />
</div>

<div>
  <label className="block mb-2 text-yellow-400">
    Why do you want to join Mission Ya RasoolAllah ﷺ?
  </label>

  <div className="flex bg-[#163428] rounded-xl px-4">
    <MessageSquare className="text-yellow-400 mr-3 mt-4" size={20} />

    <textarea
      name="reason"
      value={form.reason}
      onChange={handleChange}
      rows={5}
      placeholder="Tell us why you would like to volunteer..."
      className="w-full bg-transparent py-4 outline-none resize-none"
      required
    />
  </div>
</div>

<div className="flex flex-col sm:flex-row gap-4 pt-6">

  <button
    type="submit"
    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
  >
    Submit Application
  </button>

  <Link
    href="/join-us"
    className="flex-1 text-center border border-yellow-500 hover:bg-yellow-500 hover:text-black py-4 rounded-xl font-bold transition"
  >
    ← Back
  </Link>

</div>

        </motion.form>

      </div>
    </main>
  );
}