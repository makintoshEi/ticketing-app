import { Ticket } from "@/app/(models)/ticket.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await Ticket.create(body);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
