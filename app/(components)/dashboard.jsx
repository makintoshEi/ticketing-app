import { Suspense } from "react";
import { getTickets } from "@/app/(lib)/tickets";
import TicketCard from "./ticket-card";
import Navigation from "./navigation";
import UserMessages from "./user-messages";

const DashboardContent = async () => {
  const response = await getTickets();

  if (response.error) {
    return <UserMessages message="Error loading tickets" />;
  }

  const { data } = response;
  if (!data || data.length === 0) {
    return <UserMessages message="No tickets found" />;
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
    <>
      <Navigation />
      <Suspense
        fallback={<UserMessages message="Loading tickets, please wait..." />}
      >
        <DashboardContent />
      </Suspense>
    </>
  );
};

export default Dashboard;
