"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window is available");
    }
  }, []);

  const [user, setuser] = useState({
    Name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const Send = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dynamo-ihj9.vercel.app/api/ConsumerData", user).then((res) => {
        alert("Request sent successfully!");
        setuser({
          Name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      });
      await axios.get("https://dynamo-ihj9.vercel.app/api/Sendmail");
    } catch (error) {
      console.log("Error in sending:", error);
      alert("Failed to send the request. Please try again.");
    }
  };

  return (
    <motion.div
  className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center mt-16 md:mt-20 justify-center p-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Title Section */}
  <motion.div
    className="text-center mb-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
      Let's Connect! <span className="text-[#213798]">We'd love to hear from you</span>
    </h1>
    <p className="text-lg md:text-xl font-mono text-gray-700 italic mt-4">
      Whether it's coffee, beer, or just a chat, we're here for you. Drop us a message or visit us!
    </p>
  </motion.div>

  {/* Flex Container for Contact Information and Form */}
  <div className="flex flex-col md:flex-row gap-8 w-full md:w-full lg:w-3/4">
    {/* Contact Information Section */}
    <motion.div
      className="flex-1  p-4 rounded-lg "
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl md:text-4xl font-bold font-serif md:mt-20 text-gray-800 mb-6">Contact Information</h2>
     
      <div className="mb-6">
        <h3 className="text-lg md:text-2xl font-extrabold text-gray-700">Call Us:</h3>
        <a
          href="tel:+919711647737"
          className="text-gray-600 hover:text-[#182f94] font-bold text-lg md:text-xl"
        >
          +91 9711647737
        </a>
      </div>
      <div>
        <h3 className="text-lg md:text-2xl font-extrabold text-gray-700">Email Us:</h3>
        <a
          href="mailto:Ddynamo193@gmail.com"
          className="text-gray-600 hover:text-[#182f94] font-bold text-lg md:text-xl"
        >
          Ddynamo193@gmail.com
        </a>
      </div>
    </motion.div>

    {/* Form Section */}
    <motion.form
      className="flex-1 bg-gray-100  rounded-lg px-8 pt-6 pb-8"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      onSubmit={Send}
    >
      <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 mb-6 text-center">
        Send Us a Message
      </h2>
      <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        type="text"
        value={user.Name}
        onChange={(e) => setuser({ ...user, Name: e.target.value })}
        placeholder="Enter your name"
        className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Email</label>
      <input
        type="email"
        value={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        placeholder="Enter your email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Subject</label>
      <input
        type="text"
        value={user.subject}
        onChange={(e) => setuser({ ...user, subject: e.target.value })}
        placeholder="Enter the subject"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Message</label>
      <textarea
        name="message"
        value={user.message}
        onChange={(e) => setuser({ ...user, message: e.target.value })}
        placeholder="Enter your message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Phone Number</label>
      <input
        type="tel"
        value={user.phone}
        onChange={(e) => setuser({ ...user, phone: e.target.value })}
        placeholder="Enter your phone number"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <motion.button
        type="submit"
        className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  </div>
</motion.div>
  );
};

export default page;