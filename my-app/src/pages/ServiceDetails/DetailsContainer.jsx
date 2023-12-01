import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { PiNotePencilDuotone, PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import DropdownSelector from "../../components/Dropdown/DropdownSelector.jsx";
import { updateService } from "../../api/apiDataSource";
import { useFetch } from "../../hooks/useFetch.js";

const DetailsContainer = ({ service }) => {
  const { session } = useContext(UserContext);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: service.name,
    admin: `${service.user.first_name + service.user.last_name}`,
    duration: service.duration,
    frequency: service.frequency,
    rating: service.ratingAverage,
    description: service.description,
    isPublished: service.isPublished,
  });
  const [status, setStatus] = useState(service.isPublished);

  console.log(service);

  const handleStatusChange = async (newStatus) => {
    try {
      useFetch(
        updateService(service.id, { isPublished: newStatus === "true" })
      );
      setStatus(newStatus);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      useFetch(updateService(service.id, editedValues));
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const options = [
    {
      src: <option value="true">Published</option>,
    },
    {
      src: <option value="false">Unpublished</option>,
    },
  ];

  const optionStyles = {
    true: "bg-blue-200",
    false: "bg-purple-200",
  };

  const NavButtonsEdit = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
    {
      element: (
        <div className="flex items-center gap-x-4">
          <DropdownSelector
            status={status}
            onStatusChange={handleStatusChange}
            optionStyles={optionStyles}
            options={options}
          />
          <button className="btn glass" onClick={toggleEditMode}>
            <PiNotePencilDuotone className="text-3xl" />
          </button>
        </div>
      ),
    },
  ];

  const NavButtonsSaveChanges = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
    {
      element: (
        <button className="btn glass" onClick={handleSubmit}>
          Save Changes
        </button>
      ),
    },
  ];

  const UserNavButtons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
    {
      element: (
        <Link to={"/hireService"} state={{ serviceId: service._id }}>
          <button className="btn btn-sm btn-outline md:btn md:btn-outline">
            Hire it!
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="flex justify-center">
      {session ? (
        <div className="w-full lg:w-[1000px]">
          {!editMode ? (
            <ActionsNav title={editedValues.name} items={NavButtonsEdit} />
          ) : (
            <ActionsNav
              title={editedValues.name}
              items={NavButtonsSaveChanges}
            />
          )}

          <div className="mt-6 border-t border-gray-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <dl className="bg-green-200 rounded-2xl lg:p-8 divide-y divide-gray-400 shadow-md">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Service
                </dt>
                {!editMode ? (
                  <dd className="mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.name}
                  </dd>
                ) : (
                  <input
                    className="block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    value={editedValues.name}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Provider
                </dt>
                {!editMode ? (
                  <dd className="mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.admin}
                  </dd>
                ) : (
                  <input
                    className="block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="admin"
                    value={editedValues.admin}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Duration
                </dt>
                {!editMode ? (
                  <dd className="mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.duration}
                  </dd>
                ) : (
                  <input
                    className="block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="duration"
                    value={editedValues.duration}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Frequency
                </dt>
                {!editMode ? (
                  <dd className="mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.frequency}
                  </dd>
                ) : (
                  <input
                    className="block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    value={editedValues.frequency}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Rating
                </dt>
                {!editMode ? (
                  <dd className="mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.rating}
                  </dd>
                ) : (
                  <input
                    className=" block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="rating"
                    value={editedValues.rating}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Description
                </dt>
                {!editMode ? (
                  <dd className="lg:text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                    {editedValues.description}
                  </dd>
                ) : (
                  <textarea
                    type="text"
                    name="description"
                    value={editedValues.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="block textarea w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                )}
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-[1000px]">
          <ActionsNav title={service.name} items={UserNavButtons} />
          <div className="mt-6 border-t border-gray-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <dl className="bg-green-200 rounded-2xl lg:p-8 divide-y divide-gray-400 shadow-md">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Service
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Provider
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.user.first_name} {service.user.last_name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Duration
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.duration}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Frequency
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.frequency}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Rating
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.ratingAverage}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Description
                </dt>
                <dd className="break-words lg:text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {service.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsContainer;
