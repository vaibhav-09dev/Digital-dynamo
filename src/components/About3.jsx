'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About3 = () => {
  return (
    <div className="h-auto md:h-[600px] w-full bg-gray-100">
      {/* Title Section */}
      <motion.div
        className="flex  justify-center items-center text-3xl md:text-5xl font-bold underline-offset-8 text-center mt-7"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          The <span className="text-[#4156b3] animate-pulse">Leadership</span>
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-7 md:mt-5 gap-8 md:gap-16 px-4">
        {/* Left Section */}
<motion.div
  className="h-auto md:h-[400px] w-full md:w-full flex flex-col  justify-center items-center px-4 md:px-8"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  <motion.p
    className="text-lg md:text-2xl text-gray-500 text-center md:text-left font-serif mt-4 md:mt-0 leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    Soumya Sharma is the Co-Founder & CEO of WebeeSocial. She also heads the Creative Department of the agency. Before setting
    up WeBeeSocial, she spearheaded some of the biggest campaigns for brands like Huawei, Intel, Ford, Dabur, etc.
  </motion.p>
  <motion.div
    className="mt-6 md:mt-10"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="w-[150px] md:w-[00px] h-[150px] md:h-[200px] bg-green-500 rounded-full shadow-lg">
      {/* Replace with an actual image */}
      <p className="text-white text-center font-bold text-lg md:text-xl flex items-center justify-center h-full">
        Photo
      </p>
    </div>
  </motion.div>
</motion.div>
        {/* Right Section */}
       
      </div>

     {/* Motto Section */}
<motion.div
  className="w-full mt-8 md:mt-12 flex justify-center items-center h-[80px] md:h-[100px] bg-yellow-300 text-xl sm:text-2xl md:text-4xl font-bold font-sans px-4 text-center leading-snug"
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