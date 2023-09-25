import AuthHero from "../../components/Containers/AuthHero.jsx";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm.jsx";

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-sm w-full  text-gray-600 ">
        <AuthHero
          title={"Create an account"}
          description={
            <div>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </div>
          }
        />
        <SignupForm />
      </div>
    </div>
  );
};

export default index;
