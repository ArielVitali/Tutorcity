import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const index = () => {
  const navigate = useNavigate();
  const fields = [
    {
      label: "Service Name",
      type: "text",
      name: "service-name",
      id: "service-name",
      autoComplete: "given-name",
    },
    {
      label: "Service Category",
      type: "text",
      name: "service-category",
      id: "service-category",
      autoComplete: "family-name",
    },
    {
      label: "Duration",
      type: "text",
      name: "duration",
      id: "duration",
      autoComplete: "family-name",
    },
    {
      label: "Frequency",
      type: "text",
      name: "frequency",
      id: "frequency",
      autoComplete: "family-name",
    },
    {
      label: "Price",
      type: "text",
      name: "price",
      id: "price",
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
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
