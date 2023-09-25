import { PiClockDuotone, PiStarDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider/AuthContext";
import Badge from "../../components/PublishedBadge/Badge.jsx";

const ServiceContainer = ({
  icon,
  name,
  admin,
  duration,
  frequency,
  rating,
  description,
  isPublished,
}) => {
  const published = <Badge isPublished={isPublished} />;

  const { isLoggedIn } = useAuth();

  return (
    <div className="grid grid-cols-1 p-4 my-2 w-full md:flex md:w-full  md:justify-between items-center bg-red-200 rounded-md">
      <div
        className="flex items-center justify-center md:w-full md:h-full"
        data-tip="guitar"
      >
        <button className="md:btn md:tooltip flex items-center justify-center md:w-fill">
          {icon}
        </button>
      </div>
      <div className="grid grid-cols-1 md:w-full md:h-full ">
        <div className=" flex items-center justify-center ">
          <h3 className="truncate my-2 max-w-[300px] md:w-full md:h-full md:flex md:justify-center">
            {name}
          </h3>
        </div>
        <p className="flex items-center justify-center md:w-full">{admin}</p>
      </div>
      <div className="flex items-center justify-center md:w-full  md:h-full">
        <h5 className="flex md:flex items-center my-2">
          {duration} <PiClockDuotone className="mx-2" />
        </h5>
        <p>{frequency}</p>
      </div>
      <div className="flex items-center justify-center md:w-full md:h-full">
        <h5 className="flex items-center my-2">
          {rating} <PiStarDuotone className="mx-2" />
        </h5>
      </div>
      {isLoggedIn && (
        <div className="flex items-center justify-center md:w-full md:h-full">
          {published}
        </div>
      )}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <Link
          to="/ServiceDetails"
          state={{
            name,
            admin,
            duration,
            frequency,
            rating,
            description,
            isPublished,
          }}
        >
          <button className="btn btn-outline">View service</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceContainer;
