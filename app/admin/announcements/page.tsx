"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { checkAdmin } from "@/lib/adminAuth";
import Link from "next/link";

export default function AnnouncementsPage() {
  const router = useRouter();

  const [announcement, setAnnouncement] = useState({
    title: "",
    description: "",
    date: "",
    category: "",
    pinned: false,
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [allAnnouncements, setAllAnnouncements] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    loadAnnouncements();
    const unsubscribe = checkAdmin((isAdmin) => {
      if (!isAdmin) {
        router.push("/admin");
      }
    });

    return () => unsubscribe();
  }, [router]);
const deleteAnnouncement = async (id: string) => {
  const ok = confirm("Delete this announcement?");

  if (!ok) return;

  try {
    await deleteDoc(doc(db, "announcements", id));
    loadAnnouncements();
  } catch (error) {
    console.error(error);
    alert("Failed to delete announcement.");
  }
};
  const publishAnnouncement = async () => {
    try {
      setLoading(true);

      let imageUrl = "";

      // Upload image to Cloudinary (if selected)
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "mission_uploads");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/pifkg2g3/image/upload",
          formData
        );

        imageUrl = response.data.secure_url;
      }

      // Save announcement to Firestore
     const announcementData = {
  ...announcement,
  imageUrl,
};

if (isEditing && editingId) {
  await updateDoc(
    doc(db, "announcements", editingId),
    announcementData
  );
} else {
 if (isEditing && editingId) {
  await updateDoc(doc(db, "announcements", editingId), announcementData);

  setIsEditing(false);
  setEditingId(null);
} else {
  await addDoc(collection(db, "announcements"), announcementData);
}
  
}

      alert("Announcement published successfully!");

      // Reset form
      setAnnouncement({
        title: "",
        description: "",
        date: "",
        category: "",
        pinned: false,
      });
setEditingId(null);
setIsEditing(false);
loadAnnouncements();
      setImage(null);
      setPreview("");
    } catch (error) {
      console.error(error);
      alert("Failed to publish announcement.");
    } finally {
      setLoading(false);
    }
  };
  const editAnnouncement = (item: any) => {
  setAnnouncement({
    title: item.title,
    description: item.description,
    date: item.date,
    category: item.category,
    pinned: item.pinned,
  });

  setPreview(item.imageUrl || "");
  setEditingId(item.id);
  setIsEditing(true);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const loadAnnouncements = async () => {
  const snap = await getDocs(collection(db, "announcements"));

  const data = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  setAllAnnouncements(data);
};
  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">
      <Link
        href="/admin"
        className="inline-block mb-6 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        Announcements
      </h1>

      <div className="bg-[#112D20] rounded-2xl p-8 border border-yellow-500">

        <label className="block mb-2">Title</label>

        <input
          type="text"
          placeholder="Announcement title"
          value={announcement.title}
          onChange={(e) =>
            setAnnouncement({
              ...announcement,
              title: e.target.value,
            })
          }
          className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500 mb-6"
        />

        <label className="block mb-2">Description</label>

        <textarea
          value={announcement.description}
          onChange={(e) =>
            setAnnouncement({
              ...announcement,
              description: e.target.value,
            })
          }
          className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500 mb-6"
        />

        <label className="block mb-2">Date</label>

        <input
          type="date"
          value={announcement.date}
          onChange={(e) =>
            setAnnouncement({
              ...announcement,
              date: e.target.value,
            })
          }
          className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500 mb-6"
        />

        <label className="block mb-2">Category</label>

        <input
          type="text"
          placeholder="Event"
          value={announcement.category}
          onChange={(e) =>
            setAnnouncement({
              ...announcement,
              category: e.target.value,
            })
          }
          className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500 mb-6"
        />

        <label className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            checked={announcement.pinned}
            onChange={(e) =>
              setAnnouncement({
                ...announcement,
                pinned: e.target.checked,
              })
            }
          />
          Pinned Announcement
        </label>
<label className="block mb-2 font-semibold">
  Announcement Image
</label>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    if (!e.target.files?.[0]) return;

    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }}
  className="w-full p-3 rounded-lg bg-[#081C15] border border-yellow-500 mb-4"
/>

{preview && (
  <img
    src={preview}
    alt="Preview"
    className="w-full h-56 object-cover rounded-xl border border-yellow-500 mb-6"
  />
)}
       <button
  onClick={publishAnnouncement}
  disabled={loading}
  className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 disabled:opacity-50"
>
  {loading
  ? "Uploading..."
  : isEditing
  ? "Update Announcement"
  : "Publish Announcement"}
</button>

      </div>
      {isEditing && (
  <button
    onClick={() => {
      setIsEditing(false);
      setEditingId(null);

      setAnnouncement({
        title: "",
        description: "",
        date: "",
        category: "",
        pinned: false,
      });

      setImage(null);
      setPreview("");
    }}
    className="ml-4 mt-6 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold"
  >
    Cancel Edit
  </button>
)}
      <div className="mt-16">
  <h2 className="text-3xl font-bold text-yellow-400 mb-6">
    All Announcements
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {allAnnouncements.map((item) => (
      <div
        key={item.id}
        className="bg-[#112D20] border border-yellow-500 rounded-xl p-5"
      >
        {item.imageUrl && (
          <div className="bg-black rounded-xl overflow-hidden mb-4">
  <img
    src={item.imageUrl}
    alt={item.title}
    className="w-full max-h-[500px] object-contain cursor-pointer hover:scale-105 transition duration-300"
  />
</div>
        )}

        <h3 className="text-2xl font-bold text-yellow-400">
          {item.title}
        </h3>

        <p className="mt-2">{item.description}</p>

        <p className="mt-2 text-sm text-gray-300">
          📅 {item.date}
        </p>

        <p className="text-sm text-gray-400">
          {item.category}
        </p>

        <div className="flex gap-3 mt-5">
  <button
    onClick={() => editAnnouncement(item)}
    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
  >
    ✏️ Edit
  </button>

  <button
    onClick={() => deleteAnnouncement(item.id)}
    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
  >
    🗑 Delete
  </button>
</div>
      </div>
    ))}
  </div>
</div>
    </main>
  );
}