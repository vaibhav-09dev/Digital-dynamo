"use client";
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../public/img1.webp";
import Image from "next/image";

const page = () => {
  return (
    <motion.div
      className="mt-20 md:mt-44 mb-8"
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
          className="w-full md:w-1/2 h-auto md:h-[400px] px-4 md:px-8 md:ml-28"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold underline-offset-8 text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Creative <span className="text-[#4052a4]">Strategy </span> & Web
            Graphics <span className="text-[#4052a4]">Design Agency</span>
          </motion.h1>
          <br />
          <motion.p
            className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Check out these campaign reports to see how we plan, execute & deliver! <br /> <br />
            Creativity truly is the way of life at WeBeeSocial. Every single member of our digital marketing team is picked because they bring
            that ‘spark’, or if we’re being a little fancy, that je ne sais quoi, to the table.
          </motion.p>
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
            alt="Creative Strategy"
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
        <motion.p
          className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Whenever we set out to create something - whether that’s a topical creative or a year-long campaign - we think about the ‘why’ before
          the ‘how’. This thought process is the reason our clients keep coming back to us for more - we break everything down and look at it
          from a 360-degree perspective before building it back up, into something bigger and better. When strategizing, we aim to focus on the
          objectives of each individual campaign before suggesting what will work to achieve the overall desired results. To us, every single
          element of our campaigns must play two roles flawlessly - they should be both functional and engaging. <br /> <br />
          We can also promise you that we’re not just keeping up with the trends, but starting them too! Our team comprises of young, fresh,
          and creative individuals - and every single one of them is a powerhouse of talent. After all, we don’t just believe in giving you the
          best - we also bring it home. Just have a look at our award-winning campaign here! Moreover, our creative agency uses state-of-the-art
          tools and keeps a tab on the best industry practices so that you always get the desired results - whether that is building your brand
          from the ground up and making sure that the right people know about it, or encouraging engagement on the optimal platforms to help
          boost your growth and awareness.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default page;