"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dg4 from "../../public/dg4.webp"; // Ensure the image is in the public directory

const Fourth = () => {
  return (
    <div className="h-auto md:h-[700px] flex flex-col md:flex-row justify-center items-end bg-gray-200">
      {/* Left Section */}
      <motion.div
        className="h-auto md:h-[700px] w-full md:w-1/2 bg-gray-100 flex justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white h-auto md:h-[650px] w-full md:w-[600px] p-4 md:p-0 rounded-lg shadow-lg">
          <div className="mt-8 md:mt-32">
            <h1 className="text-2xl md:text-4xl font-bold underline-offset-8 text-center md:text-left md:ml-32 text-black">
              Integrated Digital <br /> Solutions
            </h1>
            <br />
            <h2 className="text-lg md:text-xl font-mono italic text-center md:text-left md:ml-32 text-gray-700">
              Insights, Metrics and Analytics - <br /> Everything is connected!
            </h2>
            <br />
            <p className="text-base md:text-lg text-gray-500 text-center md:text-left md:ml-32 leading-relaxed">
              In a digital world where everything’s <br /> connected, we believe that the <br />
              approach to digital communications <br /> has to be joined-up too. Our approach <br />
              combines creativity & technology and <br /> marketing disciplines — from mobile <br />
              and responsive web design to search <br /> and social media campaigns — all <br /> under one roof.
            </p>
            <br />
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="h-48 md:h-[700px] w-full md:w-1/2 bg-gray-300 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative h-full w-full mt-1">
          <Image
            src={dg4}
            alt="strategy"
            layout="fill" // Makes the image cover the entire container
            objectFit="cover" // Ensures the image scales properly
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Fourth;