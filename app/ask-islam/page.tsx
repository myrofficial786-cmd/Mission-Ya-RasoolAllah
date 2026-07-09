"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

export default function AdminAskIslam() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const [questions, setQuestions] = useState<any[]>([]);
  const [editingId, setEditingId] = useState("");

  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    const snapshot = await getDocs(collection(db, "askIslam"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setQuestions(data);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const uploadAudio = async () => {
    if (!audioFile) return "";

    const formData = new FormData();

    formData.append("file", audioFile);
    formData.append("upload_preset", "ask_islam_audio");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/plrkg2g3/video/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    return data.secure_url;
  };

  const saveQuestion = async () => {
    if (!question || !answer) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      let audioUrl = "";

      if (audioFile) {
        audioUrl = await uploadAudio();
      }

      if (editingId) {
        await updateDoc(doc(db, "askIslam", editingId), {
          question,
          answer,
          audioUrl,
        });

        alert("Question updated.");
      } else {
        await addDoc(collection(db, "askIslam"), {
          question,
          answer,
          audioUrl,
          createdAt: serverTimestamp(),
        });

        alert("Question added.");
      }

      setQuestion("");
      setAnswer("");
      setAudioFile(null);
      setEditingId("");

      await loadQuestions();
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  const deleteQuestion = async (id: string) => {
    if (!confirm("Delete this question?")) return;

    await deleteDoc(doc(db, "askIslam", id));

    loadQuestions();
  };

  const editQuestion = (item: any) => {
    setEditingId(item.id);
    setQuestion(item.question);
    setAnswer(item.answer);
  };

  return (
    <main className="min-h-screen bg-[#081C15] text-white p-10">

  <Link
    href="/admin"
    className="inline-block mb-8 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
  >
    ← Back to Dashboard
  </Link>

  <h1 className="text-4xl font-bold text-yellow-400 mb-8">
    Ask Islam
  </h1>

  <div className="bg-[#112D20] border border-yellow-500 rounded-2xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      {editingId ? "Edit Question" : "Add Question"}
    </h2>

    <input
      type="text"
      placeholder="Question"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      className="w-full mb-5 p-4 rounded-xl bg-[#081C15] border border-yellow-500 outline-none"
    />

    <textarea
      placeholder="Answer"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      rows={8}
      className="w-full mb-5 p-4 rounded-xl bg-[#081C15] border border-yellow-500 outline-none resize-none"
    />

    <div className="mb-6">

      <label className="block mb-2 font-semibold text-yellow-400">
        Audio (Optional)
      </label>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) => {
          if (e.target.files?.length) {
            setAudioFile(e.target.files[0]);
          }
        }}
        className="w-full"
      />

    </div>

    <button
      onClick={saveQuestion}
      disabled={loading}
      className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
    >
      {loading
        ? "Saving..."
        : editingId
        ? "Update Question"
        : "Save Question"}
    </button>

  </div>

  <h2 className="text-3xl font-bold text-yellow-400 mt-12 mb-6">
    Existing Questions
  </h2>

  <div className="space-y-6">

    {questions.map((item) => (

      <div
        key={item.id}
        className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6"
      >

        <h3 className="text-2xl font-bold text-yellow-400">
          {item.question}
        </h3>

        <p className="mt-3 whitespace-pre-line">
          {item.answer}
        </p>

        {item.audioUrl && (

          <audio
            controls
            className="mt-5 w-full"
          >
            <source
              src={item.audioUrl}
              type="audio/mpeg"
            />
          </audio>

        )}

        <div className="flex gap-4 mt-6">

          <button
            onClick={() => editQuestion(item)}
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold"
          >
            Edit
          </button>

          <button
            onClick={() => deleteQuestion(item.id)}
            className="bg-red-600 px-5 py-2 rounded-lg font-semibold"
          >
            Delete
          </button>

        </div>

      </div>

    ))}

    {questions.length === 0 && (

      <div className="text-center text-gray-400 py-10">
        No questions added yet.
      </div>

    )}

  </div>

</main>
);
}