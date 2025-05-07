"use client";
import React from "react";
import img1 from "../../../public/img4.webp";
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
            Video, <span className="text-[#4052a4]">GIFs, </span> &{" "}
            <span className="text-[#4052a4]">Content <br /> Marketing</span>
          </h1>
          <br />
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            Explore some of our best work here. <br /> <br />
            Content truly is king and if marketed in the right way, it can get your brand and business the traction it
            deserves. Along with text and static images, videos and GIFs have now become the most popular content
            formats.
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
            alt="Video and GIF Marketing"
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
          Content truly is king and if marketed in the right way, it can get your brand and business the traction it
          deserves. Along with text and static images, videos and GIFs have now become the most popular content formats.
          Algorithms of search engines like Google tend to reward pages with features like social media integration,
          social bookmarking, and rich videos. Extensive studies done on digital user behaviour and content consumption
          also point towards videos and GIFs being the most attractive and attention-sustaining form of content. <br />{" "}
          <br />
          Thus, leveraging videos and GIFs is a fantastic way to capture your audience and build a prominent and
          distinctive tone of communication for your brand. WeBeeSocial, a Delhi-based digital marketing agency, has an
          in-house team dedicated to creating a unique and exciting range of online and branded video content. Our
          social media and design teams understand client goals and desired outcomes, along with the constraints, and
          deliver exceptional quality video content that matches their requirements, yet goes beyond their expectations.
          Our website video production services help amplify customer engagement, educate them about your brand and
          business, communicate your business vision, and help increase conversions.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;