"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

const ADMIN_EMAIL = "myrofficial786@gmail.com";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
console.log(result.user.email);
      if (result.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        alert("Access denied.");
        return;
      }

      setIsAdmin(true);
      alert(`Welcome ${result.user.displayName}!`);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      if (user.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        await signOut(auth);
        setIsAdmin(false);
        alert("Access denied.");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#081c15] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-[#081c15] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">
          Admin Login
        </h1>

        <button
          onClick={handleLogin}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Sign in with Google
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#081c15] text-white p-10">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="group bg-[#112D20] p-6 rounded-2xl border border-yellow-500">
          <h2 className="text-2xl font-bold mb-3">🕌 Salah Times</h2>
          <p>Edit today's prayer timings.</p>
          <Link href="/admin/salah-times">
            <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>

        <div className="group bg-[#112D20] p-6 rounded-2xl border border-yellow-500">
          <h2 className="text-2xl font-bold mb-3">📢 Announcements</h2>
          <p>Add or remove announcements.</p>
          <Link href="/admin/announcements">
            <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>

        <div className="group bg-[#112D20] p-6 rounded-2xl border border-yellow-500">
          <h2 className="text-2xl font-bold mb-3">📊 Website Statistics</h2>
          <p>Update students, activities and impact.</p>
          <Link href="/admin/website-statistics">
            <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>

        <div className="group bg-[#112D20] p-6 rounded-2xl border border-yellow-500">
          <h2 className="text-2xl font-bold mb-3">💰 Donations</h2>
          <p>Manage donation goals and details.</p>
          <Link href="/admin/donations">
            <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg">
              Edit
            </button>
          </Link>
        </div>
<div className="group bg-[#112D20] p-6 rounded-2xl border border-yellow-500">
  <h2 className="text-2xl font-bold mb-3">
    👥 Volunteers
  </h2>

  <p>View, edit and manage volunteer applications.</p>

  <Link href="/admin/volunteers">
    <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg">
      Edit
    </button>
  </Link>
</div>
      </div>
    </main>
  );
}