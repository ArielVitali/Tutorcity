import ForgotPasswordForm from "./ForgotPasswordForm.jsx";
import AuthHero from "../../components/Containers/AuthHero.jsx";

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-sm w-full  text-gray-600 ">
        <AuthHero
          title={"Reset your password"}
          description={
            "To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process."
          }
        />
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default index;
