import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const index = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className=" md:flex md:w-full items-center">
      <div>
        <button className="btn glass m-4" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-4xl" />
        </button>
      </div>
      <div className="flex justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default index;
