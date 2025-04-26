"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-start">
      <div className="flex justify-between items-center h-[80px] w-full fixed bg-white shadow-md z-50 transition-all duration-300">
        {/* Logo Section */}
        <div className="h-[80px] w-[350px] flex justify-center items-center text-2xl font-bold text-green-500">
          Logo
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[750px] ml-40 font-bold font-sans">
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/about"}>
            About Us
          </Link>
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/services"}>
            Our Service
          </Link>
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/portfolio"}>
            Our Work
          </Link>
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/form"}>
            Contact Us
          </Link>
          <Link className="hover:text-green-500 ml-10 transition-all duration-300" href={"/admin"}>
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center mr-4">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md transition-all duration-500 ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center py-4">
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/about"}>
              About Us
            </Link>
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/services"}>
              Our Service
            </Link>
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/portfolio"}>
              Our Work
            </Link>
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/form"}>
              Contact Us
            </Link>
            <Link className="hover:text-green-500 py-2 transition-all duration-300" href={"/admin"}>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;