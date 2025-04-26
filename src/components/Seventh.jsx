"use client";
import React from "react";
import RollingGallery from "../components/ui/RollingGallery";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Seventh = () => {
  const router = useRouter();

  const sendp = () => {
    router.push("/portfolio");
  };

  return (
    <div className="h-auto md:h-[750px] w-full bg-gray-300">
      {/* Heading Section */}
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-3xl md:text-4xl font-bold mt-10 md:mt-20 text-center">
          Want to check out our portfolio?
        </p>
      </motion.div>

      {/* Rolling Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </motion.div>

      {/* Button Section */}
      <motion.div
        className="flex justify-center items-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={sendp}
          className="relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="text-xl font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            OUR WORK
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default Seventh;