import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const ADMIN_EMAIL = "myrofficial786@gmail.com";

export function checkAdmin(callback: (isAdmin: boolean) => void) {
  return onAuthStateChanged(auth, (user) => {
    callback(!!user && user.email === ADMIN_EMAIL);
  });
}