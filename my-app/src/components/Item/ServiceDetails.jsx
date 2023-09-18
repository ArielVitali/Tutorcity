import DetailsContainer from "../Containers/DetailsContainer.jsx";
import CommentsContainer from "../Comments/CommentsContainer.jsx";
import { useLocation } from "react-router-dom";
import ServiceHomeComments from "../Comments/ServiceHomeComments.jsx";
import { PiMaskHappyDuotone } from "react-icons/pi";

const ServiceDetails = () => {
  let { state } = useLocation();
  const { name, admin, duration, frequency, rating, description, isPublished } =
    state;

  const commentsMock = [
    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel illo ea aliquid pariatur! Ipsum ea suscipit provident minima repellendus totam! Aliquam aut quae accusamus fugiat error corrupti, iste iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione iste laudantium ab numquam, consequatur quia rem dolorum maiores optio aliquam ullam, blanditiis aliquid maxime illo repellendus molestiae nemo non!",
      name: "Adrian Rodriguez",
    },
    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment:
        "Excelente servicio, muy recomendable lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!",
      name: "Pedro Sanchez",
    },
    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment: "Excelente servicio, muy recomendable",
      name: "Juana Gomez",
    },

    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment: "Excelente servicio, muy recomendable",
      name: "Pablo Torres",
    },
    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment: "Excelente servicio, muy recomendable. Un saludo! :) ",
      name: "Adrian Rodriguez",
    },
    {
      profile: <PiMaskHappyDuotone classNameName="text-3xl" />,
      comment: "Excelente servicio, muy recomendable. Un saludo! :) ",
      name: "Adrian Rodriguez",
    },
  ];

  const comments = commentsMock.map((comment, index) => (
    <ServiceHomeComments
      key={index}
      profile={comment.profile}
      comment={comment.comment}
      name={comment.name}
    />
  ));

  return (
    <div className="p-4  md:container md:mx-auto content-start justify-center h-screen w-screen ">
      <DetailsContainer
        name={name}
        admin={admin}
        duration={duration}
        frequency={frequency}
        rating={rating}
        description={description}
        isPublished={isPublished}
      />

      <CommentsContainer comments={comments} serviceName={name} />
    </div>
  );
};

export default ServiceDetails;
