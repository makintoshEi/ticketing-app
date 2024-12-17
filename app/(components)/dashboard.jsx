import { notFound } from "next/navigation";
import TicketCard from "./ticket-card";
import { getTickets } from "@/app/(lib)/tickets";
import { Suspense } from "react";

const DashboardContent = async () => {
  try {
    const { data } = await getTickets();
    if (!data || data.length === 0) {
      return notFound();
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
                  .map((ticket, idx) => (
                    <TicketCard key={idx} {...ticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    );
  } catch (error) {
    console.error("Dashboard rendering error:", error);
    return notFound();
  }
};

const Dashboard = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;
