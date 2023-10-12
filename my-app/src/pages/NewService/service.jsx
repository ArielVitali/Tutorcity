import { publishedServicesMock } from "../HomeProvider/services.jsx";
import { PiGuitarDuotone } from "react-icons/pi";

export const NewServicePush = (formData) => {
  // Map the form data to the desired object format
  const transformedService = {
    icon: <PiGuitarDuotone className="text-3xl " />,
    name: formData["service-name"], // Assuming 'service-name' matches the form field name
    admin: "Juan Perez", // You can set this value as needed
    duration: formData["duration"], // Assuming 'duration' matches the form field name
    frequency: formData["frequency"], // Assuming 'frequency' matches the form field name
    rating: "4.5", // You can set this value as needed
    description: formData["description"], // Assuming 'description' matches the form field name
    isPublished: true, // You can set this value as needed
  };

  // Push the transformed object into your mock data
  publishedServicesMock.push(transformedService);

  // You can also log the transformed service object for verification
  console.log("Transformed Service:", transformedService);
};
