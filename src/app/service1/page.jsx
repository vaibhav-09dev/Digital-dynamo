"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../public/img10.webp"; // Ensure the image is in the public directory

const page = () => {
  return (
    <motion.div
      className="mt-20 md:mt-20 mb-8"
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
          className="w-full md:w-1/2 h-auto md:h-[400px] px-4 md:px-8 md:ml-28 md:mt-60"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold underline-offset-8 text-left md:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Digital Marketing <span className="text-[#4052a4]">Strategy</span> <br />
            & Planning <span className="text-[#4052a4]">Agency</span> <br /> <br />
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have a look at our most innovative strategies here! <br /> <br />
            The key to a successful campaign is a well thought-out strategy. The Digital Dynamo Delhi team, with their unmatched years of experience, create and execute
            the ideal strategies and plans for your business, keeping in mind the.
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
            alt="Digital Marketing Strategy"
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
          With any and every strategy that we implement, though, we always aim to grow your brand and increase your revenue.
          Our approach is equal parts creative and technical, with data playing a key and central role. We focus on helping you realise
          your digital goals to the fullest, while ensuring that creativity doesn’t get put in the back seat. We truly do love a
          challenge and while we do let our creative juices flow, we also ensure that the plan we present to you is realistic,
          achievable and doable. Along with this, we try to create an immersive and unforgettable experience for your audience that is
          completely unmatched. It doesn’t matter if you’re a startup or a multi-national
          company - we are confident that our team will provide you with a strategy that will hit your targets bang on! <br /> <br />
          Our young, creative, and highly experienced social, design and digital planning teams are brimming with unique
          ideas that will take your brand and business to the next level. Our website development team ensures that your users
          have the best experience possible, every single time, and our servicing team ensures that all your needs are met.
          Along with this,
          our paid media and business team ensures that the final strategy drives profits and maximises ROI.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default page;