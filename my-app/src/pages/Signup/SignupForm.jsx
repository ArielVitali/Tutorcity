import Form from "../../components/Form/index.jsx";
import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";

const SignupForm = () => {
  const content = [
    <div>
      <FormLabel text="First Name" styles="font-medium" />
      <FormInput
        type="text"
        name="firstName"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,
    <div>
      <FormLabel text="Last Name" styles="font-medium" />
      <FormInput
        type="text"
        name="lastName"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,
    <div>
      <FormLabel text="Email" styles="font-medium" />
      <FormInput
        type="email"
        name="email"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,
    <div>
      <FormLabel text="Password" styles="font-medium" />
      <FormInput
        type="password"
        name="password"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
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

  const styles = "mt-8 space-y-5";

  return <Form content={content} styles={styles} />;
};

export default SignupForm;
