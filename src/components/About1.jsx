'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutImage from '../../public/about.jpg'; // Replace with your actual image path

const About1 = () => {
  return (
    <div className="h-auto md:h-[600px]  md:mt-20 0 w-full flex flex-col md:flex-row justify-center md:px-8 items-center md:items-end">
      {/* Left Section */}
      <motion.div
        className="h-auto md:h-[600px] w-full md:w-2/3 flex justify-center items-center px-4 md:px-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="h-auto md:h-[650px] w-full md:w-[800px]">
          <motion.div
            className="mt-0 md:mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold underline-offset-8 text-left">
              ABOUT{' '}
              <motion.span
                className="text-green-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                US
              </motion.span>
            </h1>
            <br />
            <h2 className="text-lg md:text-xl font-mono italic text-left">
              We live and breathe digital. The Internet is our home.
            </h2>
            <br />
            <p className="text-base md:text-xl text-gray-500 text-left font-serif leading-relaxed">
              We are a buzzing digital media agency based out of New Delhi, India. Our team
              consists of experienced and hardworking social bees who breathe and live
              digital. Change on Facebook, Twitter, YouTube, Instagram, Google algorithm?
              Rest assured that we are aware of it the moment it’s out. We combine our years
              of experience in creating integrated social solutions with creative output to
              generate a rich digital experience for our clients. We think, we research, we
              create, and for our clients, we thrive to deliver the best solutions to their
              every problem.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="h-auto md:h-[700px] w-full md:w-1/3 flex justify-center items-center px-4 md:px-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative group">
          <Image
            src={aboutImage}
            alt="About Us"
            height={500}
            width={500}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default About1;