import TicketCard from "./(components)/ticket-card";

const getTickets = async () => {
  const tickets = await fetch("http://localhost:3000/api/tickets", {
    method: "GET",
    cache: "no-store",
  });
  return tickets.json();
};

const Dashboard = async () => {
  const { data } = await getTickets();
  return (
    <div className="p-5">
      <div className="md:grid grid-cols-3 xl:grid-cols-4">
        {data &&
          data.map((ticket, idx) => <TicketCard key={idx} {...ticket} />)}
      </div>
    </div>
  );
};

export default Dashboard;
