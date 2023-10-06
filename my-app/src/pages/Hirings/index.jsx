import ActionsNav from "../../components/ActionsNav/index.jsx";
import List from "./List";
import { accepted, canceled, finalized } from "./services";
import { useNavigate } from "react-router-dom";
import { PiArrowCircleLeftDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const index = () => {
  const accept = "Accepted";
  const cancel = "Canceled";
  const finalize = "Finalized";

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
              <List Data={accepted} status={accept} number={accepted.length} />
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
              <List Data={canceled} status={cancel} number={canceled.length} />
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
                Data={finalized}
                status={finalize}
                number={canceled.length}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
