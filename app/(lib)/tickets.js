const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

const getTickets = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/tickets`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    // Validate data structure
    if (!data || !Array.isArray(data.data)) {
      throw new Error("Invalid data structure");
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch tickets:", error);
    // Return a structured error response
    return {
      data: [],
      error: "Error fetching tickets!!",
    };
  }
};

const getTicketById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/tickets/${id}`, {
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
  const res = await fetch(`${baseUrl}/api/tickets/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Failed to delete a ticket");
  }
  return res.json();
};

export { getTickets, getTicketById, deleteTicketById };
