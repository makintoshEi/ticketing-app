const getTickets = async () => {
  const tickets = await fetch(`${process.env.ENVIRONMENT}/api/tickets`, {
    method: "GET",
    cache: "no-store",
  });
  return tickets.json();
};

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${process.env.ENVIRONMENT}/api/tickets/${id}`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to get a ticket");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteTicketById = async (id) => {
  const res = await fetch(`${process.env.ENVIRONMENT}/api/tickets/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete a ticket");
  }
  return res.json();
};

export { getTickets, getTicketById, deleteTicketById };
