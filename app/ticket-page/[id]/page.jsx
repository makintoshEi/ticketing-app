import TicketForm from "@/app/(components)/ticket-form";

function TicketPage({ params }) {
  const { id } = params;
  return (
    <div>
      <TicketForm></TicketForm>
    </div>
  );
}

export default TicketPage;
