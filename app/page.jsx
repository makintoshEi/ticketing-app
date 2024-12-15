import TicketCard from "./(components)/ticket-card";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="md:grid grid-cols-3 xl:grid-cols-4">
        <TicketCard priorityNumber={3} />
        <TicketCard priorityNumber={4} />
        <TicketCard priorityNumber={5} />
        <TicketCard priorityNumber={1} />
      </div>
    </div>
  );
};

export default Dashboard;
