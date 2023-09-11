import { useState } from "react";
import AddComment from "./AddComment.jsx";

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
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 md:flex justify-center ">
            <h4 className=" text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:w-full">
              Read trusted reviews from our customers
            </h4>
            <div className="w-full flex justify-center md:w-fit">
              <button className="btn btn-circle m-4 " onClick={openModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  transform="rotate(45)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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
