import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import PendingComment from "./PendingComment.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const index = () => {
  const [pendingComments, setPendingComments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const { serviceId, serviceName } = state;

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  useEffect(() => {
    fetchPendingComments();
  }, []);

  const fetchPendingComments = async () => {
    try {
      let response = null;
      if (serviceId) {
        response = await fetch(
          `http://localhost:8080/comments?status=Pending&service=${serviceId}`
        );
      } else {
        response = await fetch("http://localhost:8080/comments?status=Pending");
      }

      const data = await response.json();
      setPendingComments(data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div>
        <ActionsNav title={"Pending Comments"} items={buttons} />
        <div className=" md:flex md:justify-center ">
          <div className="md:w-[1000px]">
            <ul>
              {pendingComments.map((comment, index) => (
                <li key={index} className="p-4">
                  <PendingComment
                    key={index}
                    serviceTitle={serviceName}
                    name={comment.name}
                    email={comment.email}
                    comment={comment.comment}
                    id={comment.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
