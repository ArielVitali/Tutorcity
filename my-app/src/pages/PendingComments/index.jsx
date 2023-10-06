import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import PendingComment from "./PendingComment.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { commentsMock } from "./services.jsx";
import { serviceCommentsMock } from "./services.jsx";
import ActionsNav from "../../components/ActionsNav/index.jsx";
import { motion } from "framer-motion";

const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const serviceName = state.serviceName || "Pending Comments";

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

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
        <ActionsNav title={serviceName} items={buttons} />
        <div className=" md:flex md:justify-center ">
          <div className="md:w-[1000px]">
            <ul>
              {serviceName === "Pending Comments"
                ? commentsMock.map((comment, index) => (
                    <li key={index} className="p-4">
                      <PendingComment
                        key={index}
                        serviceTitle={comment.serviceTitle}
                        hasServiceTitle={comment.hasServiceTitle}
                        name={comment.name}
                        email={comment.email}
                        comment={comment.comment}
                      />
                    </li>
                  ))
                : serviceCommentsMock.map((comment, index) => (
                    <li key={index}>
                      <PendingComment
                        key={index}
                        serviceTitle={comment.serviceTitle}
                        hasServiceTitle={comment.hasServiceTitle}
                        name={comment.name}
                        email={comment.email}
                        comment={comment.comment}
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
