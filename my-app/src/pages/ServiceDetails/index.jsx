import DetailsContainer from "./DetailsContainer.jsx";
import CommentsContainer from "./Comments/CommentsContainer.jsx";
import { useLocation } from "react-router-dom";
import ServiceHomeComments from "./Comments/ServiceHomeComments.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  getCommentsByService,
  // getPublicUserData,
} from "../../api/apiDataSource";

const index = () => {
  const [comments, setComments] = useState(null);
  let { state } = useLocation();
  const { service } = state;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentData = await getCommentsByService(service._id);
        setComments(commentData);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchComments();
  }, [service._id]);

  const commentsComponent = comments
    ? comments.map((comment, index) => (
        <ServiceHomeComments key={index} comment={comment} />
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
          <DetailsContainer service={service} />
        </div>
      </motion.div>

      {comments ? (
        <div>
          <CommentsContainer
            comments={commentsComponent}
            serviceId={service._id}
            serviceName={service.name}
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
