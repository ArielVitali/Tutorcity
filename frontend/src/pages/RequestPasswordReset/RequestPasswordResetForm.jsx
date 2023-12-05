import { requestPasswordReset } from "../../api/apiDataSource.js";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const RequestPasswordResetForm = () => {
  const { openToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await requestPasswordReset(formData.email);

      if (response) {
        openToast("Email sent", "success");
        navigate("/login");
      }
    } catch (error) {
      openToast("Error sending email", "error");
      console.error("Error trying to login:", error);
    }
  };
  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div key={"email"}>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          onChange={handleInputChange}
        />
      </div>
      <button
        className="w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default RequestPasswordResetForm;
