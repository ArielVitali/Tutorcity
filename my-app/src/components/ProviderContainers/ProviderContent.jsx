import React from "react";
import {
  PiGuitarDuotone,
  PiCameraDuotone,
  PiBabyDuotone,
} from "react-icons/pi";
import ServiceContainer from "../Containers/ServiceContainer.jsx";

const ProviderContent = () => {
  const publishedServicesMock = [
    {
      //this is a mock object, it will be replaced by the data from the database
      icon: <PiGuitarDuotone className="text-3xl " />,
      name: "Clase de Guitarra",
      admin: "Juan Perez",
      duration: "2:30 HS",
      frequency: "Weekly",
      rating: "4.5",
      description:
        "Clases de guitarra para principiantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat harum, architecto, ullam unde minima autem, maxime asperiores eius voluptatibus pariatur quidem! Error ut exercitationem consequatur reiciendis vel consectetur veritatis.",
      isPublished: true,
    },
    {
      //this is a mock object, it will be replaced by the data from the database
      icon: <PiCameraDuotone className="text-3xl " />,
      name: "Content Making",
      admin: "Santiago Gonzalez",
      duration: "1:30 HS",
      frequency: "Monthly",
      rating: "3.5",
      description:
        "Clases de guitarra para principiantes Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat harum, architecto, ullam unde minima autem, maxime asperiores eius voluptatibus pariatur quidem! Error ut exercitationem consequatur reiciendis vel consectetur veritatis.",
      isPublished: true,
    },
  ];
  const unpublishedServicesMock = [
    {
      //this is a mock object, it will be replaced by the data from the database
      icon: <PiBabyDuotone className="text-3xl " />,
      name: "Baby Sitting",
      admin: "Maria Rodriguez",
      duration: "1:30 HS",
      frequency: "daily",
      rating: "3.5",
      description: "hola",
      isPublished: false,
    },
  ];

  return (
    <div>
      <ul>
        <h4>Published</h4>
        {publishedServicesMock.map((service, index) => (
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
        ))}
      </ul>
      <ul>
        <h4>Unpublished</h4>
        {unpublishedServicesMock.map((service, index) => (
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
        ))}
      </ul>
    </div>
  );
};

export default ProviderContent;
