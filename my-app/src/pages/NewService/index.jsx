import ActionsNav from "../../components/ActionsNav/index.jsx";
import LargeForm from "../../components/Form/LargeForm.jsx";

const index = () => {
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

  return (
    <div className="w-full">
      <ActionsNav title="New Service" />
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
    </div>
  );
};

export default index;
