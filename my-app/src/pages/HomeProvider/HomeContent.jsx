import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { getServicesByUser } from "../../api/apiDataSource";

const HomeContent = () => {
  const [publishedServices, setPublishedServices] = useState([]);
  const [unpublishedServices, setUnpublishedServices] = useState([]);
  const { data, loading } = useFetch(getServicesByUser);

  useEffect(() => {
    if (!loading && data) {
      const publishedServices = data.filter((service) => service.isPublished);
      const unpublishedServices = data.filter(
        (service) => !service.isPublished
      );
      setPublishedServices(publishedServices);
      setUnpublishedServices(unpublishedServices);
    }
  }, [data, loading]);

  const publishedComponents = publishedServices.map((service, index) => (
    <li key={index}>
      <ServiceContainer
        key={index}
        service={service}
        bgColor={"bg-[#96e6b3] shadow-2xl"}
      />
    </li>
  ));

  const unpublishedComponents = unpublishedServices.map((service, index) => (
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
