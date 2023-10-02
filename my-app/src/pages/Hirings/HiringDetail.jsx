import DropdownSelector from "../../components/Dropdown/DropdownSelector.jsx";
import { useState } from "react";

const HiringDetail = ({ props }) => {
  const [status, setStatus] = useState(props.status); // Initialize status with the prop value

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    // You can perform any other actions here when the status changes.
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
    <div className="p-4 my-2 w-full  md:w-full bg-red-200 rounded-md">
      <div className="w-full my-2">
        <div className="w-full flex flex-wrap justify-center items-center">
          <h5>{props.title}</h5>
        </div>
        <div className="flex justify-center">
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
          <p className="md:mx-4">{props.name}</p>
        </div>
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Last name</p>
          <p className="md:mx-4">{props.lastName}</p>
        </div>
      </div>
      <div className="w-full my-2 sm:flex">
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Phone number</p>
          <p className="md:mx-4">{props.phoneNumber}</p>
        </div>
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Meeting time</p>
          <p className="md:mx-4">{props.meetingTime}hs</p>
        </div>
      </div>
      <div className="w-full my-2 sm:flex">
        <div className="w-full md:justify-between md:flex">
          <p className="md:mx-4 font-bold">Email</p>
          <p className="md:mx-4">{props.email}</p>
        </div>
      </div>
      <div className="w-full my-2">
        <div className="py-1">
          <p className="md:mx-4 font-bold">Description</p>
        </div>
        <div className="md:mx-4 bg-white rounded-md ">
          <p className="p-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HiringDetail;
