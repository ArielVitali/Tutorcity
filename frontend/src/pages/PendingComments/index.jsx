import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import PendingComment from "./PendingComment.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getPendingComments } from "../../api/apiDataSource";
import Spinner from "../../components/Spinner/index.jsx";
import Empty from "../../components/empty/index.jsx";

const index = () => {
  const [pendingComments, setPendingComments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const { serviceId, serviceName } = state;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let commentData;
        if (!serviceId) {
          commentData = await getPendingComments("all");
        } else {
          commentData = await getPendingComments(serviceId);
        }
        setPendingComments(commentData);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchComments();
  }, [serviceId]);

  const removeComment = (commentId) => {
    setPendingComments((prevComments) =>
      prevComments.filter((comment) => comment._id !== commentId)
    );
  };

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  let commentsComponent = !pendingComments ? (
    <Spinner />
  ) : pendingComments.length === 0 ? (
    <Empty text={"No comments for review"} />
  ) : (
    pendingComments.map((comment, index) => (
      <li key={index} className="p-4">
        <PendingComment
          key={index}
          serviceTitle={serviceName}
          comment={comment}
          removeComment={removeComment}
        />
      </li>
    ))
  );

  return (
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
      <div className="flex justify-center">
        <div className="w-full lg:w-[1000px]">
          <ActionsNav title={"Pending Comments"} items={buttons} />

          <ul>{commentsComponent}</ul>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
