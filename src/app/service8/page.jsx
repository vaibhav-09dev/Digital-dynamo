"use client";
import React from "react";
import img1 from "../../../public/img8.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="mt-20 md:mt-44"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="w-full h-auto md:h-[400px] flex flex-col md:flex-row md:justify-center md:items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 h-auto md:h-[400px] ml-4 md:ml-28 px-4 md:px-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold underline-offset-8 text-left">
            Web Analytics <span className="text-[#4052a4]">Agency</span>
            <br /> <br />
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            Data-driven marketing is the most effective way to ensure that you’re on the right track. As with any campaign,
            we put the best strategies in place and go full guns blazing on the execution. However, our work doesn’t just end there.
            Once it’s all done, we gather all the important figures and break it all down to study it. We love to pick out the good
            and the bad, see what our audience loved, and what could’ve been done better.
            After all, this helps us do an even better job the next time around!
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 h-auto md:h-[400px] flex justify-center items-center px-4 md:px-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={img1}
            alt="Web Analytics"
            className="object-contain rounded-lg shadow-lg"
            width={500}
            height={400}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="ml-4 md:ml-28 w-full md:w-[1300px] px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
          The business and media teams at WeBeeSocial are experts in the field and can facilitate the measurement,
          collection, reporting, and analysis of web data, usage, and analytics. This truly is the key to understanding
          and then optimising web usage. Studying data helps you strategise and create further plans that help you get
          closer to reaching your goals, which is why analytics are such an integral part of our campaigns. Along with
          giving regular updates on what’s working and what’s not, we also provide clients with a monthly social media
          report that analyses the numbers and data, and lays down the way forward. Consistently and regularly analysing
          user behaviour, likes, and dislikes, helps us optimise our plan to ensure that we’re
          delivering the best results and ROI.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;