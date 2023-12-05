import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { useContext, useEffect, useState } from "react";
import { passwordReset } from "../../api/apiDataSource.js";
import queryString from "query-string";
import { ToastContext } from "../../context/SnackbarContext/ToastContext.jsx";

const RequestPasswordResetForm = () => {
  const { openToast } = useContext(ToastContext);
  const { setSession } = useContext(UserContext);
  const navigate = useNavigate();
  const { search } = useLocation();
  const { token } = queryString.parse(search);
  const [formData, setFormData] = useState({
    password: "",
  });

  useEffect(() => {
    // Use useEffect to set the session after the component has rendered
    if (token) {
      localStorage.setItem("jwt", JSON.stringify({ token }));
    }
  }, [setSession, token]);

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
      const response = await passwordReset(formData.password);

      if (response) {
        openToast("Password reset successfully", "success");
        navigate("/login");
      }
    } catch (error) {
      openToast("Error trying to reset password", "error");
      console.error("Error trying to login:", error);
    }
  };
  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div key={"password"}>
        <label className="font-medium">New password</label>
        <input
          type="password"
          name="password"
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
