"use client";

export default function AdminAskIslam() {
  return (
    <main className="min-h-screen bg-[#081C15] text-white p-8">

      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Ask Islam
      </h1>

      <div className="bg-[#112D20] border border-yellow-500 rounded-2xl p-8">

        <h2 className="text-2xl font-semibold mb-6">
          Add Question
        </h2>

        <input
          type="text"
          placeholder="Question"
          className="w-full mb-5 p-4 rounded-xl bg-[#081C15] border border-yellow-500 outline-none"
        />

        <textarea
          placeholder="Answer"
          rows={8}
          className="w-full mb-5 p-4 rounded-xl bg-[#081C15] border border-yellow-500 outline-none"
        />

        <input
          type="file"
          accept="audio/*"
          className="mb-6"
        />

        <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Save Question
        </button>

      </div>

    </main>
  );
}