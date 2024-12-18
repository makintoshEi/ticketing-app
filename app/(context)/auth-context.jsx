"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../(lib)/firebase";

// Create the AuthContext
const AuthContext = createContext({
  user: null,
  isLoading: true,
  accessToken: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  displayName: null,
  uid: null,
});

// Create a provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("currentUser:", currentUser);
        const { accessToken, email, phoneNumber, photoURL, displayName, uid } =
          currentUser;

        setUser({
          accessToken,
          email,
          phoneNumber,
          photoURL,
          displayName,
          uid,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        accessToken: user?.accessToken,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        photoURL: user?.photoURL,
        displayName: user?.displayName,
        uid: user?.uid,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
