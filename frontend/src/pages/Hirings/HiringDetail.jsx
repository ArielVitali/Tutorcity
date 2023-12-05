import DropdownSelector from "../../components/Dropdown/DropdownSelector.jsx";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { updateHiring } from "../../api/apiDataSource";

const HiringDetail = ({ hiring, onStatusChange, hirings }) => {
  const [status, setStatus] = useState(hiring.status);

  const handleStatusChange = async (newStatus) => {
    try {
      await updateHiring(hiring._id, { status: newStatus });
      setStatus(newStatus);
      onStatusChange(hiring._id, newStatus, hirings);
    } catch (error) {
      throw new Error(error);
    }
  };

  const options = [
    {
      src: <option value="Accepted">Accepted</option>,
    },
    {
      src: (
        <option className="bg-grey-200" value="Finalized">
          Finalized
        </option>
      ),
    },
    {
      src: (
        <option className="bg-grey-200" value="Canceled">
          Canceled
        </option>
      ),
    },
    {
      src: (
        <option className="bg-grey-200" value="Pending">
          Pending
        </option>
      ),
    },
  ];

  const optionStyles = {
    Accepted: "bg-green-200",
    Finalized: "bg-blue-200",
    Canceled: "bg-red-200",
    Pending: "bg-yellow-200",
  };

  return (
    <div className="p-4 my-2 w-full  md:w-full bg-[#98c9a3] rounded-md">
      <div className="w-full my-2">
        <div className="w-full flex flex-wrap justify-center items-center">
          <h5 className="text-center py-2">{hiring.service.name}</h5>
        </div>
        <div className="flex justify-center ">
          <DropdownSelector
            optionStyles={optionStyles}
            options={options}
            status={status}
            onStatusChange={handleStatusChange}
          />
        </div>
      </div>

      <div className="w-full my-2 sm:flex">
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Name</p>
          <p className="md:mx-4">{hiring.first_name}</p>
        </div>
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Last name</p>
          <p className="md:mx-4">{hiring.last_name}</p>
        </div>
      </div>
      <div className="w-full my-2 sm:flex">
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Phone number</p>
          <p className="md:mx-4">{hiring.phone_number}</p>
        </div>
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Meeting time</p>
          <p className="md:mx-4">{hiring.meeting_time}hs</p>
        </div>
      </div>
      <div className="w-full my-2 sm:flex">
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Email</p>
          <p className="md:mx-4">{hiring.email}</p>
        </div>
      </div>
      <div className="w-full my-2">
        <div className="py-1">
          <p className="md:mx-4 font-bold">Description</p>
        </div>
        <div className="md:mx-4 bg-white rounded-md ">
          <p className="p-4">{hiring.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HiringDetail;
