"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import {
  Search,
  Eye,
  Trash2,
  UserPlus,
} from "lucide-react";

export default function VolunteersAdmin() {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState<any>(null);

  useEffect(() => {
    loadVolunteers();
  }, []);

  const loadVolunteers = async () => {
    const snapshot = await getDocs(collection(db, "volunteers"));

    const data = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    setVolunteers(data);
  };

  const updateStatus = async (
    id: string,
    status: string
  ) => {
    await updateDoc(doc(db, "volunteers", id), {
      status,
    });

    loadVolunteers();
  };

  const deleteVolunteer = async (id: string) => {
    if (!confirm("Delete this volunteer?")) return;

    await deleteDoc(doc(db, "volunteers", id));

    loadVolunteers();
  };

  const filtered = volunteers.filter((v) =>
    (
      (v.name || "") +
      (v.email || "") +
      (v.phone || "") +
      (v.city || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-yellow-400">
          👥 Volunteer Management
        </h1>

        <button className="bg-yellow-500 text-black px-5 py-3 rounded-xl flex gap-2 font-bold">
          <UserPlus size={18} />
          Add Volunteer
        </button>

      </div>

      <div className="relative mb-6">

        <Search
          className="absolute left-4 top-3 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search volunteer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#10271F] border border-yellow-500 rounded-xl py-3 pl-12 pr-4 outline-none"
        />

      </div>

      <div className="overflow-x-auto rounded-xl border border-yellow-500">

        <table className="w-full">

          <thead className="bg-[#112D20]">

            <tr>

              <th className="p-4 text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">City</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((v) => (

              <tr
                key={v.id}
                className="border-t border-yellow-500/20"
              >

                <td className="p-4">{v.name}</td>

                <td>{v.email}</td>

                <td>{v.phone}</td>

                <td>{v.city}</td>

                <td>

                  <select
                    value={v.status || "Pending"}
                    onChange={(e) =>
                      updateStatus(v.id, e.target.value)
                    }
                    className="bg-[#10271F] border border-yellow-500 rounded-lg px-3 py-2"
                  >
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                    <option>Inactive</option>
                  </select>

                </td>

                <td>

                  <div className="flex gap-3 justify-center">

                    <button
                      onClick={() => setSelectedVolunteer(v)}
                    >
                      <Eye
                        className="text-blue-400"
                        size={18}
                      />
                    </button>

                    <button
                      onClick={() =>
                        deleteVolunteer(v.id)
                      }
                    >
                      <Trash2
                        className="text-red-500"
                        size={18}
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selectedVolunteer && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">

          <div className="bg-[#10271F] rounded-2xl p-8 border border-yellow-500 w-[450px]">

            <h2 className="text-2xl text-yellow-400 font-bold mb-6">
              Volunteer Details
            </h2>

            <div className="space-y-3">

              <p><b>Name:</b> {selectedVolunteer.name}</p>
              <p><b>Age:</b> {selectedVolunteer.age}</p>
              <p><b>Email:</b> {selectedVolunteer.email}</p>
              <p><b>Phone:</b> {selectedVolunteer.phone}</p>
              <p><b>City:</b> {selectedVolunteer.city}</p>
              <p><b>State:</b> {selectedVolunteer.state}</p>
              <p><b>Occupation:</b> {selectedVolunteer.occupation}</p>
              <p><b>Skills:</b> {selectedVolunteer.skills}</p>
              <p><b>Reason:</b></p>

              <div className="bg-[#081C15] rounded-lg p-3">
                {selectedVolunteer.reason}
              </div>

            </div>

            <button
              onClick={() =>
                setSelectedVolunteer(null)
              }
              className="mt-8 bg-yellow-500 text-black w-full py-3 rounded-xl font-bold"
            >
              Close
            </button>

          </div>

        </div>

      )}

    </main>
  );
}