import TicketCard from "./(components)/ticket-card";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="md:grid grid-cols-3 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
