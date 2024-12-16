import TicketForm from "@/app/(components)/ticket-form";
import { getTicketById } from "@/app/(lib)/tickets";

const TicketPage = async ({ params }) => {
  const { id } = params;
  const EDITMODE = id !== "new";
  let ticket = {};

  if (EDITMODE) {
    const { data } = await getTicketById(id);
    ticket = { ...data };
  }
  return <TicketForm isNewTicket={!EDITMODE} ticket={ticket}></TicketForm>;
};

export default TicketPage;
