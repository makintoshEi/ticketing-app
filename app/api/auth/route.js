import { createSession } from "@/app/(lib)/session";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("body:", body);
    await createSession(body);
    return NextResponse.json({ message: "User logged in" }, { status: 200 });
  } catch (error) {
    console.error("Firebase sign-in error:", error);
  }
};
