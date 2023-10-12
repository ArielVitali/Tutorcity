import React from "react";
import Educator from "../../assets/img/educator/Educator.jsx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HomeHero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="text-center lg:text-start hero-content flex-col lg:flex-row-reverse">
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileFocus="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="hidden lg:block">
            <Educator
              width={"500"}
              height={"500"}
              styles={
                "mask mask-hexagon bg-gradient-to-r from-[#7a9e7e]  to-[#b3efb2] "
              }
            />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileFocus="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-full">
            <h1 className="text-5xl font-bold">TutorCity</h1>
            <p className="py-6">
              Welcome to TutorCity, where academic success meets personalized
              learning. Our platform connects you with expert tutors across a
              wide range of subjects, empowering you to unlock your full
              potential.
            </p>

            <Link smooth={true} duration={1000} to="services">
              <button className="btn bg-[#73e2a7] hover:bg-[#1c7c54]">
                Know more
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
