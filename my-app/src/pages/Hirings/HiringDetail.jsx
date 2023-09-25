const HiringDetail = ({ props }) => {
  return (
    <div className="p-4 my-2 w-full  md:w-full bg-red-200 rounded-md">
      <div className="w-full my-2">
        <div className="w-full flex justify-center">
          <h5>{props.title}</h5>
        </div>
        <div className="w-full flex justify-center">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium  mr-2 p-1.5 m-2  rounded dark:bg-blue-900 dark:text-blue-300">
            Status
          </span>
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
