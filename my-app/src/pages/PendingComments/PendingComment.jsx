import React from "react";

const PendingComment = ({ serviceTitle, name, email, comment, id }) => {
  const handleAccept = () => {
    fetch(`https://localhost:8080/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Accepted" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment accepted:", data);
        // Perform any additional actions if needed
      })
      .catch((error) => {
        console.error("Error accepting comment:", error);
      });
  };

  const handleReject = () => {
    fetch(`https://localhost:8080/comments/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Comment accepted:", data);
        // Perform any additional actions if needed
      })
      .catch((error) => {
        console.error("Error accepting comment:", error);
      });
  };

  return (
    <div className="p-4 my-2 w-full  md:w-full bg-gradient-to-r from-[#dde7c7] via-[#bfd8bd] to-[#98c9a3] shadow-2xl rounded-md">
      <div className="w-full my-2 flex justify-center">
        <h5>{serviceTitle}</h5>
      </div>

      <div className="w-full my-2 sm:flex">
        <div className="flex w-full justify-between">
          <p className="mx-4 font-bold">Name</p>
          <p className="mx-4">{name}</p>
        </div>
        <div className="flex w-full justify-between">
          <p className="mx-4 font-bold">Email</p>
          <p className="mx-4">{email}</p>
        </div>
      </div>
      <div className="w-full my-2 ">
        <div className="py-1">
          <p className="mx-4 font-bold">Comment</p>
        </div>
        <div className="mx-4 bg-white rounded-md ">
          <p className="p-4">{comment}</p>
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
