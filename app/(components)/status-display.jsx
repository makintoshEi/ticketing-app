const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    switch (status) {
      case "not started":
        return "bg-red-200";
      case "in progress":
        return "bg-blue-200";
      case "done":
        return "bg-green-200";
      default:
        return "bg-yellow-200";
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
