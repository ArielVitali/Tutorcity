import React from "react";

const PendingComment = ({
  serviceTitle,
  hasServiceTitle,
  name,
  email,
  comment,
}) => {
  return (
    <div className="p-4 my-2 w-full  md:w-full bg-red-200 rounded-md">
      {hasServiceTitle && (
        <div className="w-full my-2 flex justify-center">
          <h5>{serviceTitle}</h5>
        </div>
      )}

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
          <button className="btn btn-success">Accept</button>
        </div>
        <div className="my-4 w-full flex justify-center">
          <button className="btn btn-error">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default PendingComment;
