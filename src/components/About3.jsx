'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About3 = () => {
  return (
    <div className="h-auto md:h-[800px] w-full bg-gray-100">
      {/* Title Section */}
      <motion.div
        className="flex justify-center items-center text-3xl md:text-5xl font-bold underline-offset-8 text-center md:text-left mt-7 md:"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          The <span className="text-green-500 animate-pulse">Leadership</span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-7 md:mt-20">
        {/* Left Section */}
        <motion.div
          className="h-auto md:h-[550px] w-full md:w-1/2 p-4 md:p-0 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left font-serif mt-4 md:mt-24 px-4 md:px-16">
            Soumya Sharma is the Co-Founder & CEO of WebeeSocial. She also heads the Creative Department of the agency. Before setting
            up WeBeeSocial, she spearheaded some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur, etc.
          </p>
          <motion.div
            className="mt-4 md:mt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-[200px] h-[200px] bg-green-500 rounded-full shadow-lg">
              {/* Replace with an actual image */}
              <p className="text-white text-center font-bold text-xl flex items-center justify-center h-full">Photo</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="h-auto md:h-[550px] w-full md:w-1/2 p-4 md:p-0 flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mt-4 md:mt-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-[200px] h-[200px] bg-green-500 rounded-full shadow-lg">
              {/* Replace with an actual image */}
              <p className="text-white text-center font-bold text-xl flex items-center justify-center h-full">Photo</p>
            </div>
          </motion.div>
          <p className="text-base md:text-lg text-gray-500 text-center md:text-left font-serif mt-4 md:mt-24 px-4 md:px-16">
            Soumya Sharma is the Co-Founder & CEO of WebeeSocial. She also heads the Creative Department of the agency. Before setting
            up WeBeeSocial, she spearheaded some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur, etc.
          </p>
        </motion.div>
      </div>

      {/* Motto Section */}
      <motion.div
        className="w-full md:mt-6 flex justify-center items-center h-[100px] bg-yellow-300 text-4xl font-bold font-sans"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        OUR motto - "Stand Out from the Competition with Our Unparalleled Strategies"
      </motion.div>
    </div>
  );
};

export default About3;