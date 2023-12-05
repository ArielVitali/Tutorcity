import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext.jsx";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await login(formData.email, formData.password);
      if (response) {
        navigate("/ProviderHome");
      }
    } catch (error) {
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
      <div key={"password"}>
        <label className="font-medium">Password</label>
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
        Login
      </button>
      <div key={"forgotPasswordLink"} className="text-center">
        <Link to={"/request-password-reset"} className="hover:text-[#5dd39e] ">
          Forgot password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
