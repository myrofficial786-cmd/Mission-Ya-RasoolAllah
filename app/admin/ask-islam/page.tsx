"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

interface AskIslamItem {
  id: string;
  question: string;
  answer: string;
  audioUrl?: string;
  createdAt?: any;
}

interface PendingQuestion {
  id: string;
  question: string;
  createdAt?: any;
}

export default function AdminAskIslam() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [audioFile, setAudioFile] =
    useState<File | null>(null);

  const [questions, setQuestions] =
    useState<AskIslamItem[]>([]);

  const [pendingQuestions, setPendingQuestions] =
    useState<PendingQuestion[]>([]);

  const [editingId, setEditingId] =
    useState("");

  const [pendingId, setPendingId] =
    useState("");

  const [expandedQuestionId, setExpandedQuestionId] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const uploadAudio = async () => {

    if (!audioFile) return "";

    const formData = new FormData();

    formData.append("file", audioFile);

    formData.append(
      "upload_preset",
      "ask_islam_audio"
    );

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/pifkg2g3/video/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        data.error?.message || "Upload failed"
      );
    }

    return data.secure_url;
  };

  const loadQuestions = async () => {

    const q = query(
      collection(db, "askIslam"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<AskIslamItem, "id">),
    }));

    setQuestions(list);

  };

  const loadPendingQuestions = async () => {

    const snapshot = await getDocs(
      collection(db, "userQuestions")
    );

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as PendingQuestion),
    }));

    setPendingQuestions(list);

  };

  useEffect(() => {

    loadQuestions();
    loadPendingQuestions();

  }, []);

  const saveQuestion = async () => {

    if (!question.trim() || !answer.trim()) {
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

        const updateData: any = {
          question,
          answer,
        };

        if (audioUrl) {
          updateData.audioUrl = audioUrl;
        }

        await updateDoc(
          doc(db, "askIslam", editingId),
          updateData
        );

        alert("Question updated successfully!");

      } else {

        await addDoc(collection(db, "askIslam"), {
          question,
          answer,
          audioUrl,
          createdAt: serverTimestamp(),
        });

        if (pendingId) {
          await deleteDoc(
            doc(db, "userQuestions", pendingId)
          );
        }

        alert("Answer published successfully!");
      }

      setQuestion("");
      setAnswer("");
      setAudioFile(null);
      setEditingId("");
      setPendingId("");
      setExpandedQuestionId("");

      await loadQuestions();
      await loadPendingQuestions();

    } catch (err: any) {

      console.error(err);

      alert(
        err?.message ||
        "Something went wrong."
      );

    }

    setLoading(false);

  };

  const deleteQuestion = async (id: string) => {

    if (!confirm("Delete this question?")) return;

    await deleteDoc(doc(db, "askIslam", id));

    loadQuestions();

  };

  const editQuestion = (item: AskIslamItem) => {

    setEditingId(item.id);

    setQuestion(item.question);

    setAnswer(item.answer);

    setExpandedQuestionId("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const answerPending = (item: PendingQuestion) => {

    setPendingId(item.id);

    setEditingId("");

    setQuestion(item.question);

    setAnswer("");

    setExpandedQuestionId(item.id);

  };

  const filteredQuestions = questions.filter((item) =>
    item.question
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
  <main className="min-h-screen bg-[#081C15] text-white p-8">

    <Link
      href="/admin"
      className="inline-block mb-8 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
    >
      ← Back to Dashboard
    </Link>

    <h1 className="text-4xl font-bold text-yellow-400 mb-8">
      Ask Islam Admin
    </h1>

    <div className="bg-[#112D20] border border-yellow-500 rounded-2xl p-8">

      <h2 className="text-3xl font-bold text-yellow-400 mb-8">
        Pending Questions
      </h2>

      {pendingQuestions.length === 0 ? (

        <p className="text-gray-400">
          No pending questions.
        </p>

      ) : (

        <div className="space-y-6">

          {pendingQuestions.map((item) => (

            <div
              key={item.id}
              className="bg-[#081C15] border border-yellow-500 rounded-xl p-6"
            >

              <h3 className="text-xl font-bold">
                {item.question}
              </h3>

              <button
                onClick={() => answerPending(item)}
                className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Answer This Question
              </button>

              {expandedQuestionId === item.id && (

                <div className="mt-6 border-t border-yellow-500 pt-6">

                  <textarea
                    rows={7}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Write the answer..."
                    className="w-full mb-5 p-4 rounded-xl bg-[#112D20] border border-yellow-500 outline-none resize-none"
                  />

                  <label className="block text-yellow-400 font-semibold mb-2">
                    Upload Audio (Optional)
                  </label>

                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => {
                      if (e.target.files?.length) {
                        setAudioFile(e.target.files[0]);
                      }
                    }}
                    className="mb-6 w-full"
                  />

                  <div className="flex gap-3">

                    <button
                      onClick={saveQuestion}
                      disabled={loading}
                      className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400"
                    >
                      {loading
                        ? "Publishing..."
                        : "Publish Answer"}
                    </button>

                    <button
                      onClick={() => {
                        setExpandedQuestionId("");
                        setPendingId("");
                        setQuestion("");
                        setAnswer("");
                        setAudioFile(null);
                      }}
                      className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      )}

    </div>

    <div className="mt-12">

      <input
        type="text"
        placeholder="Search Published Questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 p-4 rounded-xl bg-[#112D20] border border-yellow-500 outline-none"
      />

      <h2 className="text-3xl font-bold text-yellow-400 mb-8">
        Published Questions
      </h2>
      <div className="space-y-6">

        {filteredQuestions.map((item) => (

          <div
            key={item.id}
            className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6"
          >

            <h2 className="text-2xl font-bold text-yellow-400">
              {item.question}
            </h2>

            <p className="mt-4 whitespace-pre-line">
              {item.answer}
            </p>

            {item.audioUrl && (
              <audio
                controls
                className="mt-5 w-full"
              >
                <source
                  src={item.audioUrl}
                />
                Your browser does not support the audio element.
              </audio>
            )}

            <div className="flex gap-4 mt-6">

              <button
                onClick={() => editQuestion(item)}
                className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Edit
              </button>

              <button
                onClick={() => deleteQuestion(item.id)}
                className="bg-red-600 px-5 py-2 rounded-lg font-semibold hover:bg-red-500"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

        {filteredQuestions.length === 0 && (

          <div className="text-center text-gray-400 py-10">
            No published questions found.
          </div>

        )}

      </div>

    </div>

  </main>
);
}