import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import PendingComment from "./PendingComment.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { commentsMock } from "./services.jsx";
import { serviceCommentsMock } from "./services.jsx";

const index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const serviceName = state.serviceName || "Pending Comments";

  return (
    <div>
      <div className=" md:flex md:w-full items-center">
        <div>
          <button className="btn glass m-4" onClick={() => navigate(-1)}>
            <PiArrowCircleLeftDuotone className="text-4xl" />
          </button>
        </div>
        <div className="flex justify-center">
          <h3>{serviceName}</h3>
        </div>
      </div>
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
  );
};

export default index;
