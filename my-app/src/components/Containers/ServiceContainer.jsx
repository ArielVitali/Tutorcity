import { PiClockDuotone, PiStarDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { useFetch } from "../../hooks/useFetch.js";
import { getPublicUserData } from "../../api/apiDataSource.js";

const ServiceContainer = ({ service, bgColor }) => {
  const { session } = useContext(UserContext);

  return (
    <div
      className={`border border-[#181f1c] grid grid-cols-1 p-4 my-2 gap-4 lg:flex md:flex-1 md:w-full  justify-between items-center ${
        bgColor ? bgColor : "bg-[#ffffff]"
      } rounded-md`}
    >
      {/* ICON */}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <div className="flex items-center justify-center">{service.icon}</div>
      </div>

      {/* NAME */}
      <div className="grid grid-cols-1 md:w-full md:h-full container mx-auto">
        <div className="flex justify-center">
          <h3 className="text-center truncate">{service.name}</h3>
        </div>
      </div>

      {/* DURATION */}
      <div className="flex items-center justify-center sm:grid sm:grid-cols-1  md:w-full  md:h-full">
        <div className="flex flex-wrap justify-center items-center">
          <h5 className="flex justify-center items-center ">
            {service.duration}
          </h5>
          <PiClockDuotone className="text-lg  mx-2" />
        </div>
        <div className="flex justify-center ">
          <p className="flex justify-center">{service.frequency}</p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <h5 className="flex items-center my-2">
          {service.ratingAverage} <PiStarDuotone className="mx-2" />
        </h5>
      </div>

      {/* VIEW SERVICE */}
      <div className="flex items-center justify-center md:w-full md:h-full">
        <Link
          to={session ? "/service-admin-details" : "/service-details"}
          state={{
            service,
          }}
        >
          <button className="btn btn-outline">View service</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceContainer;
