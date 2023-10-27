import Container from "../../components/Containers/Container.jsx";
import FilterBarForm from "./FilterBarForm.jsx";
import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { WipeProvider } from "../../context/WipeContextProvider/WipeContext.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        const filters = {};
        for (const key in selectedOptions) {
          if (selectedOptions[key] !== "") {
            filters[key] = selectedOptions[key];
          }
        }

        const baseUrl = "http://localhost:8080/services";

        // Create a URLSearchParams object to handle query parameters
        const params = new URLSearchParams();
        for (const key in filters) {
          params.append(key, filters[key]);
        }

        // Combine the base URL with the query parameters
        const url = `${baseUrl}?${params.toString()}`;

        const response = await fetch(url);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();

    // Set up an interval to fetch services every 60 seconds (adjust as needed)
    const fetchServicesInterval = setInterval(fetchServices, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(fetchServicesInterval);
    };
  }, [selectedOptions]);

  const servicesComponents = services
    ? services.map((service, index) => (
        <ServiceContainer
          key={index}
          icon={service.icon}
          name={service.name}
          admin={service.admin}
          duration={service.duration}
          frequency={service.frequency}
          rating={service.rating}
          description={service.description}
          isPublished={service.isPublished}
          bgColor={"bg-[#96e6b3]"}
        />
      ))
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
