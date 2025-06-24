import React from "react";
import { FaBook } from "react-icons/fa";
import { motion } from "motion/react";
const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <motion.div
        className="p-6 rounded-full border-4 border-indigo-500 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
      >
        <div className=" text-3xl text-indigo-700">
          <FaBook />
        </div>
      </motion.div>
    </div>
  );
};

export default Loading;
