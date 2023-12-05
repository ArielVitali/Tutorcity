import HiringDetail from "./HiringDetail";
import { useState } from "react";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";

const List = ({ hirings, status, number, onStatusChange }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="p-4">
      <ul className="text-xl space-y-5 md:w-full">
        <div className="border-2 border-[#98c9a3] shadow-md p-5 rounded-xl space-y-2 ">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl">
              {status} ({number})
            </h3>
            <button
              className="bg-[#98c9a3] hover:bg-[#46a65b] rounded-full p-2"
              onClick={handleClick}
            >
              {show ? <HiArrowUp /> : <HiArrowDown />}
            </button>
          </div>
          {show &&
            hirings.map((element) => (
              <HiringDetail
                hiring={element}
                onStatusChange={onStatusChange}
                hirings={hirings}
              />
            ))}
        </div>
      </ul>
    </div>
  );
};

export default List;
