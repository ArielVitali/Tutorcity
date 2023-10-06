import Form from "../../components/Form/index.jsx";
import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";

const ForgotPasswordForm = () => {
  const content = [
    <div key={"email"}>
      <FormLabel text="Email" styles="font-medium" />
      <FormInput
        type="email"
        name="email"
        required={true}
        styles="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
      />
    </div>,

    <Button
      key={"reset"}
      type="submit"
      styles={
        "w-full px-4 py-2 text-black   bg-[#5dd39e] border border-black hover:bg-[#1f2421] hover:text-white  rounded-lg duration-200"
      }
      text={"Reset"}
    />,
  ];

  const styles = "mt-8 space-y-5";

  return <Form styles={styles} content={content} />;
};

export default ForgotPasswordForm;
