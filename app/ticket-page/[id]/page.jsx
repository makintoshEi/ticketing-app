import TicketForm from "@/app/(components)/ticket-form";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to get a ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const { id } = params;
  const EDITMODE = id !== "new";
  let ticket = {};

  if (EDITMODE) {
    const { data } = await getTicketById(id);
    ticket = { ...data };
  }
  return (
    <div>
      <TicketForm {...ticket}></TicketForm>
    </div>
  );
};

export default TicketPage;
