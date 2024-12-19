"use client";
import { useAuth } from "@/app/(context)/auth-context";
import { GoogleSignIn } from "./(components)/authentication";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = () => {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user.uid) {
      router.push("/dashboard");
    }
  }, [user.uid, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      {!user.uid && <GoogleSignIn />}
    </div>
  );
};

export default Page;
