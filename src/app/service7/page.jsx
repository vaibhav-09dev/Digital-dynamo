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
            Email Marketing <span className="text-green-500">Agency</span>
            <br /> <br />
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            A smart subject line can lead to clicks, and a strong and visually-appealing emailer can lead to more customers.
            Email marketing, if leveraged correctly, has a plethora of unique benefits for your business when compared to other
            content formats.
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
            alt="Email Marketing"
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
          Email marketing is the key to building strong relationships with your existing customers, reaching out to prospective
          customers and leads, and even maintaining relationships with past customers. Since it is one of the most effective and
          personalised forms of marketing out there, if done right, it can work wonders! Digital Dynamo Delhi, a digital marketing
          agency in Delhi, can help you build effective email marketing campaigns that make users click, read, and want more.
          <br /> <br />
          Our specialised team of highly experienced marketers ensures that the communication aligns with your brand and goals
          completely while still being personalised, and our design team helps make it visually appealing and unforgettable.
          Along with this, our planning team helps you target the right audience for maximum conversions and ROI. We also help
          streamline the delivery process so that sending emailers becomes an easy and secure process! If you already have the
          big idea that you want to communicate to your audience, our social media and content teams can help you tweak it to
          ensure that your readers are engaged throughout. Moreover, we can also help craft the absolute best subject lines to
          ensure that it doesn’t end up in the spam or junk folders. Before we send out any emailer, we also test it with a range
          of email clients to ensure that it’s reaching the right folder and the right audience.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;