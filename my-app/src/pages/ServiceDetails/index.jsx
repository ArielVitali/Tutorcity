import DetailsContainer from "./DetailsContainer.jsx";
import CommentsContainer from "./Comments/CommentsContainer.jsx";
import { useLocation } from "react-router-dom";
import ServiceHomeComments from "./Comments/ServiceHomeComments.jsx";
import { commentsMock } from "./services.jsx";

const index = () => {
  let { state } = useLocation();
  const { name, admin, duration, frequency, rating, description, isPublished } =
    state;

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

export default index;
