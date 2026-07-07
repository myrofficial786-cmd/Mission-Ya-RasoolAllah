import Link from "next/link";

export default function Donation() {
  return (
    <section
      id="donation"
      className="bg-[#081C15] py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto bg-[#112D20] rounded-3xl border border-yellow-500 p-12 text-center">

        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Support Our Mission
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Your contribution helps us maintain our Madarsa, Masjid,
          support students, organize welfare activities, and serve the
          community for the sake of Allah.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          <Link
            href="/donate"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition duration-300"
          >
            Donate Now
          </Link>

          <Link
            href="/donate#bank-details"
            className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold px-8 py-4 rounded-xl transition duration-300"
          >
            Bank Details
          </Link>

        </div>

      </div>
    </section>
  );
}