import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider/AuthContext.jsx";
import { PiNotePencilDuotone, PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useToggleModal } from "../../utils/Modals/ToggleModal.jsx";
import ModalForm from "../../components/Modals/ModalForm.jsx";
import Badge from "../../components/PublishedBadge/Badge.jsx";
import { useNavigate } from "react-router-dom";

const DetailsContainer = ({
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
  const { isModalOpen, openModal, closeModal } = useToggleModal();
  const published = <Badge isPublished={isPublished} />;

  return (
    <div className="flex justify-center">
      {isLoggedIn ? (
        <div className="w-full">
          <div className=" justify-between sm:px-2  md:justify-between md:items-center">
            <div className="w-full flex justify-between">
              <button className="btn glass" onClick={() => navigate(-1)}>
                <PiArrowCircleLeftDuotone className="text-3xl" />
              </button>

              <button className="btn glass " onClick={openModal}>
                <PiNotePencilDuotone className="text-3xl" />
              </button>
            </div>
            <div className="w-full ">
              <h3 className="font-semibold text-gray-900 flex justify-center">
                {name}
              </h3>
            </div>
          </div>
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
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-between px-4 sm:px-2 md:flex md:justify-between md:items-center">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <Link to={"/hireService"}>
              <button className="btn btn-sm btn-outline md:btn md:btn-outline">
                Hire it!
              </button>
            </Link>
          </div>
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
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 md:flex md:justify-center md:w-full md:text-xl">
                  {description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ModalForm
          title={"Modify service"}
          input={[
            { label: "Name", value: name },
            { label: "Admin", value: admin },
            { label: "Duration", value: duration },
            { label: "Frequency", value: frequency },
            { label: "Rating", value: rating },
          ]}
          textarea={[{ label: "Description", value: description }]}
          closeModal={closeModal}
          other={published}
        />
      )}
    </div>
  );
};

export default DetailsContainer;
