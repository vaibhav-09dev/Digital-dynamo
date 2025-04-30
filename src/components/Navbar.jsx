"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/dynamo2.png";
import logo2 from "../../public/dynamo3.jpg"; // Ensure the image is in the public directory

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center opacity-80 bg-white h-[80px] w-full fixed  shadow-md z-50 transition-all duration-300">
        {/* Logo Section */}
<Link href="/">
  <motion.div
    className="h-[60px] md:h-[80px] w-[200px] md:w-[350px] flex justify-center items-center text-xl md:text-2xl font-bold text-green-500"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Image
      src={logo}
      alt="logo"
      height={60}
      width={60}
      className="object-contain md:h-[80px] md:w-[80px]"
    />
    <Image
      src={logo2}
      alt="logo2"
      height={90}
      width={120}
      className="object-contain md:h-[90px] md:w-[150px]"
    />
  </motion.div>
</Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex w-[750px] ml-40 font-bold font-sans"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Links */}
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/about"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/services"
          >
            Our Services
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/portfolio"
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/form"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="hover:text-green-500 ml-10 transition-all duration-300 relative group"
            href="/admin"
          >
            Admin
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <motion.svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ scale: 1.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </motion.svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md transition-all duration-500 ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center py-4">
            {/* Links */}
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/"
              onClick={closeMenu}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/about"
              onClick={closeMenu}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/services"
              onClick={closeMenu}
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/portfolio"
              onClick={closeMenu}
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/form"
              onClick={closeMenu}
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="hover:text-green-500 py-2 transition-all duration-300 relative group"
              href="/admin"
              onClick={closeMenu}
            >
              Admin
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;