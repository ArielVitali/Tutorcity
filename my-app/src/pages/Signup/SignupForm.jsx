import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
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
      const response = await register(formData);

      if (response) {
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error trying to signup:", error);
    }
  };

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
      <div key={"first_name"}>
        <label className="font-medium">First name</label>
        <input
          type="text"
          name="first_name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.first_name}
          onChange={handleInputChange}
        />
      </div>
      <div key={"last_name"}>
        <label className="font-medium">Last name</label>
        <input
          type="text"
          name="last_name"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          value={formData.last_name}
          onChange={handleInputChange}
        />
      </div>
      <div key={"email"}>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          onChange={handleInputChange}
          value={formData.email}
        />
      </div>
      <div key={"phone_number"}>
        <label className="font-medium">Phone number</label>
        <input
          type="text"
          name="phone_number"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
          onChange={handleInputChange}
          value={formData.phone_number}
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
          value={formData.password}
        />
      </div>
      <button
        className="w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default SignupForm;
