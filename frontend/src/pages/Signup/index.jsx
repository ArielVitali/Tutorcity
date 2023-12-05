import AuthHero from "../../components/Containers/AuthHero.jsx";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm.jsx";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileFocus="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 ">
        <div className="max-w-sm w-full  text-gray-600 ">
          <AuthHero
            title={"Create an account"}
            description={
              <div>
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-[#5dd39e] font-semibold hover:text-[#1f2421]"
                >
                  Log in
                </Link>
              </div>
            }
          />
          <SignupForm />
        </div>
      </div>
    </motion.div>
  );
};

export default index;
