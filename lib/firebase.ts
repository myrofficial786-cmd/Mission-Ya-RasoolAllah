import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC42Wkr7wfpjcCliXWD0qB7xgmIHNokB4",
  authDomain: "mission-ya-rasoolallah.firebaseapp.com",
  projectId: "mission-ya-rasoolallah",
  storageBucket: "mission-ya-rasoolallah.firebasestorage.app",
  messagingSenderId: "562228573698",
  appId: "1:562228573698:web:b775ed246fb176b951591b",
  measurementId: "G-8S5J3QRKN1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();