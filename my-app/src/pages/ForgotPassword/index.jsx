import ForgotPasswordForm from "./ForgotPasswordForm.jsx";
import AuthHero from "../../components/Containers/AuthHero.jsx";
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
            title={"Reset your password"}
            description={
              "To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process."
            }
          />
          <ForgotPasswordForm />
        </div>
      </div>
    </motion.div>
  );
};

export default index;
