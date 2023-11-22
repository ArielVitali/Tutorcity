import { PiXDuotone } from "react-icons/pi";
import { PiMaskHappyDuotone } from "react-icons/pi";
import { useState } from "react";

const AddComment = ({ closeModal, serviceName, serviceId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 1, // Default rating
    status: "Pending",
    service: serviceId,
    serviceName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      // Handle rating input separately
      setFormData({
        ...formData,
        [name]: parseInt(value, 10), // Convert to integer
      });
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSend = () => {
    // Make a POST request with the form data
    fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response data as needed
        console.log("Comment added:", data);
        // Close the modal or perform other actions
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <dialog open className="modal modal-bottom sm:modal-middle ">
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
                      id="contact-form-name"
                      name="name"
                      value={formData.name} // Bind the value to the state
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
                    Email
                  </label>
                  <div className=" relative ">
                    <input
                      type="text"
                      id="contact-form-email"
                      name="email"
                      value={formData.email} // Bind the value to the state
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
