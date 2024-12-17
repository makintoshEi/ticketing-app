"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../(lib)/firebase";

export const GoogleSignIn = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("current logged user:", result);
      const user = result.user;
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
