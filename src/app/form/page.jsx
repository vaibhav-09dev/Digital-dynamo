"use client";
import React, { useState ,useEffect} from "react";
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
      await axios.post("http://localhost:3000/api/ConsumerData", user).then((res) => {
        alert("Request sent successfully!");
        setuser({
          Name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      });
      await axios.get("http://localhost:3000/api/Sendmail");
    } catch (error) {
      console.log("Error in sending:", error);
      alert("Failed to send the request. Please try again.");
    }
  };
  

  return (
    <motion.div
      className="h-auto md:h-[50rem] rounded-md bg-gray-200 flex flex-col items-center justify-center relative w-full mt-10 p-4 md:p-36 md:mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.div
        className="flex justify-center items-center mt-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl font-serif font-bold underline-offset-8 text-center">
          Coffee or Beer?<span className="text-green-500"> It's on us!</span>
        </h1>
      </motion.div>
      <br />
      <motion.h2
        className="text-sm md:text-lg font-mono text-gray-700 italic text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Social is in our name! We love connecting with people and exchanging thoughts and ideas. Please connect with us here or send a
        three-eyed raven. We shall get back to you 🙂
      </motion.h2>
      <br />
      <br />

      {/* Form Section */}
      <motion.form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-[600px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input
          type="text"
          value={user.Name}
          onChange={(e) => setuser({ ...user, Name: e.target.value })}
          placeholder="Enter name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
          placeholder="Enter email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
        <input
          type="text"
          value={user.subject}
          onChange={(e) => setuser({ ...user, subject: e.target.value })}
          placeholder="Enter subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          value={user.message}
          onChange={(e) => setuser({ ...user, message: e.target.value })}
          placeholder="Enter message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input
          type="text"
          value={user.phone}
          onChange={(e) => setuser({ ...user, phone: e.target.value })}
          placeholder="Enter phone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <motion.button
          type="submit"
          onClick={Send}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default page;