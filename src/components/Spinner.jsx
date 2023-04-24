import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{ repeat: Infinity, duration: 1 }}
      className="radial-progress m-16 mx-auto"
      style={{ "--value": 70 }}
    ></motion.div>
  );
};

export default Spinner;
