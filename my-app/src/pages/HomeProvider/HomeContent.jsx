import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { publishedServicesMock, unpublishedServicesMock } from "./services.jsx";
import { useState, useEffect } from "react";

const HomeContent = () => {
  const [publishedServices, setPublishedServices] = useState([]);
  const [unpublishedServices, setUnpublishedServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:8080/services");
        const data = await response.json();

        const publishedServices = data.filter((service) => service.isPublished);
        const unpublishedServices = data.filter(
          (service) => !service.isPublished
        );

        setPublishedServices(publishedServices);
        setUnpublishedServices(unpublishedServices);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const publishedComponents = publishedServices
    ? publishedServices.map((service, index) => (
        <li key={index}>
          <ServiceContainer
            key={index}
            icon={service.icon}
            name={service.name}
            admin={service.admin}
            duration={service.duration}
            frequency={service.frequency}
            rating={service.rating}
            description={service.description}
            isPublished={true}
            bgColor={"bg-[#96e6b3] shadow-2xl"}
          />
        </li>
      ))
    : null;

  const unpublishedComponents = unpublishedServices
    ? unpublishedServices.map((service, index) => (
        <li key={index}>
          <ServiceContainer
            key={index}
            icon={service.icon}
            name={service.name}
            admin={service.admin}
            duration={service.duration}
            frequency={service.frequency}
            rating={service.rating}
            description={service.description}
            isPublished={false}
            bgColor={"bg-[#96e6b3] shadow-2xl"}
          />
        </li>
      ))
    : null;

  return (
    <div>
      <ul className="my-4">
        <h5 className="md:text-3xl font-semibold">Published</h5>
        {isLoading ? (
          <div className="flex justify-center my-4">
            <span className="loading loading-spinner loading-lg text-center"></span>
          </div>
        ) : (
          publishedComponents
        )}
      </ul>
      <ul className="my-4">
        <h5 className="md:text-3xl font-semibold">Unpublished</h5>
        {isLoading ? (
          <div className="flex justify-center my-4">
            <span className="loading loading-spinner loading-lg text-center"></span>
          </div>
        ) : (
          unpublishedComponents
        )}
      </ul>
    </div>
  );
};

export default HomeContent;
