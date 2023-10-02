import { PiClockDuotone, PiStarDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

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
  return (
    <div className="grid grid-cols-1 p-4 my-2 gap-4 lg:flex md:flex-1 md:w-full  justify-between items-center bg-red-200 rounded-md">
      {/* ICON */}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <button
          data-tip={name}
          className="lg:btn md:tooltip flex items-center justify-center md:w-fill"
        >
          {icon}
        </button>
      </div>

      {/* NAME */}
      <div className="grid grid-cols-1 md:w-full md:h-full container mx-auto">
        <div className="flex justify-center">
          <h3 className="truncate">{name}</h3>
        </div>
        <div className="flex justify-center">
          <p className="flex justify-center">{admin}</p>
        </div>
      </div>

      {/* DURATION */}
      <div className="flex items-center justify-center sm:grid sm:grid-cols-1  md:w-full  md:h-full">
        <div className="flex flex-wrap justify-center items-center">
          <h5 className="flex justify-center items-center ">{duration}</h5>
          <PiClockDuotone className="text-lg  mx-2" />
        </div>
        <div className="flex justify-center ">
          <p className="flex justify-center">{frequency}</p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <h5 className="flex items-center my-2">
          {rating} <PiStarDuotone className="mx-2" />
        </h5>
      </div>

      {/* VIEW SERVICE */}
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
