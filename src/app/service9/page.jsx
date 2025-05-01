"use client";
import React from "react";
import img1 from "../../../public/img1.webp";
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
            Media Planning & <br /> <span className="text-green-500">Buying Agency</span>
            <br /> <br />
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            Media planning and buying is an integral part of running a holistic, 360-degree digital marketing campaign.
            While your content strategy does speak for itself, media planning and buying helps give it that boost so
            that it reaches a larger target audience and resonates even further with them.
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
            alt="Media Planning and Buying"
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
          The Digital Dynamo Delhi team is connected with a large, extensive network of media partners who help us offer
          your users an immersive, fully-integrated experience. We have many accredited communication patterns and
          solutions that can help build your campaign further. These mediums include websites, apps, television, radio,
          newspapers, magazines, billboards, buses, bus shelters, webpages, mail drops, and various other niche media
          that we evaluate according to your requirements and target audience. We help you select the optimal
          combination of various media platforms and outlets so that your message translates into the minds of your
          audience effectively.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;