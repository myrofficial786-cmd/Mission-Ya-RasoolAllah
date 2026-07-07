"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function DonationsPage() {
  const [donationGoal, setDonationGoal] = useState(500000);
  const [amountRaised, setAmountRaised] = useState(125000);
  const [upiId, setUpiId] = useState("mission@upi");
  const saveDonationData = async () => {
  await setDoc(doc(db, "settings", "donation"), {
    donationGoal,
    amountRaised,
    upiId,
  });

  alert("Donation settings saved successfully!");
};
useEffect(() => {
  const loadDonationData = async () => {
    const docRef = doc(db, "settings", "donation");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      setDonationGoal(data.donationGoal);
      setAmountRaised(data.amountRaised);
      setUpiId(data.upiId);
    }
  };

  loadDonationData();
}, []);
const progress = Math.min(
  Math.round((amountRaised / donationGoal) * 100),
  100
);
  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">
      <Link
  href="/admin"
  className="inline-block mb-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
>
  ← Back to Dashboard
</Link>

<div className="flex justify-between items-center mb-8">
  <div>
    <h1 className="text-4xl font-bold text-yellow-400">
      Donations
    </h1>
    <p className="text-gray-400 mt-2">
      Manage donation goals and campaign details
    </p>
  </div>

  <div className="bg-[#112D20] px-4 py-2 rounded-lg border border-yellow-500">
    <span className="text-yellow-400">🟢 Admin Online</span>
  </div>
</div>

<div className="bg-[#112D20] rounded-2xl border border-yellow-500 p-8 space-y-6 mt-8">

  <div>
    <label className="block mb-2">Donation Goal (₹)</label>
    <input
  type="number"
  value={donationGoal}
  onChange={(e) => setDonationGoal(Number(e.target.value))}
  className="w-full bg-[#081C15] border border-yellow-500 rounded-lg p-3 outline-none"
/>
  </div>

  <div>
    <label className="block mb-2">Amount Raised (₹)</label>
    <input
  type="number"
  value={amountRaised}
  onChange={(e) => setAmountRaised(Number(e.target.value))}
  className="w-full bg-[#081C15] border border-yellow-500 rounded-lg p-3 outline-none"
/>
  </div>

  <div>
    <label className="block mb-2">UPI ID</label>
    <input
  type="text"
  value={upiId}
  onChange={(e) => setUpiId(e.target.value)}
  className="w-full bg-[#081C15] border border-yellow-500 rounded-lg p-3 outline-none"
/>
  </div>
<div>
  <label className="block mb-2">Progress Preview</label>

  <div className="w-full h-4 bg-[#081C15] rounded-full overflow-hidden border border-yellow-500">
    <div
      className="h-full bg-yellow-500 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>

  <p className="text-sm text-gray-400 mt-2">
    ₹{amountRaised.toLocaleString()} raised of ₹{donationGoal.toLocaleString()} goal ({progress}%)
  </p>
</div>
  <button 
    onClick={saveDonationData}
    className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
  >
    Save Changes
  </button>

</div>

</main>
  );
}