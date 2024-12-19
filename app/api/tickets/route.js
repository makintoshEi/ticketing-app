import { Ticket } from "@/app/(models)/ticket.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await Ticket.create(body);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    console.log("tickets", tickets);
    return NextResponse.json({ data: tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
