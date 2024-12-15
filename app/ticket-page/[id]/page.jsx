function TicketPage(inputs) {
  console.log("inputs :", inputs);
  const {
    params: { id },
  } = inputs;
  return <div>TicketPage {id}</div>;
}

export default TicketPage;
