import DetailsContainer from "./DetailsContainer.jsx";
import CommentsContainer from "./Comments/CommentsContainer.jsx";
import { useLocation } from "react-router-dom";
import ServiceHomeComments from "./Comments/ServiceHomeComments.jsx";
import { commentsMock } from "./services.jsx";
import { motion } from "framer-motion";
import { useEffect } from "react";

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

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileFocus="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="lg:flex justify-center ">
          <DetailsContainer
            name={name}
            admin={admin}
            duration={duration}
            frequency={frequency}
            rating={rating}
            description={description}
            isPublished={isPublished}
          />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        whileFocus="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <CommentsContainer comments={comments} serviceName={name} />
      </motion.div>
    </div>
  );
};

export default index;
