"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  BookOpen,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-500/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="text-yellow-400 tracking-[6px] uppercase font-semibold">
              Join Our Mission
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6">
              Become Part of
              <span className="block text-yellow-400">
                Mission Ya RasoolAllah ﷺ
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">
              Join hands in spreading authentic Islamic knowledge,
              serving humanity, supporting Madrasas, strengthening
              Masjids and building a compassionate community for the
              sake of Allah ﷻ.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                href="/join-us/apply"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition flex items-center gap-2"
              >
                Become a Volunteer
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/about"
                className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl transition"
              >
                Learn More
              </Link>

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="bg-[#112D20] rounded-3xl p-8 border border-yellow-500 hover:-translate-y-2 transition">
              <BookOpen className="text-yellow-400 mb-5" size={42}/>
              <h3 className="font-bold text-2xl mb-3">
                Islamic Education
              </h3>
              <p className="text-gray-300">
                Supporting Madrasas and spreading authentic knowledge.
              </p>
            </div>

            <div className="bg-[#112D20] rounded-3xl p-8 border border-yellow-500 hover:-translate-y-2 transition mt-12">
              <Building2 className="text-yellow-400 mb-5" size={42}/>
              <h3 className="font-bold text-2xl mb-3">
                Masjid Development
              </h3>
              <p className="text-gray-300">
                Building and maintaining Masjids for the Ummah.
              </p>
            </div>

            <div className="bg-[#112D20] rounded-3xl p-8 border border-yellow-500 hover:-translate-y-2 transition">
              <Heart className="text-yellow-400 mb-5" size={42}/>
              <h3 className="font-bold text-2xl mb-3">
                Community Welfare
              </h3>
              <p className="text-gray-300">
                Helping people through charity and compassionate service.
              </p>
            </div>

            <div className="bg-[#112D20] rounded-3xl p-8 border border-yellow-500 hover:-translate-y-2 transition mt-12">
              <Users className="text-yellow-400 mb-5" size={42}/>
              <h3 className="font-bold text-2xl mb-3">
                Volunteer Network
              </h3>
              <p className="text-gray-300">
                Work together with dedicated volunteers for positive change.
              </p>
            </div>

          </motion.div>

        </div>

      </section>
      {/* Our Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 uppercase tracking-[5px]">
              Our Mission
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Serving Islam with Sincerity
            </h2>

            <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
              Mission Ya RasoolAllah ﷺ is dedicated to spreading authentic
              Islamic knowledge, strengthening Madrasas, supporting Masjids,
              serving humanity, and building a united community through the
              teachings of the Holy Qur'an and Sunnah.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#112D20] p-8 rounded-3xl border border-yellow-500"
            >
              <BookOpen className="text-yellow-400 mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-4">
                Islamic Education
              </h3>

              <p className="text-gray-300 leading-7">
                Supporting Madrasas, Islamic learning programs, Qur'an
                education and authentic teachings for children and adults.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#112D20] p-8 rounded-3xl border border-yellow-500"
            >
              <Building2 className="text-yellow-400 mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-4">
                Masjid Development
              </h3>

              <p className="text-gray-300 leading-7">
                Helping establish, maintain and improve Masjids so they remain
                centers of worship, learning and community.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#112D20] p-8 rounded-3xl border border-yellow-500"
            >
              <Heart className="text-yellow-400 mb-5" size={42} />
              <h3 className="text-2xl font-bold mb-4">
                Community Welfare
              </h3>

              <p className="text-gray-300 leading-7">
                Organizing charity, food distribution, educational support and
                community initiatives that benefit society.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-6 bg-[#0C2318]">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:.7 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 uppercase tracking-[5px]">
              Why Join Us
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Become Part of Something Meaningful
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Serve Islam",
              "Help Humanity",
              "Grow Spiritually",
              "Meet Dedicated Volunteers",
              "Develop Leadership Skills",
              "Support Madrasas",
              "Strengthen Masjids",
              "Earn Continuous Reward"
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{ scale: 1.04 }}
                className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6 text-center"
              >
                <div className="text-yellow-400 text-3xl mb-4">
                  ⭐
                </div>

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Impact */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            transition={{ duration:.8 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                500+
              </h3>

              <p className="mt-4 text-gray-300">
                Volunteers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                25+
              </h3>

              <p className="mt-4 text-gray-300">
                Community Programs
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                10+
              </h3>

              <p className="mt-4 text-gray-300">
                Madrasas Supported
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                1000+
              </h3>

              <p className="mt-4 text-gray-300">
                Lives Reached
              </p>
            </div>

          </motion.div>

        </div>

      </section>
      {/* Ways You Can Serve */}
      <section className="py-24 px-6 bg-[#081C15]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-yellow-400 uppercase tracking-[5px]">
              Ways You Can Serve
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Every Skill Can Benefit the Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Islamic Education",
              "Masjid Service",
              "Community Welfare",
              "Student Mentoring",
              "Social Media",
              "Graphic Design",
              "Photography & Video",
              "Technology & Website"
            ].map((service) => (

              <div
                key={service}
                className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6 hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                  {service}
                </h3>

                <p className="text-gray-300">
                  Help the mission through your skills and dedication.
                </p>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-24 px-6 bg-[#0C2318]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-yellow-400 uppercase tracking-[5px]">
              Responsibilities
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Every Volunteer Should
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Follow the Qur'an and Sunnah.",
              "Maintain good character.",
              "Respect everyone.",
              "Serve sincerely for Allah.",
              "Protect the reputation of the mission.",
              "Work together as one team.",
              "Be punctual and responsible.",
              "Continue learning and improving."
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4 bg-[#112D20] border border-yellow-500 rounded-xl p-5"
              >
                <div className="text-yellow-400 text-2xl">
                  ✓
                </div>

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-yellow-400 uppercase tracking-[5px]">
              FAQ
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "Who can join the mission?",
                a: "Anyone who sincerely wishes to serve Islam and humanity respectfully."
              },
              {
                q: "Is there any membership fee?",
                a: "No. Joining the mission is free."
              },
              {
                q: "Can students join?",
                a: "Yes. Students are warmly welcome."
              },
              {
                q: "Can I volunteer online?",
                a: "Yes. Media, design and technical volunteers can contribute remotely."
              }
            ].map((faq) => (

              <div
                key={faq.q}
                className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  {faq.q}
                </h3>

                <p className="text-gray-300 mt-3">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#0C2318] to-[#081C15]">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-yellow-400 uppercase tracking-[6px]">
              Join The Mission
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight">
              Every Small Act of Service
              <br />
              Can Make a Big Difference
            </h2>

            <p className="text-gray-300 mt-8 text-lg leading-8 max-w-3xl mx-auto">
              Whether you can volunteer your time, share your skills,
              support educational projects, or simply spread goodness,
              your contribution matters.
              Together, let's serve Islam and humanity for the sake of Allah ﷻ.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <Link
                href="/volunteer"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition"
              >
                Become a Volunteer
              </Link>

              <Link
                href="/contact"
                className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl transition"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}