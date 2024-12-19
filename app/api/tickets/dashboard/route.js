export async function GET() {
  try {
    const tickets = await Ticket.find();
    console.log("tickets", tickets);
    return NextResponse.json({ data: tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
