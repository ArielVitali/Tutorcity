import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { createService } from "../../api/apiDataSource";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const index = () => {
  const { openToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    duration: "",
    type: "",
    frequency: "",
    description: "",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newServiceData = await createService(formData);

      if (newServiceData) {
        openToast("Service created successfully", "success");
        navigate(-1); // Redirect to the previous page
      } else {
        openToast("Error submitting the form", "error");
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const fields = [
    {
      label: "Service Name",
      type: "text",
      name: "name",
      id: "name",
      maxLength: 30,
      autoComplete: "given-name",
    },
    {
      label: "Service Category",
      type: "text",
      name: "category",
      id: "category",
      maxLength: 30,
      autoComplete: "family-name",
    },
    {
      label: "Duration",
      type: "number",
      step: 0.5,
      min: 0.5,
      max: 4,
      name: "duration",
      id: "duration",
      autoComplete: "family-name",
    },
    {
      label: "Frequency",
      type: "select",
      name: "frequency",
      id: "frequency",
      autoComplete: "family-name",
      options: [
        { label: "One time", value: "One time" },
        { label: "Weekly", value: "Weekly" },
        { label: "Monthly", value: "Monthly" },
      ],
    },
    {
      label: "Price",
      type: "number",
      name: "price",
      id: "price",
      autoComplete: "family-name",
    },
    {
      label: "Type",
      type: "select",
      name: "type",
      id: "type",
      autoComplete: "family-name",
      options: [
        { label: "Private", value: "Private" },
        { label: "Group", value: "Group" },
      ],
    },
    {
      label: "Description",
      type: "textarea",
      name: "description",
      maxLength: 150,
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
          <ActionsNav title="New Service" items={buttons} />
          <div className="mt-6 border-t border-gray-100  md:w-[1000px]  px-4 py-12 sm:px-6 lg:px-8 ">
            <LargeForm
              title={"Create Service"}
              description={
                "Provide service information for uploading to the platform."
              }
              fields={fields}
              onSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
