import { PiXDuotone } from "react-icons/pi";
import { useState, useContext } from "react";
import { createComment } from "../../../api/apiDataSource";
import { ToastContext } from "../../../context/SnackbarContext/ToastContext";

const AddComment = ({ closeModal, serviceName, serviceId }) => {
  const { openToast } = useContext(ToastContext);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    comment: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSend = async () => {
    try {
      await createComment(serviceId, formData);
      openToast("Comment created successfully", "success");
    } catch (error) {
      console.error("Error submitting the form:", error);
      openToast("Error creating comment", "error");
    } finally {
      closeModal();
    }
  };

  return (
    <dialog open className="modal modal-bottom sm:modal-middle backdrop-blur">
      <div className="modal-box bg-[#96e6b3]">
        <div className="flex items-center justify-between my-2">
          <h3 className="font-bold text-lg my-2">
            Add a comment to {serviceName}
          </h3>
          <button
            className="hover:bg-gray-700 rounded-lg duration-300 p-1"
            onClick={closeModal}
          >
            <PiXDuotone className="text-3xl text-black hover:text-white" />
          </button>
        </div>

        <div className=" grid grid-cols-1 ">
          <form className="flex w-full justify-center">
            <div className="  px-5 py-10 bg-[#EDF2F4] rounded-lg shadow ">
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 ">
                  <label
                    htmlFor="contact-form-name"
                    className=" w-full flex py-2"
                  >
                    Name
                  </label>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-first-name"
                      name="first_name"
                      required
                      maxLength={30}
                      value={formData.first_name}
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="col-span-2 ">
                  <label
                    htmlFor="contact-form-name"
                    className=" w-full flex py-2"
                  >
                    Last name
                  </label>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-lat-name"
                      name="last_name"
                      required
                      maxLength={30}
                      value={formData.last_name} // Bind the value to the state
                      onChange={handleChange}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="contact-form-name"
                    className=" w-full flex py-2"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    id="comment"
                    name="comment"
                    value={formData.comment} // Bind the value to the state
                    onChange={handleChange}
                    placeholder="Enter your comment"
                    rows="5"
                    cols="40"
                    required
                    maxLength={150}
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="contact-form-name"
                    className=" w-full flex py-2"
                  >
                    Rating
                  </label>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <input
                        key={ratingValue}
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        className="mask mask-star-2"
                        checked={formData.rating === ratingValue}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="w-full text-right my-4">
            <button
              onClick={handleSend}
              type="submit"
              className="btn py-2 px-4 text-white  bg-[#181d27] w-full hover:bg-[#058c42]   rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AddComment;
