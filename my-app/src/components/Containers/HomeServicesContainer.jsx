import FilterBarInputs from "../FilterBar/FilterBarInputs.jsx";
import Container from "./Container.jsx";
import ServiceContainer from "./ServiceContainer.jsx";

const HomeServicesContainer = () => {
  const services = [ServiceContainer, ServiceContainer];

  return (
    <div className="p-4  md:container md:mx-auto content-start justify-center h-screen w-screen bg-green-300">
      <h1 className="flex justify-center h-fit">Services</h1>
      <Container component={FilterBarInputs} />
      <Container component={services} />
    </div>
  );
};

export default HomeServicesContainer;
