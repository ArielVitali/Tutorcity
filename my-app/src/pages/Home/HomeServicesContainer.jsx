import Container from "../../components/Containers/Container.jsx";
import FilterBarForm from "./FilterBarForm.jsx";
import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { WipeProvider } from "../../context/WipeContextProvider/WipeContext.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch.js";
import { getServices } from "../../api/apiDataSource";

const HomeServicesContainer = () => {
  const [services, setServices] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    category: "",
    type: "",
    frequency: "",
    rating: "",
  });

  const updateSelectedOptions = (options) => {
    setSelectedOptions(options);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("selectedOptions", selectedOptions);
        const servicesData = await getServices(selectedOptions);
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [selectedOptions]);

  const servicesComponents = services
    ? services.map((service, index) => {
        return (
          <ServiceContainer
            key={index}
            service={service}
            bgColor={"bg-[#96e6b3]"}
          />
        );
      })
    : null;

  return (
    <WipeProvider>
      <div
        name="services"
        className="p-4  md:container md:mx-auto content-start justify-center w-full drop-shadow-lg "
      >
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
          <h1 className="flex justify-center h-fit">Services</h1>
          <Container
            components={
              <FilterBarForm updateSelectedOptions={updateSelectedOptions} />
            }
          />
        </motion.div>

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
          {services ? (
            <Container components={servicesComponents} />
          ) : (
            <div className="flex justify-center my-4">
              <span className="loading loading-spinner loading-lg text-center"></span>
            </div>
          )}
        </motion.div>
      </div>
    </WipeProvider>
  );
};

export default HomeServicesContainer;
