import { useState } from "react";
import AddComment from "./AddComment.jsx";
import { PiBellDuotone, PiPlusCircleDuotone } from "react-icons/pi";
import { useAuth } from "../../../context/AuthContextProvider/AuthContext.jsx";
import { Link } from "react-router-dom";

const CommentsContainer = ({ comments, serviceName }) => {
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <section className=" flex justify-center">
          <div className="max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 md:flex justify-center ">
              <div className="md:w-full">
                <h2 className="flex items-center justify-center h-full text-center font-bold tracking-tight text-gray-900  md:w-full">
                  Read trusted reviews from our customers
                </h2>
              </div>
              <div className="w-full flex justify-center md:w-fit">
                <Link to="/CommentsInbox" state={{ serviceName }}>
                  <button className="btn btn-circle m-4 ">
                    <PiBellDuotone className="text-3xl" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:w-[1000px] drop-shadow-lg mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
              {comments}
            </div>
          </div>
        </section>
      ) : (
        <section className="flex justify-center">
          <div className="max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 md:flex justify-center ">
              <div className="md:w-full">
                <h2 className="flex items-center justify-center h-full text-center font-bold tracking-tight text-gray-900  md:w-full">
                  Read trusted reviews from our customers
                </h2>
              </div>
              <div className="w-full flex justify-center md:w-fit">
                <button className="btn btn-circle m-4 " onClick={openModal}>
                  <PiPlusCircleDuotone className="text-3xl" />
                </button>
              </div>
            </div>
            <div className="lg:w-[1000px] drop-shadow-lg mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
              {comments}
            </div>
          </div>
        </section>
      )}

      {isModalOpen && (
        <AddComment closeModal={closeModal} serviceName={serviceName} />
      )}
    </div>
  );
};

export default CommentsContainer;
