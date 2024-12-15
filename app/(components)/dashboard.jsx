import TicketCard from "./ticket-card";

const getTickets = async () => {
  const tickets = await fetch("http://localhost:3000/api/tickets", {
    method: "GET",
    cache: "no-store",
  });
  return tickets.json();
};

const Dashboard = async () => {
  const { data } = await getTickets();

  const uniqueCategories = Array.from(
    new Set(data.map((ticket) => ticket.category))
  );

  return (
    <div className="p-5">
      {data &&
        uniqueCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-4">
            <h2>{category}</h2>
            <div className="md:grid grid-cols-3 xl:grid-cols-4">
              {data
                .filter((t) => t.category === category)
                .map((ticket, idx) => (
                  <TicketCard key={idx} {...ticket} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
