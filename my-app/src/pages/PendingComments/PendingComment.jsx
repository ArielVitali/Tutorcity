import { updateComment, deleteComment } from "../../api/apiDataSource";

const PendingComment = ({ serviceTitle, comment, removeComment }) => {
  const handleAccept = async () => {
    try {
      const response = await updateComment(comment._id, {
        status: "Accepted",
      });
      console.log("Comment accepted:", response);
      removeComment(comment._id);
    } catch (error) {
      console.error("Error accepting comment:", error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await deleteComment(comment._id);
      console.log("Comment rejected:", response);
      removeComment(comment._id);
    } catch (error) {
      console.error("Error rejecting comment:", error);
    }
  };

  return (
    <div className="p-4 my-2 w-full  md:w-full bg-gradient-to-r from-[#dde7c7] via-[#bfd8bd] to-[#98c9a3] shadow-2xl rounded-md">
      <div className="w-full my-2 flex justify-center">
        <h5 className="text-3xl">
          {serviceTitle ? serviceTitle : comment.service.name}
        </h5>
      </div>

      <div className="my-2 sm:flex">
        <div className="flex w-full justify-start">
          <p className="mx-4 font-bold">Name</p>
          <p className="mx-4">{comment.first_name}</p>
        </div>
        <div className="flex w-full justify-start">
          <p className="mx-4 font-bold">Last name</p>
          <p className="mx-4">{comment.last_name}</p>
        </div>
      </div>
      <div className="my-2 sm:flex">
        <div className="flex w-full align-items justify-start">
          <p className="mx-4 font-bold">Rating</p>

          <div className="flex justify-center gap-0.5 text-black">
            {Array.from({ length: comment.rating }).map((_, index) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full my-2 ">
        <div className="py-1">
          <p className="mx-4 font-bold">Comment</p>
        </div>
        <div className="mx-4 bg-white rounded-md ">
          <p className="p-4">{comment.comment}</p>
        </div>
      </div>
      <div className="w-full my-2 sm:flex">
        <div className="my-4 w-full flex justify-center">
          <button
            onClick={handleAccept}
            className="btn btn-success lg:btn-wide"
          >
            Accept
          </button>
        </div>
        <div className="my-4 w-full flex justify-center">
          <button onClick={handleReject} className="btn btn-error lg:btn-wide">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingComment;
