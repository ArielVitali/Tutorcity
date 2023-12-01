import Form from "../../components/Form/index.jsx";
import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";
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
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register(formData);
      console.log(response);

      if (response) {
        navigate("/ProviderHome");
      }
    } catch (error) {
      console.error("Error trying to signup:", error);
    }
  };

  const content = [
    <div>
      <FormLabel text="First Name" styles="font-medium" />
      <FormInput
        type="text"
        name="first_name"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
        value={formData.first_name}
        onChange={handleInputChange}
      />
    </div>,
    <div>
      <FormLabel text="Last Name" styles="font-medium" />
      <FormInput
        type="text"
        name="last_name"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
        value={formData.last_name}
        onChange={handleInputChange}
      />
    </div>,
    <div>
      <FormLabel text="Email" styles="font-medium" />
      <FormInput
        type="email"
        name="email"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
        value={formData.email}
        onChange={handleInputChange}
      />
    </div>,
    <div>
      <FormLabel text="Password" styles="font-medium" />
      <FormInput
        type="password"
        name="password"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
        value={formData.password}
        onChange={handleInputChange}
      />
    </div>,
    <Button
      key={"signupButton"}
      type="submit"
      styles={
        "w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
      }
      text={"Sign Up"}
    />,
  ];

  // <Form content={content} styles={styles} />
  const styles = "mt-8 space-y-5";

  return (
    <form className={styles} onSubmit={handleSubmit}>
      {content.map((element, index) => {
        return <div key={index}>{element}</div>;
      })}
    </form>
  );
};

export default SignupForm;
