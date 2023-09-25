import Form from "../../components/Form/index.jsx";
import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";
import { useAuth } from "../../context/AuthContextProvider/AuthContext.jsx";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login } = useAuth();

  const content = [
    <div key={"email"}>
      <FormLabel text="Email" styles="font-medium" />
      <FormInput
        type="email"
        name="email"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>,
    <div key={"password"}>
      <FormLabel text="Password" styles="font-medium" />
      <FormInput
        type="password"
        name="password"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>,
    <Link key={"loginButton"} to={"/ProviderHome"}>
      <Button
        type="submit"
        styles={
          "w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        }
        text={"Login"}
        onClick={login}
      />
    </Link>,
    <div key={"forgotPasswordLink"} className="text-center">
      <Link to={"/forgotPassword"} className="hover:text-indigo-600">
        Forgot password?
      </Link>
    </div>,
  ];

  const styles = "mt-8 space-y-5";

  return <Form content={content} styles={styles} />;
};

export default LoginForm;
