"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export default function AskIslam() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [qaList, setQaList] = useState<any[]>([]);

  const loadQuestions = async () => {
    const snapshot = await getDocs(collection(db, "askIslam"));

    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setQaList(list);
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const submitQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter your question.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "userQuestions"), {
        question,
        createdAt: serverTimestamp(),
      });

      alert("Your question has been submitted successfully.");

      setQuestion("");
    } catch (err) {
      console.log(err);
      alert("Failed to submit question.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#081C15] text-white p-8">

      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">
        Ask Islam
      </h1>

      <div className="max-w-3xl mx-auto bg-[#112D20] border border-yellow-500 rounded-2xl p-8">

        <h2 className="text-2xl font-bold mb-5">
          Ask Your Question
        </h2>

        <textarea
          rows={5}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Write your question here..."
          className="w-full bg-[#081C15] border border-yellow-500 rounded-xl p-4 outline-none resize-none"
        />

        <button
          onClick={submitQuestion}
          disabled={loading}
          className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400"
        >
          {loading ? "Submitting..." : "Submit Question"}
        </button>

      </div>

      <div className="max-w-4xl mx-auto mt-16">

        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          Previously Answered Questions
        </h2>

        <div className="space-y-6">

          {qaList.map((item: any) => (

            <div
              key={item.id}
              className="bg-[#112D20] border border-yellow-500 rounded-2xl p-6 overflow-hidden"
            >

              <h3 className="text-2xl font-bold text-yellow-400 break-all whitespace-pre-wrap w-full"
              style={{ overflowWrap: "anywhere" }}
              >
                {item.question}
              </h3>

              <p className="mt-4 whitespace-pre-wrap w-full"
              style={{ overflowWrap: "anywhere" }}
              >
                {item.answer}
              </p>

              {item.audioUrl && (
                <audio controls className="w-full mt-5">
                  <source src={item.audioUrl} />
                </audio>
              )}

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}