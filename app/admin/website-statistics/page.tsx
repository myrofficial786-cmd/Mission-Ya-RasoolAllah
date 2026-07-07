import Link from "next/link";

export default function WebsiteStatisticsPage() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">
      <Link
        href="/admin"
        className="inline-block mb-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Website Statistics
      </h1>

      <div className="bg-[#112D20] rounded-2xl border border-yellow-500 p-8">
        Statistics Page
      </div>
    </main>
  );
}