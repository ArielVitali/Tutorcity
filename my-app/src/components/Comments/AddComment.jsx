const AddComment = ({ closeModal, serviceName }) => {
  return (
    <dialog open className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box bg-red-100">
        <h3 className="font-bold text-lg my-2">
          Add a comment to {serviceName}
        </h3>

        <div className=" grid grid-cols-1 ">
          <form className="flex w-full">
            <div className="  px-5 py-10   bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 ">
                  <label
                    htmlFor="contact-form-name"
                    className="text-white w-full flex py-2"
                  >
                    Name
                  </label>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-name"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="text-gray-700" for="name">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      id="comment"
                      placeholder="Enter your comment"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="btn py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button className="btn my-4" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddComment;
