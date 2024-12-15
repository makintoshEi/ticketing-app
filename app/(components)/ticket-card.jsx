import DeleteBlock from "./delete-block";
import PriorityDisplay from "./priority-display";
import ProgressBar from "./progress-bar";
import StatusDisplay from "./status-display";

const TicketCard = ({
  category,
  description,
  priority,
  progress,
  status,
  title,
  createdAt,
}) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priorityNumber={priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>{title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex- flex-col">
          <p className="text-xs my-1">{createdAt}</p>
          <ProgressBar progress={progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
