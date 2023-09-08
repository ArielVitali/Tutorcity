import { PiGuitarDuotone, PiClockDuotone, PiStarDuotone } from "react-icons/pi";

const ServiceContainer = () => {
  return (
    <div className="grid grid-cols-1 p-4 my-2 w-full md:flex md:w-full  md:justify-between items-center bg-red-200 rounded-md">
      <div
        className="flex items-center justify-center md:w-fill"
        data-tip="guitar"
      >
        <button className="md:btn md:tooltip flex items-center justify-center md:w-fill">
          <PiGuitarDuotone className="text-3xl " />
        </button>
      </div>
      <div className="grid grid-cols-1">
        <div className=" flex items-center justify-center ">
          <h3 className="truncate my-2 max-w-[300px] md:w-fill">
            Clase de Guitarra
          </h3>
        </div>
        <p className="flex items-center justify-center md:w-fill">
          by Juan Perez
        </p>
      </div>
      <div className="flex items-center justify-center md:w-fill ">
        <h5 className="flex md:flex items-center my-2">
          2:30 HS <PiClockDuotone className="mx-2" />
        </h5>
        <p>Weekly</p>
      </div>
      <div className="flex items-center justify-center md:w-fill">
        <h5 className="flex items-center my-2">
          4.5 <PiStarDuotone className="mx-2" />
        </h5>
      </div>
      <div className="flex items-center justify-center md:w-fill">
        <button className="btn btn-outline">View service</button>
      </div>
    </div>
  );
};

export default ServiceContainer;
