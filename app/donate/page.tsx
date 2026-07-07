"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Wallet,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <p className="tracking-[8px] uppercase text-yellow-400">
            Support Our Mission
          </p>

          <h1 className="text-6xl font-black mt-6">
            Donate for the
            <span className="text-yellow-400"> Sake of Allah ﷺ</span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            Your contribution helps build Masjids, support Madrasas,
            educate children and serve humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Progress */}
            <div className="rounded-3xl border border-yellow-500/40 bg-[#0F2A21] p-8">

              <div className="flex items-center gap-3">
                <Heart className="text-yellow-400" size={32} />
                <h2 className="text-3xl font-bold">
                  Support Our Mission
                </h2>
              </div>

              <p className="text-gray-300 mt-5">
                Every donation helps us spread authentic Islamic
                knowledge, support Madrasas, maintain Masjids,
                organize community welfare programs and serve humanity.
              </p>

              <div className="mt-8">

                <div className="flex justify-between mb-2">
                  <span>Donation Progress</span>
                  <span>25%</span>
                </div>

                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-yellow-400 rounded-full"></div>
                </div>

                <div className="flex justify-between mt-2 text-gray-400">
                  <span>₹1,25,000 Raised</span>
                  <span>Goal ₹5,00,000</span>
                </div>

              </div>

            </div>

            {/* Bank Details */}
            <div
              id="bank-details"
              className="rounded-3xl border border-yellow-500/40 bg-[#0F2A21] p-8"
            >

              <div className="flex items-center gap-3">
                <Wallet className="text-yellow-400" />
                <h2 className="text-2xl font-bold">
                  Donate via UPI / Bank
                </h2>
              </div>

              <div className="mt-8 flex flex-col items-center">

                <Image
                  src="/phonepe-qr.jpg"
                  alt="PhonePe QR"
                  width={260}
                  height={260}
                  className="rounded-xl border border-yellow-500"
                />

                <div className="mt-8 space-y-3 text-center">

                  <p>
                    <strong>UPI ID:</strong><br />
                    9881032392@ybl
                  </p>

                  <p>
                    <strong>Account Name:</strong><br />
                    Gufran Khalil Shaikh
                  </p>

                  <p>
                    <strong>Bank:</strong><br />
                    Punjab National Bank
                  </p>

                </div>

                <p className="mt-6 text-center text-gray-300">
                  Scan the QR code using any UPI application or use the bank
                  details above to support our mission.
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-8">

            <div className="rounded-3xl border border-yellow-500/40 bg-[#0F2A21] p-8">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" size={30} />
                <h2 className="text-2xl font-bold">
                  100% Transparency
                </h2>
              </div>

              <p className="text-gray-300 mt-4">
                Every contribution is used only for Islamic education,
                Masjid development, Madrasa support and community welfare.
              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/40 bg-[#0F2A21] p-8">

              <div className="flex items-center gap-3">
                <Landmark className="text-yellow-400" size={30} />
                <h2 className="text-2xl font-bold">
                  A Reward That Never Ends
                </h2>
              </div>

              <p className="text-gray-300 mt-4 italic">
                "The example of those who spend their wealth in the way of Allah
                is like a seed that grows seven ears..."
              </p>

              <p className="text-yellow-400 mt-3">
                — Surah Al-Baqarah (2:261)
              </p>

              <Link
                href="/"
                className="inline-flex mt-6 items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
              >
                ← Back to Home
              </Link>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}