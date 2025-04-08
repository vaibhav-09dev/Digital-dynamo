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
    <div className="flex justify-between items-center h-[80px] w-full fixed bg-white shadow-md z-50 md:mt-0 mt-0.5">
      <div className="h-[80px] w-[350px] flex justify-center items-center">logo</div>
      <div className="hidden md:flex w-[650px] ml-40 font-sans">
        <Link className="hover:text-green-500 ml-10" href={'/'}>Home</Link>
        <Link href={'/about'} className="ml-10 hover:text-green-500">About Us</Link>
        <Link href={'/services'} className="ml-10 hover:text-green-500">Our Service</Link>
        <Link href={'/portfolio'} className="ml-10 hover:text-green-500">Our Work</Link>
        <Link href={'/form'} className="ml-10 hover:text-green-500">Contact Us</Link>
        <Link href={'/admin'} className="ml-10 hover:text-green-500">Admin</Link>
      </div>
      <div className="md:hidden flex items-center mr-4">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <Link className="hover:text-green-500 py-2" href={'/'}>Home</Link>
            <Link href={'/about'} className="hover:text-green-500 py-2">About Us</Link>
            <Link href={'/services'} className="hover:text-green-500 py-2">Our Service</Link>
            <Link href={'/portfolio'} className="hover:text-green-500 py-2">Our Work</Link>
            <Link href={'/form'} className="hover:text-green-500 py-2">Contact Us</Link>
            <Link href={'/admin'} className="hover:text-green-500 py-2">Admin</Link>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;