"use client";
import { useAuth } from "@/app/(context)/auth-context";
import { GoogleSignIn } from "./(components)/authentication";
import Dashboard from "./(components)/dashboard";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const Page = () => {
  const user = useAuth();
  return (
    <div className="flex justify-center items-center h-screen">
      {user?.uid ? <Dashboard /> : <GoogleSignIn />}
    </div>
  );
};

export default Page;
