import { Ticket } from "@/app/(models)/ticket.model";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const ticket = await Ticket.findById(id);
    return NextResponse.json({ data: ticket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    await Ticket.findByIdAndUpdate(id, { ...body });
    return NextResponse.json(
      { data: "Actualizado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
