import ActionsNav from "../../components/ActionsNav/index.jsx";
import List from "./List";
import { accepted } from "./services";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";

const index = () => {
  const accept = "Accepted";
  const cancel = "Canceled";
  const finalize = "Finalized";

  const navigate = useNavigate();

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <ActionsNav title="Hirings" items={buttons} />
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
