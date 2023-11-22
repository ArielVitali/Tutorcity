import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const index = () => {
  let { state } = useLocation();
  const { serviceId } = state;
  const [formData, setFormData] = useState({
    serviceId,
    name: "",
    category: "",
    duration: "",
    frequency: "",
    price: "",
    description: "",
    status: "Pending",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/hirings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate(-1);
      } else {
        console.error("Error submitting the form");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const fields = [
    {
      label: "First name",
      type: "text",
      name: "name",
      id: "name",
      autoComplete: "given-name",
    },
    {
      label: "Last name",
      type: "text",
      name: "lastName",
      id: "lastName",
      autoComplete: "family-name",
    },
    {
      label: "Phone number",
      type: "text",
      name: "phoneNumber",
      id: "phoneNumber",
      autoComplete: "family-name",
    },
    {
      label: "Meeting Time",
      type: "text",
      name: "meetingTime",
      id: "meetingTime",
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
