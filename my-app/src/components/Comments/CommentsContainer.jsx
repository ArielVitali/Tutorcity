import { useState } from "react";
import AddComment from "./AddComment.jsx";
import { PiPlusCircleDuotone } from "react-icons/pi";

const CommentsContainer = ({ comments, serviceName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="bg-white flex justify-center">
        <div className="max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 md:flex justify-center ">
            <h4 className=" text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:w-full">
              Read trusted reviews from our customers
            </h4>
            <div className="w-full flex justify-center md:w-fit">
              <button className="btn btn-circle m-4 " onClick={openModal}>
                <PiPlusCircleDuotone className="text-3xl" />
              </button>
            </div>
          </div>
          <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {comments}
          </div>
        </div>
      </section>
      {isModalOpen && (
        <AddComment closeModal={closeModal} serviceName={serviceName} />
      )}
    </div>
  );
};

export default CommentsContainer;
