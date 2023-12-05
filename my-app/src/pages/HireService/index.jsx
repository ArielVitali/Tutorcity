import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { createHiring } from "../../api/apiDataSource.js";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const index = () => {
  const { openToast } = useContext(ToastContext);
  let { state } = useLocation();
  const { serviceId } = state;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    meeting_time: "",
    email: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createHiring(serviceId, formData);
      if (response.status === 200) {
        openToast("Hiring created successfully", "success");
        navigate(-1);
      } else {
        openToast("Error creating the hiring", "error");
        console.error("Error submitting the form");
      }
    } catch (error) {
      openToast("Error submitting the form", "error");
      console.error("Error submitting the form:", error);
    }
  };

  const fields = [
    {
      label: "First name",
      type: "text",
      name: "first_name",
      id: "name",
      autoComplete: "given-name",
    },
    {
      label: "Last name",
      type: "text",
      name: "last_name",
      id: "lastName",
      autoComplete: "family-name",
    },
    {
      label: "Phone number",
      type: "text",
      name: "phone_number",
      id: "phoneNumber",
      autoComplete: "family-name",
    },
    {
      label: "Meeting Time",
      type: "select",
      name: "meeting_time",
      id: "meetingTime",
      autoComplete: "family-name",
      options: [
        { label: "Morning", value: "morning" },
        { label: "Afternoon", value: "afternoon" },
        { label: "Evening", value: "evening" },
      ],
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileFocus="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex justify-center">
        <div className="w-full lg:w-[1000px]">
          <ActionsNav title="Hire Service" items={buttons} />

          <div className="md:flex justify-center ">
            <div className="mt-6 border-t border-gray-100  md:w-[1000px]  px-4 py-12 sm:px-6 lg:px-8 ">
              <LargeForm
                title={"Personal Information"}
                description={
                  "Provide your personal information for getting in touch."
                }
                fields={fields}
                onSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
