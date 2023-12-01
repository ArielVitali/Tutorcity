import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import Form from "../../components/Form/index.jsx";
import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import { UserContext } from "../../context/UserContext/UserContext.jsx";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(email, password);
      console.log(response);
      if (response) {
        navigate("/ProviderHome");
      }
    } catch (error) {
      console.error("Error trying to login:", error);
    }
  };

  const content = [
    <div key={"email"}>
      <FormLabel text="Email" styles="font-medium" />
      <FormInput
        type="email"
        name="email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,
    <div key={"password"}>
      <FormLabel text="Password" styles="font-medium" />
      <FormInput
        type="password"
        name="password"
        required={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,
    <Button
      key={"loginButton"}
      type="submit"
      styles={
        "w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
      }
      text={"Login"}
    />,
    <div key={"forgotPasswordLink"} className="text-center">
      <Link to={"/forgotPassword"} className="hover:text-[#5dd39e] ">
        Forgot password?
      </Link>
    </div>,
  ];

  const styles = "mt-8 space-y-5";

  return <Form content={content} styles={styles} onSubmit={onSubmit} />;
};

export default LoginForm;
