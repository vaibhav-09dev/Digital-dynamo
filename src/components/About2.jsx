'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import leftImage from '../../public/about.png'; // Replace with your actual image path

const About2 = () => {
  return (
    <div className="h-auto md:h-[700px] w-full bg-gray-200 flex flex-col md:flex-row justify-center items-end">
      {/* Left Section */}
      <motion.div
        className="h-auto md:h-[700px] w-full md:w-1/3 flex justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative ">
          <Image
            src={leftImage}
            alt="Left Section Image"
            height={500}
            width={600}
            className="rounded-lg shadow-lg mt-12 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="h-auto md:h-[500px] w-full md:w-2/3 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-auto md:h-[650px] w-full md:w-[800px] p-4 md:p-0">
          <motion.div
            className="mt-8 md:mt-32"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold underline-offset-8 text-left md:text-left">
              What <motion.span className="text-[#4156b3]" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>We Do?</motion.span>
            </h1>
            <br /> <br />
            <motion.p
              className="text-base md:text-lg text-gray-500 text-left md:text-left font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <span className="font-bold">
                We are working with clients from India, U.K., Canada, New Zealand, Hong Kong, Singapore, U.A.E., etc. across verticals like ecommerce, technology, retail, and events.
              </span>
              <br />
              From marketing events like Auto Expo - Components and MTV unplugged to creating some incredible ROAS (Return on ad spends) for ecommerce brands, our team loves to be creative and strategic about different lines of businesses. We won the 'Best Digital Innovation' award at the ACT summit in Pune where our digital activation campaign for ACMA Safer workplaces won accolades from auto component OEMs. We are hungry for creativity and passionate about driving results. Our clients below can attest to our efforts!
            </motion.p>
            <br />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About2;