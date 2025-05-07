"use client";
import React from "react";
import img1 from "../../../public/img6.webp";
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
            Leading Search Engine Optimization{" "}
            <span className="text-[#4052a4]">Agency in Delhi, India</span>
            <br /> <br />
          </h1>
          <p className="text-base md:text-lg text-gray-500 text-left font-serif leading-relaxed">
            When we say leading, we truly mean it! We understand the fierce competition and the relentless pursuit of
            businesses to stand out. That's precisely why we make use of the best SEO tools, strategies, and solutions
            to bring our clients the results they seek.
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
            alt="SEO Agency"
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
          Moving on to the next step. What's the secret sauce of a killer SEO strategy? You guessed it - killer
          content! Crafting the best, eye-catching stuff that resonates with your audience and aligns with their
          searches is our forte. Whether it's blogs, articles, neat infographics, or informative videos, we've got the
          goods to keep your audience engaged and Google’s algorithm satisfied. <br /> <br />
          Ever considered building a backlink profile like constructing a skyscraper in the search engine forest?
          That's our game plan! Our SEO champs use squeaky-clean link-building tactics to grab top-tier backlinks from
          industry giants. Just picture this: your site securing a VIP pass to the top of search results, pulling in
          organic traffic like bees to honey! We also make use of some state-of-the-art tools to track results and
          report organic rankings. At the moment, we are using SERanking and Whatagraph to help analyze and improve our
          on-page and off-page work.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default page;