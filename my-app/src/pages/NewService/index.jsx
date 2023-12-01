import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { createService } from "../../api/apiDataSource";

const index = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    duration: "",
    frequency: "",
    price: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = useFetch(createService(formData));

      if (data) {
        navigate(-1); // Redirect to the previous page
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const navigate = useNavigate();
  const fields = [
    {
      label: "Service Name",
      type: "text",
      name: "name", //name
      id: "name",
      autoComplete: "given-name",
    },
    {
      label: "Service Category",
      type: "text",
      name: "category", //category
      id: "category",
      autoComplete: "family-name",
    },
    {
      label: "Duration",
      type: "text",
      name: "duration", //duration
      id: "duration",
      autoComplete: "family-name",
    },
    {
      label: "Frequency",
      type: "text",
      name: "frequency", //frequency
      id: "frequency",
      autoComplete: "family-name",
    },
    {
      label: "Price",
      type: "text",
      name: "price", //price
      id: "price",
      autoComplete: "family-name",
    },
    {
      label: "Type",
      type: "text",
      name: "type", //image
      id: "type",
      autoComplete: "family-name",
    },
    {
      label: "Description",
      type: "textarea",
      name: "description", //description
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
    <div className="w-full">
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
        <ActionsNav title="New Service" items={buttons} />
        <div className="md:flex justify-center ">
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
      </motion.div>
    </div>
  );
};

export default index;
