import AuthHero from "../../components/Containers/AuthHero.jsx";
import LoginForm from "./LoginForm.jsx";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-sm w-full  text-gray-600 ">
        <AuthHero
          title={"Log in to your account"}
          description={
            <div>
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </div>
          }
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default index;
