import ActionsNav from "../../components/ActionsNav/index.jsx";
import List from "./List";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getHiringsByProvider } from "../../api/apiDataSource.js";

const index = () => {
  const [acceptedHirings, setAcceptedHirings] = useState([]);
  const [canceledHirings, setCanceledHirings] = useState([]);
  const [finalizedHirings, setFinalizedHirings] = useState([]);
  const [pendingHirings, setPendingHirings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHirings = async () => {
      try {
        const hiringsData = await getHiringsByProvider();
        setAcceptedHirings(
          hiringsData.filter((item) => item.status === "Accepted")
        );
        setCanceledHirings(
          hiringsData.filter((item) => item.status === "Canceled")
        );
        setFinalizedHirings(
          hiringsData.filter((item) => item.status === "Finalized")
        );
        setPendingHirings(
          hiringsData.filter((item) => item.status === "Pending")
        );
      } catch (error) {
        console.error("Error trying to get hirings:", error);
      }
    };
    fetchHirings();
  }, []);

  const handleStatusChange = (hiringId, newStatus, allHirings) => {
    // Update the state based on the new status
    const updatedHirings = allHirings.map((hiring) =>
      hiring._id === hiringId ? { ...hiring, status: newStatus } : hiring
    );

    setAcceptedHirings(
      updatedHirings.filter((item) => item.status === "Accepted")
    );
    setCanceledHirings(
      updatedHirings.filter((item) => item.status === "Canceled")
    );
    setFinalizedHirings(
      updatedHirings.filter((item) => item.status === "Finalized")
    );
    setPendingHirings(
      updatedHirings.filter((item) => item.status === "Pending")
    );
  };

  const buttons = [
    {
      element: (
        <button className="btn glass" onClick={() => navigate(-1)}>
          <PiArrowCircleLeftDuotone className="text-3xl" />
        </button>
      ),
    },
  ];

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
                onStatusChange={handleStatusChange}
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
                onStatusChange={handleStatusChange}
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
                onStatusChange={handleStatusChange}
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
                onStatusChange={handleStatusChange}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
