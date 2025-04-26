"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import strategy from "../../public/strategy.jpeg";

const Sixth = () => {
  return (
    <div className="h-auto md:h-[700px] flex flex-col md:flex-row justify-center items-end bg-gray-200">
      {/* Left Section */}
      <motion.div
        className="h-55 md:h-[700px] w-full md:w-1/2 bg-gray-400 flex justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative  h-full w-full">
          <Image
            src={strategy}
            alt="strategy"
            layout="fill" // Makes the image cover the entire container
            objectFit="cover" // Ensures the image scales properly
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="h-auto md:h-[700px] w-full md:w-1/2 bg-gray-100 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white h-auto md:h-[650px] w-full md:w-[650px] p-4 md:p-0 rounded-lg shadow-lg">
          <div className="mt-8 md:mt-28">
            <h1 className="text-2xl md:text-4xl font-bold underline-offset-8 text-center md:text-left md:ml-24 text-black">
              Strategy,<br /> Creativity & Results!
            </h1>
            <br />
            <h2 className="text-lg md:text-xl font-mono italic text-center md:text-left md:ml-24 text-gray-700">
              Our approach is backed by  strategy, creativity, and optimized  for results.
            </h2>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-center md:text-left md:ml-24 leading-relaxed">
              We understand that each client and  each  project we <br /> undertake  is  different and so we have developed a <br />  repeatable  process that   we  know 
              works. Our methodology<br /> puts the user  at the heart of the  experience from  the start. <br />By working iteratively  through a  pre-defined set of stages,<br /> we  create beautiful and usable  solutions  that work hard and <br /> deliver targeted results.
            </p>
            <br />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sixth;