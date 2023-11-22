import DetailsContainer from "./DetailsContainer.jsx";
import CommentsContainer from "./Comments/CommentsContainer.jsx";
import { useLocation } from "react-router-dom";
import ServiceHomeComments from "./Comments/ServiceHomeComments.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const index = () => {
  const [comments, setComments] = useState(null);
  let { state } = useLocation();
  const {
    id,
    name,
    admin,
    duration,
    frequency,
    rating,
    description,
    isPublished,
  } = state;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/comments?service=${id}&status=Accepted`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();

    // Set up an interval to fetch comments every 60 seconds (adjust as needed)
    const fetchCommentsInterval = setInterval(fetchComments, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(fetchCommentsInterval);
    };
  }, []);

  const commentsComponent = comments
    ? comments.map((comment, index) => (
        <ServiceHomeComments
          key={index}
          comment={comment.comment}
          name={comment.name}
        />
      ))
    : null;

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
            id={id}
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

      {comments ? (
        <div>
          <CommentsContainer
            comments={commentsComponent}
            serviceId={id}
            serviceName={name}
          />
        </div>
      ) : (
        <div className="flex justify-center my-4">
          <span className="loading loading-spinner loading-lg text-center"></span>
        </div>
      )}
    </div>
  );
};

export default index;
