import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/index.jsx";
import { getServicesByUser } from "../../api/apiDataSource";

const HomeContent = () => {
  const [publishedServices, setPublishedServices] = useState([]);
  const [unpublishedServices, setUnpublishedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const serviceData = await getServicesByUser();
        const publishedServices = serviceData.filter(
          (service) => service.isPublished
        );
        const unpublishedServices = serviceData.filter(
          (service) => !service.isPublished
        );
        setPublishedServices(publishedServices);
        setUnpublishedServices(unpublishedServices);
      } catch (error) {
        console.error("Error trying to get services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const publishedComponents = loading
    ? Spinner
    : publishedServices.map((service, index) => (
        <li key={index}>
          <ServiceContainer
            key={index}
            service={service}
            bgColor={"bg-[#96e6b3] shadow-2xl"}
          />
        </li>
      ));

  const unpublishedComponents = loading
    ? Spinner
    : unpublishedServices.map((service, index) => (
        <li key={index}>
          <ServiceContainer
            key={index}
            service={service}
            bgColor={"bg-[#96e6b3] shadow-2xl"}
          />
        </li>
      ));

  return (
    <div>
      <ul className="my-4">
        <h5 className="md:text-3xl font-semibold">Published</h5>
        {loading && !publishedComponents.length ? (
          <div className="flex justify-center my-4">
            <span className="loading loading-spinner loading-lg text-center"></span>
          </div>
        ) : (
          publishedComponents
        )}
      </ul>
      <ul className="my-4">
        <h5 className="md:text-3xl font-semibold">Unpublished</h5>
        {loading && !unpublishedComponents.length ? (
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
