"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../(lib)/firebase";

export const GoogleSignIn = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({ userId: result.user.uid }),
      });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};
