import { Suspense } from "react";
import TicketCard from "./ticket-card";
import { getTickets } from "@/app/(lib)/tickets";
import Navigation from "./navigation";

const DashboardContent = async () => {
  const response = await getTickets();

  if (response.error) {
    console.error("Tickets fetch error:", response.error);
    return <div>Error loading tickets</div>;
  }

  const { data } = response;
  if (!data || data.length === 0) {
    return <div>No tickets found</div>;
  }

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
                .map((ticket) => (
                  <TicketCard key={ticket._id} {...ticket} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <Suspense fallback={<div>Loading tickets...</div>}>
      <Navigation />
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
