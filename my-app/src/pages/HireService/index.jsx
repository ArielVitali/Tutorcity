import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";

const index = () => {
  const fields = [
    {
      label: "First name",
      type: "text",
      name: "first-name",
      id: "first-name",
      autoComplete: "given-name",
    },
    {
      label: "Last name",
      type: "text",
      name: "last-name",
      id: "last-name",
      autoComplete: "family-name",
    },
    {
      label: "Phone number",
      type: "text",
      name: "phone-number",
      id: "phone-number",
      autoComplete: "family-name",
    },
    {
      label: "Meeting Time",
      type: "text",
      name: "meeting-time",
      id: "meeting-time",
      autoComplete: "family-name",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      id: "email",
      autoComplete: "family-name",
    },
    {
      label: "Description",
      type: "textarea",
      name: "description",
      id: "description",
      autoComplete: "family-name",
    },
  ];

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <ActionsNav title="Hire Service" items={buttons} />
        <div className="md:flex justify-center ">
          <div className="mt-6 border-t border-gray-100  md:w-[1000px]  px-4 py-12 sm:px-6 lg:px-8 ">
            <LargeForm
              title={"Personal Information"}
              description={
                "Provide your personal information for getting in touch."
              }
              fields={fields}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
