import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priorityNumber }) => {
  return (
    <div className="flex justify-start align-baseline">
      {Array.from({ length: priorityNumber }).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faFire} className="text-red-400" />
      ))}
    </div>
  );
};

export default PriorityDisplay;
