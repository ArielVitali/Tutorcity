import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider/AuthContext.jsx";
import { PiNotePencilDuotone, PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import DropdownSelector from "../../components/Dropdown/DropdownSelector.jsx";

const DetailsContainer = ({
  id,
  name,
  admin,
  duration,
  frequency,
  rating,
  description,
  isPublished,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name,
    admin,
    duration,
    frequency,
    rating,
    description,
    isPublished,
  });
  const [status, setStatus] = useState(isPublished); // Initialize status with the prop value

  const handleStatusChange = async (newStatus) => {
    try {
      await fetch(`http://localhost:8080/services/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...editedValues,
          isPublished: newStatus === "true",
        }),
      });
      setStatus(newStatus);
    } catch (error) {
      console.log(error);
    }
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

  // Step 2: Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Step 4: Handle changes to the edited values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  // Step 5: Handle submission of edited values
  const handleSubmit = async () => {
    try {
      await fetch(`http://localhost:8080/services/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedValues),
      });
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
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
        <Link to={"/hireService"} state={{ serviceId: id }}>
          <button className="btn btn-sm btn-outline md:btn md:btn-outline">
            Hire it!
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="flex justify-center">
      {isLoggedIn ? (
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
            <dl className="divide-y divide-gray-200">
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
          <ActionsNav title={name} items={UserNavButtons} />
          <div className="mt-6 border-t border-gray-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <dl className="divide-y divide-gray-200">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Service
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Provider
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {admin}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Duration
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {duration}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Frequency
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {frequency}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Rating
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {rating}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:flex md:justify-center ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:flex md:justify-center md:w-full md:text-xl">
                  Description
                </dt>
                <dd className="lg:text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {description}
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
