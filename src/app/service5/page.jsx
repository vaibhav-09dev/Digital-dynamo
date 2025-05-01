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
            Website Design <br /> <span className="text-green-500">& Development Agency</span>
          </h1>
          <br />
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            Consumer perceptions about a brand are not shaped merely by its product offerings or advertisements. In today’s digital
            world, a company’s website and social media channels also play a crucial role in determining consumer perceptions and their
            buying behaviour. Your website is usually the first point of contact for your audience. Thus, you want to be spending time
            and energy on it to ensure that your potential customers develop a positive image of your brand or product. <br /> <br />
            
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
            alt="Website Design and Development"
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
          Digital Dynamo India is a website design agency in Delhi, India, that can help you develop an attractive, intuitive,
          interactive, and user-friendly e-commerce or company website. With proven expertise in developing top-quality websites, we’ll
          ensure that your audience is hooked from the minute they land on your homepage. Whether it is brand awareness or lead
          generation, we optimize your website and its design to achieve your desired targets. If you have an eCommerce brand, our team
          can help monetize your existing website by adding the necessary e-commerce components such as a shopping cart and payment
          gateways. <br /> <br />
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;