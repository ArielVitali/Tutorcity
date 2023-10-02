import ServiceContainer from "../../components/Containers/ServiceContainer.jsx";
import { publishedServicesMock, unpublishedServicesMock } from "./services.jsx";

const HomeContent = () => {
  return (
    <div>
      <ul>
        <h5 className="md:text-3xl font-semibold">Published</h5>
        {publishedServicesMock.map((service, index) => (
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
            />
          </li>
        ))}
      </ul>
      <ul>
        <h5 className="md:text-3xl font-semibold">Unpublished</h5>
        {unpublishedServicesMock.map((service, index) => (
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeContent;
