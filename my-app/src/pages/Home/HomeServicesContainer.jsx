import Container from "../../components/Containers/Container.jsx";
import FilterBarForm from "./FilterBarForm.jsx";
import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { servicesMock } from "./services.jsx";
import { WipeProvider } from "../../context/WipeContextProvider/WipeContext.jsx";
import { motion } from "framer-motion";

const HomeServicesContainer = () => {
  const services = servicesMock.map((service, index) => (
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
  ));

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
          <Container component={FilterBarForm} />
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
          <Container component={services} />
        </motion.div>
      </div>
    </WipeProvider>
  );
};

export default HomeServicesContainer;
