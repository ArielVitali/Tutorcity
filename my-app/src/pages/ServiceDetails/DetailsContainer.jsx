import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { PiNotePencilDuotone, PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import DropdownSelector from "../../components/Dropdown/DropdownSelector.jsx";
import { updateService, deleteService } from "../../api/apiDataSource";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const DetailsContainer = ({ service }) => {
  const { openToast } = useContext(ToastContext);
  const { session } = useContext(UserContext);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: service.name,
    admin: `${session && session.first_name + " " + session.last_name}`,
    price: service.price,
    duration: service.duration,
    frequency: service.frequency,
    type: service.type,
    rating: service.ratingAverage,
    description: service.description,
    isPublished: service.isPublished,
  });
  const [status, setStatus] = useState(service.isPublished);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleStatusChange = async (newStatus) => {
    try {
      if (newStatus === "delete") {
        await deleteService(service._id);
        openToast("Service deleted successfully", "success");
        navigate(-1);
      } else {
        await updateService(service._id, {
          isPublished: newStatus === "true",
        });
        setStatus(newStatus);
        openToast(`Service updated successfully`, "success");
        navigate(-1);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
      await updateService(service._id, editedValues);
      openToast("Service updated successfully", "success");
      setEditMode(false);
    } catch (error) {
      openToast("Error updating service", "error");
      throw error;
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
    {
      src: <option value="delete">Delete</option>,
    },
  ];

  const optionStyles = {
    true: "bg-blue-200",
    false: "bg-purple-200",
    delete: "bg-red-200",
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
        <div className="gap-2">
          <button
            className="btn glass bg-red-300 mr-2"
            onClick={() => setEditMode(false)}
          >
            Cancel
          </button>
          <button
            className="btn glass bg-slate-400 ml-2"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
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

          <div className="mt-6 border-t border-gray-100 px-4 sm:px-6 lg:px-8 lg:pb-16">
            <dl className="bg-green-200 rounded-2xl p-8 divide-y divide-gray-400 shadow-md">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Service
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0  md:w-full md:text-xl">
                    {editedValues.name}
                  </dd>
                ) : (
                  <input
                    className="input col-span-2 block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    value={editedValues.name}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900  md:w-full md:text-xl">
                  Provider
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                    {editedValues.admin}
                  </dd>
                ) : (
                  <input
                    className="input col-span-2 block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="admin"
                    disabled
                    value={editedValues.admin}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Price
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                    ${editedValues.price}
                  </dd>
                ) : (
                  <input
                    className="input col-span-2 block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    name="price"
                    min={1}
                    value={editedValues.price}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Duration
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0  md:w-full md:text-xl">
                    {editedValues.duration} hs
                  </dd>
                ) : (
                  <input
                    className="input col-span-2 block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    step={0.5}
                    min={0.5}
                    name="duration"
                    value={editedValues.duration}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900  md:w-full md:text-xl">
                  Rating
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-center items-center md:w-full md:text-xl">
                    {editedValues.rating}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 m-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </dd>
                ) : (
                  <input
                    className="input col-span-2 block w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="rating"
                    value={editedValues.rating}
                    onChange={handleInputChange}
                  />
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Frequency
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                    {editedValues.frequency}
                  </dd>
                ) : (
                  <select
                    name="frequency"
                    value={editedValues.frequency}
                    onChange={handleInputChange}
                    className="select block w-full col-span-2 rounded-md p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled>
                      Select frequency
                    </option>

                    <option value="One time">One time</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900  md:w-full md:text-xl">
                  Type
                </dt>
                {!editMode ? (
                  <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0  md:w-full md:text-xl">
                    {editedValues.type}
                  </dd>
                ) : (
                  <select
                    name="type"
                    value={editedValues.type}
                    onChange={handleInputChange}
                    className="select block w-full col-span-2 rounded-md p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled>
                      Select type
                    </option>

                    <option value="Private">Private</option>
                    <option value="Group">Group</option>
                  </select>
                )}
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0  ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Description
                </dt>
                {!editMode ? (
                  <dd className="break-words mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                    {editedValues.description}
                  </dd>
                ) : (
                  <textarea
                    type="text"
                    name="description"
                    value={editedValues.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="col-span-2 block textarea w-full rounded-md border-0 p-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Service
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  {service.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Provider
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  {service.user.first_name} {service.user.last_name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Price
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  ${service.price}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Duration
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  {service.duration} hs
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Rating
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 p-1.5 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-center items-center md:w-full md:text-xl">
                  {service.ratingAverage}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 m-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Frequency
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  {service.frequency}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Type
                </dt>
                <dd className="text-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
                  {service.type}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <dt className="text-sm font-medium leading-6 text-gray-900 md:w-full md:text-xl">
                  Description
                </dt>
                <dd className=" break-words mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:w-full md:text-xl">
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
