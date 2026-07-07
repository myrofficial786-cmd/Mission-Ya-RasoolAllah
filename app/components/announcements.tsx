"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
const [selectedImage, setSelectedImage] = useState<string | null>(null);
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);  
useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const snap = await getDocs(collection(db, "announcements"));

        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Show pinned announcements first
        data.sort((a: any, b: any) => Number(b.pinned) - Number(a.pinned));

        setAnnouncements(data);
      } catch (error) {
        console.error("Error loading announcements:", error);
      }
    };

    loadAnnouncements();
  }, []);

  return (
    <section className="bg-[#081C15] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Latest Announcements
        </h2>

        {announcements.length === 0 ? (
          <p className="text-center text-gray-400">
            No announcements available.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6 hover:shadow-lg hover:shadow-yellow-500/20 transition-all"
              >
               {announcement.imageUrl && (
  <div className="rounded-xl overflow-hidden border border-yellow-500 bg-[#0d2419] mb-5">
    <img
      src={announcement.imageUrl}
      alt={announcement.title}
      onClick={() => setSelectedImage(announcement.imageUrl)}
      className="w-full object-contain max-h-[500px] cursor-pointer hover:opacity-90 transition"
    />
  </div>

)}
                <h3 className="text-2xl font-bold text-yellow-400">
                  {announcement.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {announcement.description}
                </p>

                <p className="mt-4 text-sm text-yellow-300">
                  📅 {announcement.date}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Category: {announcement.category}
                </p>

                {announcement.pinned && (
                  <span className="inline-block mt-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    📌 Pinned
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative w-full h-full flex flex-col items-center justify-center p-6"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-yellow-400"
      >
        ✕
      </button>

      {/* Full image */}
      <img
        src={selectedImage}
        alt="Announcement"
        className="max-w-[95vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
      />

      {/* Download button */}
      <button
  onClick={async () => {
    try {
      const response = await fetch(selectedImage!);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "announcement.jpg";

      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download image.");
    }
  }}
  className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold"
>
  ⬇ Download Image
</button>
    </div>
  </div>
)}
    </section>
  );
}