import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import List from "./List";
import { accepted } from "./services";

import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const accept = "Accepted";
  const cancel = "Canceled";
  const finalize = "Finalized";

  return (
    <div>
      <div className=" md:flex md:w-full items-center">
        <div>
          <button className="btn glass m-4" onClick={() => navigate(-1)}>
            <PiArrowCircleLeftDuotone className="text-4xl" />
          </button>
        </div>
        <div className="flex justify-center">
          <h3>Hirings</h3>
        </div>
      </div>
      <div className=" md:flex md:justify-center ">
        <div className="md:w-[1000px]">
          <div>
            {/* <h3 className="text-2xl font-semibold">Accepted</h3> */}
            <List Data={accepted} status={accept} number={accepted.length} />
            {/* <h3 className="text-2xl font-semibold">Canceled</h3> */}
            <List Data={accepted} status={cancel} />
            {/* <h3 className="text-2xl font-semibold">Finalized</h3> */}
            <List Data={accepted} status={finalize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
