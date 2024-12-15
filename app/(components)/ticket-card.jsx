import Link from "next/link";
import DeleteBlock from "./delete-block";
import PriorityDisplay from "./priority-display";
import ProgressBar from "./progress-bar";
import StatusDisplay from "./status-display";

const TicketCard = ({
  description,
  _id,
  priority,
  progress,
  status,
  title,
  createdAt,
}) => {
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priorityNumber={priority} />
        <div className="ml-auto">
          <DeleteBlock id={_id} />
        </div>
      </div>
      <Link href={`/ticket-page/${_id}`}>
        <h4>{title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex- flex-col">
            <p className="text-xs my-1">{formatTimestamp(createdAt)}</p>
            <ProgressBar progress={progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
