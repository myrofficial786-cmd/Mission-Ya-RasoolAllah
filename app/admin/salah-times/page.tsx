"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { checkAdmin } from "@/lib/adminAuth";
export default function SalahTimesPage() {
  const router = useRouter();
const [times, setTimes] = useState({
  fajr: "",
  dhuhr: "",
  asr: "",
  maghrib: "",
  isha: "",
  jumuah: "",
});
const saveTimes = async () => {
  try {
    await updateDoc(doc(db, "settings", "salahTimes"), times);
    alert("Salah times updated successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to update Salah times.");
  }
};
  useEffect(() => {
    const unsubscribe = checkAdmin((isAdmin) => {
      if (!isAdmin) {
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [router]);
useEffect(() => {
  const loadTimes = async () => {
    const ref = doc(db, "settings", "salahTimes");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      setTimes(snap.data() as any);
    }
  };

  loadTimes();
}, []);
  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">
      <Link
  href="/admin"
  className="inline-block mb-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
>
  ← Back to Dashboard
</Link>
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Salah Times
      </h1>

      <div className="bg-[#112D20] rounded-2xl p-8 border border-yellow-500">

  <h2 className="text-2xl font-bold mb-6">
    Today's Salah Times
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <label className="block mb-2">Fajr</label>
      <input
  type="time"
  value={times.fajr}
  onChange={(e) =>
    setTimes({ ...times, fajr: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
/>
    
    </div>

    <div>
      <label className="block mb-2">Dhuhr</label>
      <input
  type="time"
  value={times.dhuhr}
  onChange={(e) =>
    setTimes({ ...times, dhuhr: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
/>
    
    </div>

    <div>
      <label className="block mb-2">Asr</label>
      <input
  type="time"
  value={times.asr}
  onChange={(e) =>
    setTimes({ ...times, asr: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
      />
    </div>

    <div>
      <label className="block mb-2">Maghrib</label>
      <input
  type="time"
  value={times.maghrib}
  onChange={(e) =>
    setTimes({ ...times, maghrib: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
/>
    </div>

    <div>
      <label className="block mb-2">Isha</label>
      <input
  type="time"
  value={times.isha}
  onChange={(e) =>
    setTimes({ ...times, isha: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
      />
    </div>
    <div>
  <label className="block mb-2">Jumu'ah</label>
  <input
  type="time"
  value={times.jumuah}
  onChange={(e) =>
    setTimes({ ...times, jumuah: e.target.value })
  }
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500"
/>
</div>

  </div>

  <button
  onClick={saveTimes}
  className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400"
>
  Save Changes
</button>
</div>
    </main>
  );
}