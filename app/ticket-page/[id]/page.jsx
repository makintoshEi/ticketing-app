import TicketForm from "@/app/(components)/ticket-form";
import { getTicketById } from "@/app/(lib)/tickets";

const TicketPage = async ({ params }) => {
  const { id } = params;
  const EDITMODE = id !== "new";
  let ticket = {};

  if (EDITMODE) {
    console.log("edit mode id : ", id);
    const { data } = await getTicketById(id);
    console.log("data : ", data);
    ticket = { ...data };
  }
  return <TicketForm isNewTicket={!EDITMODE} ticket={ticket}></TicketForm>;
};

export default TicketPage;
