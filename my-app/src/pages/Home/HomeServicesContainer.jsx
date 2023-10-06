import Container from "../../components/Containers/Container.jsx";
import FilterBarForm from "./FilterBarForm.jsx";
import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { servicesMock } from "./services.jsx";
import { WipeProvider } from "../../context/WipeContextProvider/WipeContext.jsx";

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
    />
  ));

  return (
    <WipeProvider>
      <div className="p-4  md:container md:mx-auto content-start justify-center w-full bg-green-300">
        <h1 className="flex justify-center h-fit">Services</h1>
        <Container component={FilterBarForm} />
        <Container component={services} />
      </div>
    </WipeProvider>
  );
};

export default HomeServicesContainer;
