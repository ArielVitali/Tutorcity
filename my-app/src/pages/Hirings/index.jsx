import ActionsNav from "../../components/ActionsNav/index.jsx";
import List from "./List";

import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const index = () => {
  const [acceptedHirings, setAcceptedHirings] = useState([]);
  const [canceledHirings, setCanceledHirings] = useState([]);
  const [finalizedHirings, setFinalizedHirings] = useState([]);
  const [pendingHirings, setPendingHirings] = useState([]);

  const navigate = useNavigate();

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

  useEffect(() => {
    fetchHirings();
  }, []);

  const fetchHirings = async () => {
    try {
      const response = await fetch("http://localhost:8080/hirings");
      const data = await response.json();
      setAcceptedHirings(data.filter((item) => item.status === "Accepted"));
      setCanceledHirings(data.filter((item) => item.status === "Canceled"));
      setFinalizedHirings(data.filter((item) => item.status === "Finalized"));
      setPendingHirings(data.filter((item) => item.status === "Pending"));
    } catch (error) {
      console.error("Error fetching hirings:", error);
    }
  };

  return (
    <div>
      <ActionsNav title="Hirings" items={buttons} />
      <div className=" md:flex md:justify-center ">
        <div className="md:w-[1000px]">
          <div>
            {/* <h3 className="text-2xl font-semibold">Accepted</h3> */}
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
              <List
                hirings={pendingHirings}
                status={"Pending"}
                number={pendingHirings.length}
              />
            </motion.div>
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
              <List
                hirings={acceptedHirings}
                status={"Accepted"}
                number={acceptedHirings.length}
              />
            </motion.div>
            {/* <h3 className="text-2xl font-semibold">Canceled</h3> */}
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
              <List
                hirings={canceledHirings}
                status={"Canceled"}
                number={canceledHirings.length}
              />
            </motion.div>
            {/* <h3 className="text-2xl font-semibold">Finalized</h3> */}
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
              <List
                hirings={finalizedHirings}
                status={"Finalized"}
                number={finalizedHirings.length}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
