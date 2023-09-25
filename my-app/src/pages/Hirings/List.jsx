import HiringDetail from "./HiringDetail";
import { useState } from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

const List = ({ Data, status, number }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="p-4">
      <ul className="text-xl space-y-5 md:w-full">
        <div className="border-2 border-red-300 shadow-md p-5 rounded-xl space-y-2 ">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">
              {status} ({number})
            </h3>
            <button
              className="bg-red-100 hover:bg-red-300 rounded-full p-2"
              onClick={handleClick}
            >
              {show ? <HiArrowUp /> : <HiArrowDown />}
            </button>
          </div>
          {show && Data.map((element) => <HiringDetail props={element} />)}
        </div>
      </ul>
    </div>
  );
};

export default List;
